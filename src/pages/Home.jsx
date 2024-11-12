import  text  from "../data/text.json";
import CardContainer from "../components/CardContainer";
import TextCard from "../components/TextCard";
import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img src="imgh2.jpg" className="carrossel"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img src="imgrelogio.jpg" className="carrossel"/>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img src="imgproducao.jpg"className="carrossel"/>
                </Carousel.Item>
            </Carousel>

            <CardContainer titulo="Populares">
                {
                    text
                        .map(infos => (
                            <TextCard key={infos.id} {...infos} />
                        ))
                }
            </CardContainer>

        </>
    )
}
