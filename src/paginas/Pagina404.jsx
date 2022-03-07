import react from "react";
import imagem from '../assets/img/doguito404.svg'
import '../assets/css/404.css'

const Pagina404 = () => {
    return (
        <main className="container flex flex--centro flex--coluna container--width">
            <img clasName="doguito-imagem" src={imagem} alt="" />
            <p className="naoencontrado-texto">
                Ops, essa página não existe!
            </p>
        </main>
    )
}

export default Pagina404;