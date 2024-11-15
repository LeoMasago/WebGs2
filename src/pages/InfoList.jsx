import { useState, useEffect } from 'react';

export default function MovieListPage() {

    const [search, setSearch] = useState("")
    const [empresa, setEmpresa] = useState([]); 
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetch('https://6735116d5995834c8a91cd8b.mockapi.io/cidades', {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        })
        // verificação se é valida a requisição e caso for, retorna em json
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            // caso a requisição não seja válida, retorna um erro
            throw new Error('Erro ao buscar empresa');
        })
        // atualiza o estado com os dados recebidos da API
        .then(data => {
            setEmpresa(data); 
        })
        //captura os erros e os exibe no console caso ocorra algum problema na requisição
        .catch(error => {
            console.error(error);
        })
        .finally(()=>{
            setIsLoading(false)
        });

    }, []);

    const handleSearch = (event) => {
        setSearch(event.target.value)
        console.log(search)
    }

    const empresaFiltrada = empresa.filter(empresa => empresa.cidade.toLowerCase().includes(search.toLowerCase()))
    
    return (
        <>
            <h2 className="titulos">Veja o nome das empresas parceiras</h2>
            <input
                className="searchInfo"
                type="text"
                id="search"
                placeholder="Procurar..."
                value={search}
                onChange={handleSearch}
            />
            
            <section className="containerSobre">
            {
                isLoading ? <p>Carregando...</p> :

                empresaFiltrada.length > 0 ?

                empresaFiltrada.map(empresa => (
                    <h3 className="txt">{empresa.cidade}</h3>
                    ))
                :
                <p>Esta empresa não possui parceria conosco</p>
            }
            </section>
        </>
    );
}
