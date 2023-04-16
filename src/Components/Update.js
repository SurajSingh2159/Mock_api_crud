import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Update = () => {
      const[id, setId] = useState("")
      const[name, setName]=useState("")
      const[email, setEmail]= useState("")

      const navigate = useNavigate()

      useEffect(()=>{
            setId(localStorage.getItem('id'))
            setName(localStorage.getItem('name'))
            setEmail(localStorage.getItem('email'))
      },[])

      const handleUpdate=(e)=>{
            e.preventDefault()
            axios.put(`https://6426f3e2d24d7e0de47c5d1e.mockapi.io/crud-react/${id}`,{
                  name: name,
                  email:email
            }).then(()=>{
                  navigate("/read")
            })
      } 

      
  return (
    <>
      <h1>Update</h1>
      <form>
<div className="mb-3">
<label htmlFor="name" className="form-label">Name</label>
<input type="text" className="form-control" id="name"
value={name}
 onChange={(e)=>{setName(e.target.value)}}
  />
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" 
    value={email}
    onChange={(e)=>{setEmail(e.target.value)}}
     />
  </div>
  <button type="submit" className="btn btn-primary mx-2" 
  onClick={handleUpdate}
  >Submit</button>
  <Link to="/read">
  <button  className="btn btn-primary mx-2"
  >Back</button>
  </Link>
</form>
    </>
  )
}

export default Update
