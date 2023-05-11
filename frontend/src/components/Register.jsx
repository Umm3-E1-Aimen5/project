import React, {useState} from "react";
import { useNavigate, Link } from 'react-router-dom'

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);
  const [errorMsg, setErrorMsg] = useState(false);
  const navigage = useNavigate();


  const saveData = async(e) =>{
    // if(!name || !email || !password){
    //   setErrorMsg(true)
    //   return false
    // }
    e.preventDefault();
    let abcd = await fetch("http://localhost:8000/user",{
      method: 'POST',
      body: JSON.stringify({name, email, password}),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    abcd = await abcd.json();
    setData(abcd);
    navigage('/login')
  }


  return (
    <div>
         <div className="container shadow my-5">
                <div className="row justify-content-end">
                    <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form order-2">
                        <h1 className="display-4 fw-bolder">Hello, Friend</h1>
                        <p className="lead text-center">Enter Your Details to Register</p>
                        <h5 className="mb-4">  OR</h5>
                        <Link  to="/login" className="btn btn-outline-light rounded-pill pb-2 w-50">Login</Link>

                        {/* <button className="btn btn-outline-light rounded-pill pb-2 w-50" to="/register">Register</button>  */}

                    </div>
                    <div className="col-md-6 p-5">
                        <h1 className="display-6 fw-bolder mb-5">REGISTER</h1>
                        <form>
                            <div className="mb-3">
                                <label for="name" class="form-label">Username</label>
                                <input type="text"
            required
            className="form-control"
            id="userName"
            onChange={(e)=>setName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email"
                                required
            className="form-control"            
            id="exampleInputEmail1" 
            onChange={(e)=>setEmail(e.target.value)}  />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input  required
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e)=>setPassword(e.target.value)} />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">I Agree Terms and Conditions</label>
                            </div>
                            <button onClick={saveData} type="submit" className="btn btn-outline-primary w-100 mt-4 rounded-pill">Register</button>
                        </form>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Register