import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from 'react-router-dom'

const UpdateArt = () => {

    const [title, setName] = useState('');
  const [description, setEmail] = useState('');
  const [artType, setPassword] = useState('');
  
//   const [data, setData] = useState([]);
  const navigate = useNavigate();

  const params = useParams();


    const getUserDetail = async() =>{
        let res = await fetch(`http://localhost:8000/art/${params.id}`)
        res = await res.json();
        setName(res.title)
        setEmail(res.description)
        setPassword(res.artType)
    }


  const updateData = async(e) =>{
    e.preventDefault();
   let res = await fetch(`http://localhost:8000/art/${params.id}`,{
    method: "put",
    body: JSON.stringify({title, description, artType}),
    headers:{
        "Content-Type": "Application/json"
    }
   })
   res = await res.json();
   console.log(res);
   navigate('/allart');
  }

  useEffect(() => {
    getUserDetail();
  }, [])



  return (
    <div className="container">    
      <form className="w-50">
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            Title
          </label>
          <input
          value={title}
            type="text"
            className="form-control"
            id="userName"
            onChange={(e)=>setName(e.target.value)}            
          />          
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
          Description
          </label>
          <input
          value={description}
            type="email"
            className="form-control"            
            id="exampleInputEmail1" 
            onChange={(e)=>setEmail(e.target.value)}           
          />          
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
          Art Type
          </label>
          <input
            value={artType}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        
        <button onClick={updateData} type="submit" className="btn btn-primary">
          Update Art
        </button>
      </form>
    </div>
  )
}

export default UpdateArt
