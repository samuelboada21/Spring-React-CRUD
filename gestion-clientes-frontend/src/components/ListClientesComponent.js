import React, { useEffect, useState } from 'react'
import ClienteService from '../services/ClienteService';
import { Link } from 'react-router-dom';

export const ListClientesComponent = () => {

    const [clientes,setClientes] = useState([]);

    useEffect(() => {
       listarClientes();
    },[])

    const listarClientes = () => {
        ClienteService.getAllClientes().then(Response => {
            setClientes(Response.data);
            console.log(Response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteCliente = (clienteId) => {
        ClienteService.deleteCliente(clienteId).then((response) => {
            listarClientes();
        }).catch(error => {
            console.log(error);
        })
    }   

  return (
    <div className='container'>
        <h2 className='text-center'>lista de clientes</h2>
        <Link to='/add-cliente' className='btn btn-primary mb-2'>Agregar Cliente</Link>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Acciones</th>
            </thead>
            <tbody> 
                {
                    clientes.map(
                        cliente =>
                        <tr key = {cliente.id}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nombre}</td>
                            <td>{cliente.apellido}</td>
                            <td>{cliente.email}</td>
                            <td>
                                <Link className='btn btn-info' to={`/edit-cliente/${cliente.id}`}>Actualizar</Link>
                                <button className='btn btn-danger' style={{marginLeft:'10px'}} onClick={()=> deleteCliente(cliente.id)}>Eliminar</button>    
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListClientesComponent;