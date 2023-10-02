import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import img1 from '../../Images/person-3.jpg'

const Doners = () => {
    return (
        <div className= "p-2 m-2">
            <h1 className="text-danger text-uppercase">Doner List</h1>
             <Row xs={1} md={3} className="g-6">
      {Array.from({ length: 3 }).map((_, idx) => (
        <Col key={idx}>
          <Card className="p-2 bg-secondary">
            <Card.Img className="img-fluid rounded-circle p-5" variant="top" src={img1} />
            <Card.Body>
              <Card.Title>Sindrella</Card.Title>
              <Card.Title><span>Blood Group: </span>A+</Card.Title>
              <Card.Text>
                Doner Address
              </Card.Text>

            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
        </div>
    );
};

export default Doners;