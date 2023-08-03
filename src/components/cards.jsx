import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Chandu1 from "./d1.jpg"
import Chandu2 from "./d3.jpg"
import Chandu3 from "./d5.jpg"
import Chandu4 from "./d4.jpg"
import Chandu5 from "./d5.jpg"
import Chandu6 from "./d1.jpg"

function Cardd() {
  return (
  
    <div style={{margin:"30px",backgroundColor:"skyblue"}}>
      <h1 id='c1' style={{marginLeft:"650px"}}>Doctors</h1>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={Chandu1}/>
        <Card.Body>
          <Card.Title>Dr</Card.Title>
          <Card.Text>
A cardiologist is a healthcare provider who can treat chest pain, high blood pressure and heart failure.</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small style={{backgroundColor:'lightblue'}} >Cardiologist </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Chandu2} />
        <Card.Body>
          <Card.Title>Dr.</Card.Title>
          <Card.Text>
          A doctor who specializes in neurology is called a neurologist. The neurologist treats disorders that affect the brain, spinal cord, and nerves.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small style={{backgroundColor:'lightblue'}}>Neurologist</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Chandu3} />
        <Card.Body>
          <Card.Title>Dr</Card.Title>
          <Card.Text>
          A gynecologist is a doctor who specializes in female reproductive health. 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small style={{backgroundColor:'lightblue'}} >Gynecologist</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Chandu4} />
        <Card.Body>
          <Card.Title>Dr</Card.Title>
          <Card.Text>
          A nephrologist is a physician who studies and deals with nephrology.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small style={{backgroundColor:'lightblue'}}>Nephrologist </small>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Img variant="top" src={Chandu5}/>
        <Card.Body>
          <Card.Title>Dr</Card.Title>
          <Card.Text>
          A doctor who specializes in the brain, spinal cord, and nerves is a neurologist. A neurologist treats patients with epilepsy, Alzheimer's disease, and other disorders that involve the nervous system.

          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small style={{backgroundColor:'lightblue'}}>Neurologist</small>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Img variant="top" src={Chandu6} />
        <Card.Body>
          <Card.Title>Dr</Card.Title>
          <Card.Text>
          A gynecologist is a doctor who specializes in female reproductive health. They diagnose and treat issues related to the female reproductive tract. This includes the uterus, fallopian tubes, ovaries, and breasts. Anyone with female organs may see a gynecologist.04
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <a href='https://www.urmc.rochester.edu/'> <small style={{backgroundColor:'lightblue'}}>Gynecologist</small></a>
        </Card.Footer>
      </Card>
      
    </CardGroup>
    </div>
    
  );
}

export default Cardd;