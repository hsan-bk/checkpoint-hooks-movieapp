import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import addclick from '../clickhere.gif'

function AddMovie({movies , setmovies}) {
  // state declaration variable
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
// state declaration newmovie
    const [newmovie, setnewmovie] = useState({
        name:"",
        posterurl:"",
        description:"",
        rating:"",
    })
// state declaration function
    const add=()=>{
        setmovies([...movies, newmovie])
    }


  return (
    <div>
        <>

{/* button pour afficher modal */}
      <img src={addclick} alt='add' variant="primary" onClick={handleShow} style={{width:'50px'}}/>
    
{/* modal add movie */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
{/* modal body */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Name</Form.Label>
        <Form.Control type="text" placeholder="Enter movie name" onChange={(e)=>setnewmovie({...newmovie, name:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Url image</Form.Label>
        <Form.Control type="text" placeholder="Enter movie url image" onChange={(e)=>setnewmovie({...newmovie, posterurl:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie description</Form.Label>
        <Form.Control type="text" placeholder="Enter movie description" onChange={(e)=>setnewmovie({...newmovie, description:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie rating</Form.Label>
        <Form.Control type="text" placeholder="Enter movie rating" onChange={(e)=>setnewmovie({...newmovie, rating:e.target.value})} />
      </Form.Group>

    </Form>
{/* footer */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{add(); handleClose()}}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default AddMovie