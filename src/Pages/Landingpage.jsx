import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landingpage() {
  const navigateByUrl= useNavigate()
  return (
    <>
<Row className="mt-5 align-items-center justify-content-between w-100">
<Col></Col>
<Col lg={5}>
<h1 style={{fontSize:"40px"}}>welcome to <span className='text-warning'>Media-player</span></h1>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quasi eligendi reiciendis vel repudiandae nobis provident nisi. Cumque nulla possimus iste, ab vero fuga quia nesciunt delectus quisquam veritatis pariatur!
  Iure assumenda provident ipsam, ducimus cupiditate reprehenderit debitis qui cumque nisi a vitae consectetur modi optio? Ipsam quaerat iusto, eveniet facere officiis vitae mollitia consequatur cum repellendus repudiandae praesentium amet.
  Ea distinctio obcaecati, odit neque facilis facere doloribus aut voluptate saepe provident voluptatibus eligendi nihil quia in perferendis culpa quo laudantium nemo corporis. Officiis, optio quis velit praesentium quaerat voluptates.
  Autem, omnis iusto facilis perspiciatis quibusdam reiciendis sint impedit. Consectetur, illo placeat? Autem quia dolores, nulla recusandae excepturi aliquam! Laboriosam, dolorem sequi. Veniam, magni aliquid ducimus non dicta quo sint.
<br />
<button onClick={()=>navigateByUrl("/home")} className='btn btn-info mt-4'>Get Started</button>
</p>
</Col>
<Col lg={5}>
<img style={{boxShadow:" 20px 30px 40px grey"}} src="https://media.tenor.com/B9NxxCvY48YAAAAC/record-player.gif" alt="" />
</Col>
<Col></Col>
</Row>
<div className='container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column'>
  <h3>Features</h3>
  <div className='cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>
    <Card style={{width:'22rem'}} className='p-4 bg-info'>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://c.tenor.com/YoFLcGT38dYAAAAC/dj-mix.gif"/>
      <Card.Body  style={{boxShadow:"20px 30px 40px black"}}>
        <Card.Title className='text-dark'>Manging Video</Card.Title>
        <Card.Text style={{color:"black"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam odit, esse voluptatem provident maiores vitae ipsa consequuntur, veritatis quos sint culpa magnam vero dolorem perspiciatis rem pariatur incidunt excepturi.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{width:'22rem'}} className='p-4 bg-info'>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://th.bing.com/th/id/OIP.M6Rvcn2-eQ1DZhah9W_OnAHaHa?rs=1&pid=ImgDetMain"/>
      <Card.Body style={{boxShadow:"20px 30px 40px black"}}>
        <Card.Title className='text-dark'>Categorized Video</Card.Title>
        <Card.Text style={{color:"black"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam odit, esse voluptatem provident maiores vitae ipsa consequuntur, veritatis quos sint culpa magnam vero dolorem perspiciatis rem pariatur incidunt excepturi.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{width:'22rem'}} className='p-4 bg-info'>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://downloadwap.com/thumbs3/screensavers/d/new/logo-brands/windows_media_player-73679.gif"/>
      <Card.Body  style={{boxShadow:"20px 30px 40px black"}}>
        <Card.Title className='text-dark'>Watch History</Card.Title>
        <Card.Text style={{color:"black"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam odit, esse voluptatem provident maiores vitae ipsa consequuntur, veritatis quos sint culpa magnam vero dolorem perspiciatis rem pariatur incidunt excepturi.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
</div>
<div className='container border rounded p-5 border-ligth mb-5 d-flex align-items-center justify-content-between w-100'>
  <div className='col-lg-5'>
    <h4 className='text-dark'>Simple,Powerful & Fast</h4>
    <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maxime similique obcaecati omnis saepe consectetur sed dolorum accusamus deleniti impedit labore aliquid dolores, libero quam beatae aliquam, placeat voluptas. Similique?
    </h6>
    <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Categorize Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maxime similique obcaecati omnis saepe consectetur sed dolorum accusamus deleniti impedit labore aliquid dolores, libero quam beatae aliquam, placeat voluptas. Similique?
    </h6>
    <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Managing Video</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maxime similique obcaecati omnis saepe consectetur sed dolorum accusamus deleniti impedit labore aliquid dolores, libero quam beatae aliquam, placeat voluptas. Similique?
    </h6>
  </div>
  <div className='video col-lg-5'>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/H58vbez_m4E?si=ex6zxRweCshGQu5g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  </div>




</div>





    
    </>
  )
}

export default Landingpage
