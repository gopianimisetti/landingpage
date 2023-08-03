import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Esh from "./a1.jpg"
import Esh1 from "./a2.jpg"
import Esh2 from "./a3.jpg"
import Esh3 from "./a4.jpg"
import Esh4 from "./a5.jpg"
import Esh5 from "./a6.jpg"
// import Esh6 from "./a7.jpg"
// import Esh7 from "./a8.jpg"
// import Esh8 from "./a7.jpg"


function Imagess() {
  return (
    <Container style={{backgroundColor:"honeydew"}}>
  
      <Row style={{marginLeft:'110px'}}>
      
        
        <div id='c2'><h1 style={{marginLeft:"350px",marginBottom:'60px'}}>Center Of Excellence</h1><br></br></div>
      
 
        <Col xs={6} md={4}>
          <Image  style={{width:"200px",height:"200px"}}src={Esh} roundedCircle />
          <p style={{marginLeft:"40px"}}>Cardiac Sciences</p>
        </Col>
        
        <Col xs={6} md={4}>
          <Image style={{width:"200px",height:"200px"}} src={Esh1} roundedCircle />
          <p style={{marginLeft:"40px"}}>Gastro Sciences</p>
        </Col>
        
        <Col xs={6} md={4}>
          <Image style={{width:"200px",height:"200px"}} src={Esh2} roundedCircle />
          <p style={{marginLeft:"40px"}}>Nephrolog</p>
        </Col>

        <Col xs={6} md={4}>
          <Image src={Esh3} style={{width:"200px",height:"200px"}} src={Esh3} roundedCircle />
          <p style={{marginLeft:"40px"}}>Neurosciences</p>
        </Col>

        <Col xs={6} md={4}>
          <Image  src={Esh4} style={{width:"200px",height:"200px"}} src={Esh4} roundedCircle />
          <p style={{marginLeft:"40px"}}>Cardiac Sciences</p>
        </Col>

        <Col xs={6} md={4}>
          <Image src={Esh5} style={{width:"200px",height:"200px"}} src={Esh5} roundedCircle />
          <p style={{marginLeft:"40px"}}>Cardiac Sciences</p>
        </Col>
{/* 
        <Col xs={6} md={4}>
          <Image src={Esh6} style={{width:"200px",height:"200px"}}src={Esh6} roundedCircle />
          <p style={{marginLeft:"40px"}}>Cardiac Sciences</p>
        </Col>

        <var> <Col xs={6} md={4}>
          <Image src={Esh7} style={{width:"200px",height:"200px"}}src={Esh7} roundedCircle />
          <p style={{marginLeft:"40px"}}>Cardiac Sciences</p>
        </Col>

        <Col xs={6} md={4}>
          <Image src={Esh8} style={{width:"200px",height:"200px"}}src={Esh8} roundedCircle />
          <p style={{marginLeft:"40px"}}>Cardiac Sciences</p>
        </Col></var> */}
        
       
      </Row>
    </Container>
  );
}

export default Imagess;