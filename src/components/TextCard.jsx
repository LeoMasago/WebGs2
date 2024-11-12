import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

export default function TextCard({ id, descricao, imagem}) {
    return (
        <Card>
            <Card.Img src={{imagem}} />
            <Card.Text>{descricao}</Card.Text>
            <Link to={`/informacoes/${id}`}>Saber mais</Link>
        </Card>
    )

}