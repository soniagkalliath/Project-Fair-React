import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { ArrowLeft, Cloud, Eye, EyeOff } from "react-feather";
import { Link,useNavigate } from "react-router-dom";
import { loginAPI, registerAPI } from "../services/allApi";
import { loginData, userContex } from "../context/ContextShare";

function Auth({ register }) {
  const {userData,setUserData} = useContext(userContex)
  const {isLoggedIn,setIsLoggedIn} = useContext(loginData)
  const naviagate = useNavigate()
  const isSignup = register ? true : false;
  const [isVisible,setIsVisible] = useState(false)
  const [values,setValues] = useState({
    uname:"",
    email:"",
    password:""
  })
  const [errorMsg,setErrorMsg] = useState("")
  // console.log(values);
  const handleLogin = async(e)=>{
    e.preventDefault()
    if( !values.email || !values.password){
      setErrorMsg("All Fields are Required!!!")
    }else{
      //define register api call to node
      const result = await loginAPI(values)
      if(result.status===200){
        alert("User successfully loggedin")
        setUserData(result.data.user)
        sessionStorage.setItem("userDetails",JSON.stringify(result.data.user))
        sessionStorage.setItem("token",result.data.token)

        setIsLoggedIn(true)
        setValues({uname:"",
        email:"",
        password:""})
        naviagate('/')
      }else{
        console.log(result);
        alert(result.response.data);
      }
    }
  }
  const handleRegister = async (e)=>{
    e.preventDefault()
    if(!values.uname || !values.email || !values.password){
      setErrorMsg("All Fields are Required!!!")
    }else{
      //define register api call to node
      const result = await registerAPI(values)
      if(result.status===200){
        setValues({uname:"",
        email:"",
        password:""})
        alert("New user registered successfully")
        naviagate('/login')
      }else{
        console.log(result);
        alert(result.response.data);
      }
    }
  }

  return (
    <div
      style={{ width: "100%", height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      {isSignup ? (
        <div className="container w-75 ">
        <Link to={'/'} style={{textDecoration:'none'}}> <h5> <ArrowLeft/> Back to Home </h5></Link>
       <div className="card shadow p-5 bg-success">
         <div className="row align-items-center">
           <div className="col-lg-6">
             <img
               src="http://www.tropiqana.com/fundsmanager/app-assets/img/gallery/login.png"
               alt="login"
               className="rounded-start w-100"
             />
           </div>
           <div className="col-lg-6">
             <div className="d-flex flex-column">
               <div className="d-flex flex-row mt-2 text-light">
                 <Cloud className="me-3" />
                 <span className="h1 fw-bold mb-0">Project Fair</span>
               </div>
               <h5
                 className="fw-normal my-4 pb-3 text-light"
                 style={{ letterSpacing: "1px" }}
               >
                 Sign up to your account
               </h5>
               <Form className="text-light">
               <Form.Group className="mb-3" controlId="formBasicname">
                   <Form.Label>Username</Form.Label>
                   <Form.Control type="text" placeholder="Username" onChange={(e)=>setValues(prev=>({...prev,uname:e.target.value}))}/>
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                   <Form.Label>Email address</Form.Label>
                   <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setValues(prev=>({...prev,email:e.target.value}))}/>
                 </Form.Group>

                 <Form.Group className="mb-3" controlId="formBasicPassword">
                   <Form.Label>Password</Form.Label>
                   <div className="d-flex align-items-center">
                       <Form.Control type={isVisible?"text": "password"} placeholder="Password" eye  onChange={(e)=>setValues(prev=>({...prev,password:e.target.value}))}/>
                       <span  style={{marginLeft:'-30px'}}> {isVisible?<EyeOff onClick={()=>setIsVisible((prev)=>!prev)}/> :  <Eye onClick={()=>setIsVisible((prev)=>!prev)}/>} </span>
                   </div>
                 </Form.Group>
                  <p className="text-danger fw-bolder">{errorMsg}</p>
                 <Button onClick={handleRegister} variant="light" type="submit" size="lg">
                   Register
                 </Button>
               </Form>
               <p className="mb-3 mt-3 text-light pb-lg-2">Already have an account? <Link to={'/login'}><span className="btn-link" style={{color: '#393f81'}}>Login here</span></Link></p>
             </div>
           </div>
         </div>
       </div>
     </div>
      ) : (
        <div className="container w-75 ">
           <Link to={'/'} style={{textDecoration:'none'}}> <h5> <ArrowLeft/> Back to Home </h5></Link>
          <div className="card shadow p-5 bg-success">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img
                  src="http://www.tropiqana.com/fundsmanager/app-assets/img/gallery/login.png"
                  alt="login"
                  className="rounded-start w-100"
                />
              </div>
              <div className="col-lg-6">
                <div className="d-flex flex-column">
                  <div className="d-flex flex-row mt-2 text-light">
                    <Cloud className="me-3" />
                    <span className="h1 fw-bold mb-0">Project Fair</span>
                  </div>
                  <h5
                    className="fw-normal my-4 pb-3 text-light"
                    style={{ letterSpacing: "1px" }}
                  >
                    Sign into your account
                  </h5>
                  <Form className="text-light">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setValues(prev=>({...prev,email:e.target.value}))}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                     <div className="d-flex align-items-center">
                          <Form.Control type={isVisible?"text": "password"} placeholder="Password" onChange={(e)=>setValues(prev=>({...prev,password:e.target.value}))}/>
                          <span style={{marginLeft:'-30px'}} > {isVisible?<EyeOff onClick={()=>setIsVisible((prev)=>!prev)}/> :  <Eye onClick={()=>setIsVisible((prev)=>!prev)}/>} </span>
                     </div>
                    </Form.Group>
                    <p className="text-danger fw-bolder">{errorMsg}</p>

                    <Button onClick={handleLogin} variant="light" type="submit" size="lg">
                      Login
                    </Button>
                  </Form>
                  <p className="mb-3 mt-3 text-light pb-lg-2">Don't have an account? <Link to={'/register'}><span className="btn-link" style={{color: '#393f81'}}>Register here</span></Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Auth;
