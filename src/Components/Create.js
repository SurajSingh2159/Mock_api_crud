import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Create = () => {
      const[name, setName]=useState("")
      const[email, setEmail]= useState("")
      const navigate = useNavigate();

      const handleSubmit = (e)=>{
            e.preventDefault()
          axios.post("https://6426f3e2d24d7e0de47c5d1e.mockapi.io/crud-react",{
            name: name,
            email: email,
            header: {"Access-Control-Allow-Origin": "*"}
          }) 
          .then(()=>{
            navigate("/read") 
          })
      }
    
  return (
    <>
    <div className='d-flex justify-content-between my-3'>
    <h1>Create</h1>
    <Link to="/read">
    <button className="btn btn-sm btn-primary">Show data</button>
    </Link>
    </div>
      <form>
<div className="mb-3">
<label htmlFor="name" className="form-label">Name</label>
<input type="text" className="form-control" id="name" onChange={(e)=>{setName(e.target.value)}} />
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={(e)=>{setEmail(e.target.value)}} />
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
    </>
  )
}

export default Create
