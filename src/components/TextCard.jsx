import Card from 'react-bootstrap/Card';

export default function TextCard({descricao, imagem}) {
    return (
        <Card className='flex'>
            <Card.Img src={imagem} className="cardImage"/>
            <Card.Text>{descricao}</Card.Text>
        </Card>
    )

}