import React,{useContext, useState,useEffect} from "react";
import { Card, Col, Row, Modal, Form } from "react-bootstrap";
import { ArrowRight, Facebook, GitHub, Instagram, Link, Linkedin, Mail, MapPin, Phone, Printer, Twitter, Users } from "react-feather";
import designIcon from "../Assests/designer.svg";
import projectImg from "../Assests/project1.png";
import { useNavigate } from "react-router-dom";
import './Home.css';
import { loginData } from "../context/ContextShare";

function Home() {
  const {isLoggedIn,setIsLoggedIn}= useContext(loginData)
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const login = ()=>{
    navigate('/login')
  }
  const dashboard = ()=>{
    navigate('/dashboard')
  }
  useEffect(() => {
    if(sessionStorage.getItem("token")){
      setIsLoggedIn(true)
    }
  }, [isLoggedIn])
  
  return (
    <>
      <div
        style={{ width: "100%", height: "100vh", backgroundColor: "#90ee90" }}
        className="container-fluid rounded"
      >
        <Row className="align-items-center p-5">
          <Col sm={12} md={6}>
            <h1 style={{ fontSize: "80px" }} className="text-light">
              Projects Fair
            </h1>
            <p>One stop destination for all software development Projects</p>

            {
            isLoggedIn?<button onClick={dashboard}  className="btn btn-success">
              Manage your Projects <ArrowRight />{" "}
            </button>:
            <button onClick={login} className="btn btn-success">
            Get Started <ArrowRight />{" "}
          </button>
            }

          </Col>
          <Col sm={12} md={6}>
            <img
              style={{ marginTop: "100px" }}
              className="img-fluid w-75 "
              src={designIcon}
              alt="Project"
            />
          </Col>
        </Row>
      </div>
      <div className="wrapper mt-5 ">
        <h1>All Projects</h1>
        <div className="marquee">
          <div className="marqueeGroup1">
            <Row>
              <Col sm={12} md={6} lg={4}>
                <Card className="shadow p-3 mb-5 btn" onClick={handleShow} >
                  <Card.Img variant="top" src={projectImg} />
                  <Card.Body>
                    <Card.Title>Media Player</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
             
            </Row>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center m-5 p-5 rounded card  shadow">
        <h1>Subscribe Now!</h1>
        <p>Recieve Daily Updates & much More!</p>
        <div className="mail d-flex justify-content-center align-items-center">
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control style={{width:'700px'}} type="email" placeholder="Enter email" />
        
      </Form.Group>
      <button style={{marginLeft:'-80px',marginTop:'-15px'}} className="btn rounded-circle bg-info text-light "> <ArrowRight/> </button>
        </div>
      </div>


      <div bgColor='light' className='text-center text-lg-start text-muted'>
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

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>  Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{height:'300px'}}>
        <Row>
          <Col>
          <img style={{height:'200px'}} className="img-fluid"  src={projectImg} alt="project-image" />
          </Col>
          <Col>
          <h2>Media Player</h2>
          <p>Where user can manage their favorite videos. </p>
          <ul>
            <li>can upload any youtube videos</li>
            <li>can add and remove videos</li>
            <li>can categorise by drag and drop</li>

          </ul>
          </Col>
        </Row>
        <div className="mt-3">
          <a href="https://github.com/soniagkalliath/MediaPlayerFrontEnd"  target="_blank" className="btn me-5"> <GitHub/> </a>
          <a href="https://media-player-app.netlify.app/" target="_blank" className="btn"> <Link/> </a>
  
        </div>
        </Modal.Body>
        
      </Modal>

    </>
  );
}

export default Home;
