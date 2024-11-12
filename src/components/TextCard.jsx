import { Link } from "react-router-dom";

export default function TextCard({ id, descricao, imagem}) {
    return (
        <div>
            {/* <h2>{title}</h2> */}
            <img src={{imagem}} />
            <p>{descricao}</p>
            <Link to={`/informacoes/${id}`}>Saber mais</Link>
        </div>
    )

}