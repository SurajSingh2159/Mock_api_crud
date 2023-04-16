import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Read = () => {

      const[data, setData] = useState([])
      const getData = ()=>{
            axios.get('https://6426f3e2d24d7e0de47c5d1e.mockapi.io/crud-react').then((response)=>{
                  setData(response.data)
            })
      } 

      useEffect(()=>{
            getData()
      },[])

      const handleDelete= (id)=>{
            axios.delete(`https://6426f3e2d24d7e0de47c5d1e.mockapi.io/crud-react/${id}`).then(()=>{
            getData()
            })
      }

      const setLocalStorage = (id,name,email)=>{
            localStorage.setItem('id', id)
            localStorage.setItem('name', name)
            localStorage.setItem('email',email)
      }

  return (
    <>
    <div className='d-flex justify-content-between my-3'>
    <h2> Read Operation</h2>
    <Link to="/">
    <button className="btn btn-sm btn-primary">Create</button>
    </Link>
    </div>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  {data.map((value)=>{
    return <tbody key={value.key}>
    <tr>
      <th scope="row">{value.id}</th>
      <td>{value.name}</td>
      <td>{value.email}</td>
      <td>
      <Link to="/update"><button className="btn btn-sm btn-success"
      onClick={()=>{setLocalStorage(value.id,value.name,value.email)} }
      >Edit</button></Link></td>
      <td><button className="btn btn-sm btn-danger" onClick={()=>{handleDelete(value.id)}}>Delete</button></td>
    </tr>
  </tbody>
  })
      
  }
</table>
      
    </>
  )
}

export default Read
