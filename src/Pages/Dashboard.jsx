import React, { useContext, useEffect, useState } from 'react'
import { Navbar,Container,Row,Col } from 'react-bootstrap'
import { Edit, GitHub, LogOut, Trash2,Facebook,Twitter,Mail,Instagram,Linkedin,MapPin,Printer,Phone,Users, Check } from 'react-feather'
import Addproject from '../components/Addproject'
import { Link, useNavigate } from 'react-router-dom'
import { userContex,loginData } from '../context/ContextShare'

function Dashboard() {
  const navigate = useNavigate()
  const {userData,setUserData} = useContext(userContex)
  const {isLoggedIn,setIsLoggedIn}= useContext(loginData)
  const [userInput,setUserInput] = useState({
    uname:"",email:"",password:"",github:"",linkedin:"",title:"",profile:""
  })
  const [profile,setProfile]= useState("")
  
  const handleLogout = ()=>{
    sessionStorage.removeItem("userDetails")
    sessionStorage.removeItem("token")
    setIsLoggedIn(false)
    navigate('/')
  }
  console.log(userInput);
  console.log(profile);
  useEffect(()=>{
    if(!sessionStorage.getItem("token")){
      alert("Please Login...")
      navigate('/')
    }
  })
  const handleUpdate = ()=>{
    
  }
  useEffect(()=>{
    let user = JSON.parse(sessionStorage.getItem("userDetails"))
    setUserData(user)
    setUserInput(user);
    if(userInput.profile){
      setProfile(URL.createObjectURL(userInput.profile))
    }
  },[userInput.profile])
  return (
    <>
    <Navbar className="bg-success">
        <Container>
          <Navbar.Brand><Link to={'/'} style={{textDecoration:'none'}}><h3 className='text-light'>Project Fair</h3></Link></Navbar.Brand>
          <button onClick={handleLogout} className='btn ms-auto text-light'> <LogOut/> Logout</button>
        </Container>
    </Navbar>

    <Row className=''>
      <Col sm={12} md={8} >
        <h1 className=' mt-5'> Welcome <span className='text-warning'>{userData?.uname}</span> </h1>
      <div className='projects  card shadow mb-5 p-5 container mt-5'>
    
    <div className='d-flex'>
      <h1>My Projects</h1>
      <div className='ms-auto'> <Addproject/> </div>
    </div>
    <div className='mt-4'>
      <p>No projects found!!!</p>
      <div className="border d-flex align-items-center rounded p-2">
        <h4>Project Name</h4>
        <div className="icons ms-auto">
          <Edit className='me-2'/>
          <Trash2 className='me-2'/>
          <GitHub/>
  
        </div>
      </div>
    </div>
  </div>
      </Col>
      <Col sm={12} md={4} >
      <div className="profile  card shadow mb-5 p-5 container mt-5">
        <div className='d-flex justify-content-between align-items-center'>
          <h2>My Profile</h2>
          <button onClick={handleUpdate} className='btn btn-outline-primary'> <Check size={30}/> </button>
          </div>
        <div className="row justify-content-center mt-3">

        <label className='text-center'>
          <input type="file"  style={{display: "none"}} onChange={(e)=>setUserInput({...userInput,profile:e.target.files[0]})}/>
          <img className='w-50 rounded-circle ' src={profile?profile:"https://www.freeiconspng.com/uploads/female-user-icon-clip-art--30.png"} alt="profile"  />
        </label>

        <div className="mb-3">
            <input type="text" id='uname' placeholder='Username' className='form-control' value={userInput.uname} onChange={(e)=>setUserInput({...userInput,uname:e.target.value})} />
        </div>
        <div className="mb-3">
            <input type="text" id='github' placeholder='Github' className='form-control' value={userInput.github} onChange={(e)=>setUserInput({...userInput,github:e.target.value})}/>
        </div>
          <div className="mb-3">
            <input type="text" id='title' placeholder='Title' className='form-control' value={userInput.title} onChange={(e)=>setUserInput({...userInput,title:e.target.value})}/>
          </div>
          <div className="mb-3">
            <input type="text" id='linkedin' placeholder='LinkedIn' className='form-control' value={userInput.linkedin} onChange={(e)=>setUserInput({...userInput,linkedin:e.target.value})}/>
          </div>
        </div>
      </div>
      </Col>
      
      
  
    </Row>
<div bgColor='light' className='text-center text-lg-start text-muted mt-5'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <Facebook/>
          </a>
          <a href='' className='me-4 text-reset'>
            <Twitter/>
          </a>
          <a href='' className='me-4 text-reset'>
            <Mail/>
          </a>
          <a href='' className='me-4 text-reset'>
            <Instagram/>
          </a>
          <a href='' className='me-4 text-reset'>
            <Linkedin/>
          </a>
          <a href='' className='me-4 text-reset'>
            <GitHub/>
          </a>
        </div>
      </section>
      <section className=''>
        <div className='text-center text-md-start mt-5'>
          <Row className='mt-3'>
            <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <Users className="me-3"/>
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </Col>

            <Col md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </Col>

            <Col md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </Col>

            <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MapPin className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <Mail className="me-3"/>
                info@example.com
              </p>
              <p>
                <Phone className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <Printer className="me-3" /> + 01 234 567 89
              </p>
            </Col>
          </Row>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          projectfair.com
        </a>
      </div>
      </div>
    </>
  )
}

export default Dashboard