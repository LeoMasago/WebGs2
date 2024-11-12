import { NavLink } from "react-router-dom";

export default function Header() {

    return (
        <>
            <header>
                <div>
                    <h1 className="font-bold">Nome do Site</h1>
                </div>
                <nav>
                    <ul className="flex gap-4">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/informacoes">Informações</NavLink></li>
                        <li><NavLink to="/sobre">Sobre</NavLink></li>
                        <li><NavLink to="/contato">Contato</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}