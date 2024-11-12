import { useEffect, useState } from "react"
import TextCard from "../components/TextCard"
import  text  from "../data/text.json";


export default function InfoList() {

    const [search, setSearch] = useState("")
    const [infos, setInfos] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    const handleSearch = (event) => {
        setSearch(event.target.value)
        console.log(search)
    }

    const text = infos.filter(infos => infos.title.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
            <h2>Busque informações</h2>
            <input
                className="text-black"
                type="text"
                id="search"
                value={search}
                onChange={handleSearch}
            />
            <section className="flex flex-wrap justify-between gap-4">
                {
                    isLoading ? <p>Carregando...</p> :

                        text.length > 0 ?

                            text
                                .map(infos => (
                                    <TextCard key={infos.id} {...infos} />
                                ))
                            :
                            <p> Informação não encontrada</p>
                }
            </section>
        </>
    )
}

