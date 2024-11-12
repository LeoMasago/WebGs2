import { useState } from "react"
import Button from 'react-bootstrap/Button'

export default function Contato() {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [mensagem, setMensagem] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Seu nome é ${nome}, seu e-mail é ${email} a mensagem é ${mensagem}`)

        setNome('')
        setEmail('')
        setMensagem('')
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome:</label>
                <input
                    type="text"
                    id="nome"
                    className="textLabel"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    className="textLabel"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="mensagem">Mensagem:</label>
                <textarea
                    id="mensagem"
                    cols="30"
                    rows="10"
                    className="textLabel"
                    value={mensagem}
                    onChange={e => setMensagem(e.target.value)}
                >
                </textarea>
                <button type="submit" className="btnEnviar">Enviar</button>
                <Button variant="primary">Primary</Button>
            </form>
        </div>
    )
}