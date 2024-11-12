import  text  from "../data/text.json";
import CardContainer from "../components/CardContainer";
import TextCard from "../components/TextCard";

export default function Home() {
    return (
        <>
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
