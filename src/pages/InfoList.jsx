import { useState, useEffect } from 'react';

export default function MovieListPage() {
    const [empresa, setEmpresa] = useState([]); 

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
        });
    }, []);

    return (
        <>
            <h2>Veja o nome das empresas parceiras</h2>
            <section className="">
                {empresa.map(empresa => (
                    <div key={empresa.id} className="">
                        <h3>{empresa.cidade}</h3>
                    </div>
                ))}
            </section>
        </>
    );
}
