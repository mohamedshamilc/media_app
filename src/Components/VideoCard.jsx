import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { addHistoryAPI, deleteAVideoAPI } from '../../service/allAPI';

function VideoCard({video,setDeleteVideoResponse,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() =>{ //call video for post in watch history
    setShow(true)
    const{caption,link}=video

    let today = new Date()//it is used for show date and time watch history
  //   console.log(new Intl.DateTimeFormat('en-US',{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})
  // .format(today));
    
let timeStamp =new Intl.DateTimeFormat('en-US',{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})
.format(today);//this is used for the date and time formate

let videoHistory = {caption,link,timeStamp}
await addHistoryAPI(videoHistory)// last add the time and date formate to api addHistoryAPI(post)in json server


  }
  const deleteVideo = async(id)=>{
    await deleteAVideoAPI(id)
    setDeleteVideoResponse(true)
  }

  const dragStarted=(e,id)=>{
    console.log("Drag Started...VideoId:"+id);
    e.dataTransfer.setData("VideoId",id)
  }

      
  return (
    <>
     <Card style={{ width: '17rem' }} draggable onDragStart={e=>dragStarted(e,video?.id)}>
      <Card.Img variant="top" src={video.url} onClick={handleShow} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
        <h5>{video.caption}</h5>
      {insideCategory?null:<button onClick={()=>deleteVideo(video.id)} className='btn'><i class="fa-solid fa-trash fa-fade"></i></button>}
        </Card.Title>
      </Card.Body>
    </Card>
   

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video Title</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="315" src={`${video.link}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe></Modal.Body>
      </Modal>
    
    </>
  )
}

export default VideoCard
