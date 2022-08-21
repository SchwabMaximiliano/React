import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import slide1 from "../img/slide1.jpeg";
import slide2 from "../img/slide2.jpeg";
import slide3 from "../img/slide3.jpeg";

function UncontrolledCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="" src={slide1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Descripcion 1</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  className="" src={slide2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Descripcion 2</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="" src={slide3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Descripcion 3</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledCarousel;
