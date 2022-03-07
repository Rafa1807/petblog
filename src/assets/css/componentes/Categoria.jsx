import React, { useEffect, useState } from 'react'
import { Link, Switch, useRouteMatch } from 'react-router-dom'
import { Route, useParams } from 'react-router-dom'
import { busca } from '../../../api/api'
import '../../css/blog.css'
import ListaCategorias from './ListaCategorias'
import ListaPost from './ListaPost'
import SubCategoria from '../../../paginas/SubCategoria'

const Categoria = () => {
    const { id } = useParams()
    const { url, path } = useRouteMatch()
    const [subcategorias, setSubcategorias] = useState([])

    useEffect(() => {
        busca(`/categorias/${id}`, (categoria) => {
            setSubcategorias(categoria.subcategorias)
        })
    }, [id])
    return (
        <>
            <div className="container">
                <h2 className="titulo-pagina">Pet Notícias</h2>
            </div>
            <ListaCategorias />
            <ul className="lista-categorias container flex">
                {
                    subcategorias.map((subcategoria) => (

                        <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`} key={subcategoria}>

                            <Link to={`${url}/${subcategoria}`}>
                                {subcategoria}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <Switch>
                <Route exact path={`${path}/`}>
                    <ListaPost url={`/posts?categoria=${id}`} />
                </Route>
                <Route path={`${path}/:subcategoria`}>
                    <SubCategoria />
                </Route>
            </Switch>
        </>
    )
}

export default Categoria