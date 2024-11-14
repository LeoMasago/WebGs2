import { useState, useEffect } from 'react';

export default function MovieListPage() {
    const [empresa, setEmpresa] = useState([]); // Estado para armazenar os filmes

    useEffect(() => {
        fetch('https://6735116d5995834c8a91cd8b.mockapi.io/cidades', {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error('Erro ao buscar empresa');
        })
        .then(data => {
            setEmpresa(data); // Define os filmes no estado
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

    return (
        <>
            <h2>Veja o nome das empresas parceiras</h2>
            <section className="flex flex-wrap justify-between gap-4">
                {empresa.map(empresa => (
                    <div key={empresa.id} className="">
                        <h3>{empresa.cidade}</h3>
                    </div>
                ))}
            </section>
        </>
    );
}
