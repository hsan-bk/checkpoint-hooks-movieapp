import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Navigation({settext , setrate}) {
  return (
    <div>

{/* navbar links */}
       <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">MovieApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Movie</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action3">Contact</Nav.Link>
          </Nav>

{/* search by name */}
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search movie name"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>settext(e.target.value)}
            />
          </Form>

{/* search by rate */}
          <Form.Select aria-label="Default select example"  className='rate' onChange={(newRating)=>setrate(newRating.target.value)}>
      <option value="0">Search movie rate</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      
    </Form.Select >
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navigation