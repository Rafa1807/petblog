import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { busca } from "../../../api/api";
// import SubCategoria from "../../../paginas/SubCategoria";
import '../../css/blog.css'

const ListaCategorias = () => {

    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        busca(`/categorias`, setCategorias)
    }, [])

    return (
        <ul className="lista-categorias container flex">
            {
                categorias.map((categoria) => (
                    <Link to={`/categoria/${categoria.id}`}>
                        <li className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`}>
                            {categoria.nome}
                        </li>
                    </Link>
                ))
            }
        </ul>
    )
}

export default ListaCategorias;