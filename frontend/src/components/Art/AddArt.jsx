import React, {useState} from "react";
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

const AddArt = () => {
    const navigate = useNavigate();


    const [input, setInput] = useState({})
    
  const [title, setName] = useState('');
  const [description, setEmail] = useState('');
  const [artType, setPassword] = useState('');
  const [image, setImage] = useState('');

//   console.log(image);

//   const [data, setData] = useState([]);
//   const [errorMsg, setErrorMsg] = useState(false);


const handler = (e) => {
    const name = e.target.name
        const value = e.target.value
        setInput({...input, [name]: value})
};

const Submit = async(e)=>{
    e.preventDefault()
    const formData = new FormData()
    formData.append("title",input.title)
    formData.append("description",input.description)
    formData.append("artType",input.artType)
    formData.append("art_file",image) 

    const response =  await Axios.post('http://localhost:8000/art/new', formData,{
        headers : {"Content-Type" : "multipart/form-data"}
    })
    navigate('/allart')
}

//   const saveData = async(e) =>{
//     if(!title || !description || !artType){
//       setErrorMsg(true)
//       return false
//     }
//     e.preventDefault();
//     let abcd = await fetch("http://localhost:8000/art",{
//       method: 'POST',
//       body: JSON.stringify({title, description, artType}),
//       headers:{
//         'Content-Type': 'application/json'
//       }
//     })
//     abcd = await abcd.json();
//     setData(abcd);
//     navigate('/allart')
//   }





  const back = ()=>{
    navigate("/admin-Dashboard")
}

  return (
    <div className="container ">
        <div className='w-25 px-3'>

<button onClick={back} className='  btn btn-outline-primary ms-auto px-4 rounded-pill'>DashBoard</button>
</div>
<h1 className='display-0 fw-bold my-4 text-primary text-center'>Add Art</h1>
<hr />
<div className="mx-20 my-20">


      <form className="w-50 " onSubmit={Submit} encType="multipart/form-data" method="POST">
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
          Title
          </label>
          <input
            type="text"
            required
            name="title"
            value={input.title}
            className="form-control"
            onChange={handler}
            // onChange={(e)=>setName(e.target.value)}            
          /> 
          {/* {errorMsg && !title && <span className="errorHandle">User name is required</span>}          */}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
          Description
          </label>
          <input
            name="description"
            value={input.description}
            type="text"
            className="form-control"
            onChange={handler}
            // onChange={(e)=>setEmail(e.target.value)}           
          />     
          {/* {errorMsg && !description && <span className="errorHandle">Email is mandatory to get register</span>}               */}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
          Art Type
          </label>
          <input
          required
            name="artType"
            value={input.artType}
            type="text"
            className="form-control"
            onChange={handler}
            // onChange={(e)=>setPassword(e.target.value)}
          />
          {/* {errorMsg && !artType && <span className="errorHandle">Please enter password before regiter</span>}          */}
        </div>
        <div className="mb-3">
          {/* <label htmlFor="exampleInputPassword1" className="form-label">
          Art Type
          </label> */}
          <input
          required
            name="image"
            type="file"
            className="form-control"
            onChange={(e)=>setImage(e.target.files[0])} 
          />       
        </div>
        
        <button 
        // onClick={saveData} type="submit" 
        className="btn btn-primary" type="submit">
          Add
        </button>
      </form>
      </div>

    </div>
  )
}

export default AddArt
