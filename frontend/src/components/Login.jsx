import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate()
  const empty = {
    email: "",
    password: ""
  }

  // state for handle the login inputs

  const [handle, setHandle] = useState(empty)

  const loginHandler = (e) => {
    const { name, value } = e.target;
    setHandle({ ...handle, [name]: value })
    console.log(handle)
  }


  //function for login
  const loginApi = async () => {
    if (handle.email == "" || handle.password == "") {
      alert("Please Enter the Fields First")
    } else {
      let record = await fetch("http://localhost:8000/user/login", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(handle)
      })
      record = await record.json()
      if (record.message == "Login Successfully") {
        // store id in SessionStorage
        sessionStorage.setItem("userId", record.LoginUser._id)
        sessionStorage.setItem("userEmail", record.LoginUser.email)
        // sessionStorage.setItem("userPassword",record.LoginUser.email)
        let adminemail = sessionStorage.getItem("userEmail")
        // let adminPassword = sessionStorage.getItem("userPassword")
        if (adminemail == "admin@gmail.com") {

          alert("Admin Login Successfully")
          navigate("/admin-Dashboard")
        } else {
          alert("Login Successfully")
          navigate("/show-arts")
        }


      } else {
        alert("Username and Password is invalid")
      }
    }
  }




  return (
    <div>
      <div className="container shadow my-5">
        <div className="row justify-content-end">
          <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form order-2">
            <h1 className="display-4 fw-bolder">Welcome Back</h1>
            <p className="lead text-center">Enter Your Credential To Register</p>
            <h5 className="mb-4">  OR</h5>
            <Link to="/register" className="btn btn-outline-light rounded-pill pb-2 w-50">Register</Link>

            {/* <button className="btn btn-outline-light rounded-pill pb-2 w-50" to="/register">Register</button>  */}

          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder mb-5">LOGIN</h1>
            <form className=""
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >
              <div className="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input name='email' onChange={loginHandler} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input name='password' onChange={loginHandler} type="password" className="form-control" id="exampleInputPassword1" />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Remember me</label>
              </div>
              <button onClick={loginApi} className="btn btn-primary w-100 mt-4 rounded-pill">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;