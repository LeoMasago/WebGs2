import { useParams } from 'react-router-dom';

export default function Infos() {

    const { id } = useParams()

    return (
        <>
            <h1>{id}</h1>
            <p>{}</p>
        </>
    )
}