
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import React, { useState } from 'react'
import{uploadVideoAPI} from '../../service/allAPI'

function Add({setUploadVideoResponse}) {
  const[uploadVideo,setUploadVideo]=useState({
    id:"",caption:"",url:"",link:""
  })
  console.log(uploadVideo);
const getYoutubeLink=(e)=>{
  const {value}=e.target
  if(value.includes("v=")){
    let vID = value.split("v=")[1].slice(0,11)
    console.log(`https://www.youtube.com/embed/${vID}`);
setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${vID}`})
  }else{
    setUploadVideo({...uploadVideo,link:""})
  }
}


 
const handleAdd=async()=>{
  const {id,caption,url,link}=uploadVideo

  if(!id || !caption || !url || !link){
    alert("Please fill missing fields")
  }
  else{
    //store video detail to json server
    const result = await uploadVideoAPI(uploadVideo)
    console.log(result);
    
    if(result.status>=200 && result.status<=300){
      //success
      handleClose();
      //alert
      alert("Uploaded successfully")
      //after getting success response field should be empty
      setUploadVideo({
        id:"",caption:"",url:"",link:""
      })
      setUploadVideoResponse(result.data)
    }else{
      console.log(result.message);
      
    }
  }
}

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
<div className="d-flex align-items-center">
  <h5>Upload Videos</h5>
  <Button className='btn ' onClick={handleShow}><i className="fa-solid fa-upload fa-bounce mb-2"></i></Button>
  {/* modal from reactbootstrap */}
  <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="Video Id"
        className="mb-3">
        <Form.Control type="text" placeholder="Video Id" onChange={(e)=>setUploadVideo({...uploadVideo,id:e.target.value})}    />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Video Title">
        <Form.Control type="text" placeholder="Video Title" onChange={(e)=>setUploadVideo({...uploadVideo,caption:e.target.value})}     />
      </FloatingLabel>
      <br />
      <FloatingLabel
        controlId="floatingInput"
        label="Image Url"
        className="mb-3">
        <Form.Control type="text" placeholder="Image Url" onChange={(e)=>setUploadVideo({...uploadVideo,url:e.target.value})}  />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Video link"     >
        <Form.Control type="text" placeholder="Video link"onChange={getYoutubeLink} />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
   
</div>

      
    </>
  )
}

export default Add
