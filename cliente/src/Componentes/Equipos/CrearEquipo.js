import React, { useState } from 'react'
import uniqid from 'uniqid'
import axios from 'axios'

function CrearEquipo(){
    //Hooks
    const[nombre, setNombre] = useState('');
    const[imagen, setImagen] = useState('');

    function crearEquipo(){
        var equipo = {
            nombre: nombre,
            imagen: imagen,
            idEquipo: uniqid()
        }
        console.log(equipo);
        
        axios.post('/api/equipo/agregarEquipo', equipo)
        .then(res => {
            alert(res.data)
        })
        .then(err => {
            
            console.log(err)
        })
    }


    return(
        <div className='container'>
            <div className='row'>
                <h2 className='mt-4'>Crear Equipo</h2>
            </div>

            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <div className='mb-3'>
                        <label htmlFor='nombre' className='form-label'>Nombre: </label>
                        <input type='text' className='form-control' value={nombre} onChange={(e) => {setNombre(e.target.value)}} placeholder='Nombre del equipo'></input>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='imagen' className='form-label'>Imagen: </label>
                        <input type='text' className='form-control' value={imagen} onChange={(e) => {setImagen(e.target.value)}} placeholder='Link de la imagen'></input>
                    </div>

                    <button onClick={crearEquipo} className='btn btn-success'>Crear</button>
                </div>
            </div>
        </div>
    )
};

export default CrearEquipo;