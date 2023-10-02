import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Images/img-1.jpg'

const Sliders = () => {
    return (
        <div className="m-1">
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className=" "
          src= {img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid"
          src={img1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid"
          src={img1}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default Sliders;