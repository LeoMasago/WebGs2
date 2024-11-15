import { useState } from "react"

export default function Contato() {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [mensagem, setMensagem] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Seu nome é ${nome}, seu e-mail é ${email} a mensagem é ${mensagem}`)
        let nome1 = document.getElementById("nome").value
        localStorage.setItem("UserName", nome1)
        let email1 = document.getElementById("email").value
        localStorage.setItem("email", email1)
        let mensagem1 = document.getElementById("mensagem").value
        localStorage.setItem("mensagem", mensagem1)
        setNome('')
        setEmail('')
        setMensagem('')
    }

    return (
        <div className="container formContainer">
            <form onSubmit={handleSubmit} className="contactForm">
                <input
                    type="text"
                    placeholder="Nome"
                    id="nome"
                    className="textLabel"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    className="textLabel"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <textarea
                    id="mensagem"
                    placeholder="Mensagem"
                    cols="30"
                    rows="10"
                    className="textLabel"
                    value={mensagem}
                    onChange={e => setMensagem(e.target.value)}
                >
                </textarea>
                <button type="submit" className="btnEnviar">Enviar</button>
            </form>
        </div>
    )
}