import React,{useEffect, useState} from 'react'
import { Modal,Button } from 'react-bootstrap';
import { Camera, Plus } from 'react-feather';

function Addproject() {
    const [show, setShow] = useState(false);
    const [project,setProject] = useState({
      title:"",overview:"",github:"",website:"",image:"",technologies:[]
    })
    const [preview,setPreview] = useState("")

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    if(project.image){
      setPreview(URL.createObjectURL(project.image))
    }
  },[project.image])
  return (
    <>
        <button className='btn btn-primary ' onClick={handleShow}>Add Project</button>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
                <div className='text-center position-relative'>
                  <img width={'200px'} height={'200px'} className='rounded-circle object-fit-fill border '  src={preview?preview:"https://www.freeiconspng.com/uploads/female-user-icon-clip-art--30.png"} alt="project" />
                  <label><Camera style={{marginLeft:'-40px'}} className='position-absolute top-0' size={40}/>
                  <input type="file" style={{display:'none'}} onChange={e=>setProject({...project,image:e.target.files[0]})}/>
                  </label>
                </div>
                <input type="text"  placeholder='Github' className='form-control mt-2' onChange={e=>setProject({...project,github:e.target.value})} />
                <input type="text" placeholder='Website Link' className='form-control mt-2' onChange={e=>setProject({...project,website:e.target.value})} />
            </div>
            <div className="col-lg-6">
            <input type="text"  placeholder='Title' className='form-control mt-5' onChange={e=>setProject({...project,title:e.target.value})}/>
            <input type="text"  placeholder='Overview' className='form-control mt-3' onChange={e=>setProject({...project,overview:e.target.value})}/>
            <input type="text"  placeholder='Technologies Used ' className='form-control mt-4' />
            <input type="text"  placeholder='Description ' className='form-control mt-3' />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success">Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Addproject