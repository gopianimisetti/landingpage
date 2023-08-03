import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Veer from "./care-hospital-logo.jpg"

function Navbarr() {
  return (
    <Navbar style={{backgroundColor:"skyblue"}}  >
      <Container >
   < Navbar.Brand href="#gopi" >   <img src={Veer} height={60} width={80}></img>Care Hospitals</Navbar.Brand > 
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#c1">Doctors</Nav.Link>
            <Nav.Link href="#c2">Center of Excellence</Nav.Link>
            <NavDropdown title="services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#c2">Services</NavDropdown.Item>
              <NavDropdown.Item href="#c4">
                Contact
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                International doctors
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#c3" >
              Branches
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Doctor"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success">Book Appointment</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;