import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BuscarEquipo from './BuscarEquipo'


function ListaEquipos(){

    const[dataEquipos, setDataEquipos] = useState([]);

    useEffect(() => {
        axios.get('api/equipo/obtenerEquipos')
        .then(res =>{
            console.log(res)
        }).catch(err => {
            console.log("ajdlsakdjsakjsalkdsaj")
            console.log(err)
        })
    }, [])

    return(
        <div>
            <h2>Lista de equipos</h2>
            <BuscarEquipo />
        </div>
    )
}

export default ListaEquipos