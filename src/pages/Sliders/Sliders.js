import Carousel from 'react-bootstrap/Carousel';
import slide from '../../Images/slide.png'
import slide2 from '../../Images/slide-1.png'

const Sliders = () => {
    return (
        <div className="">
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className=" img-fluid"
          src={slide}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" img-fluid"
          src={slide2}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default Sliders;