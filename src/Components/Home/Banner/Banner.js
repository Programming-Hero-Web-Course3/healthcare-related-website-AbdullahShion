import React from "react";
import { Carousel,} from "react-bootstrap";
import "./Banner.css"

const Banner = () => {
  return (
    <div className = "containers">

<Carousel>
  <Carousel.Item>
    <img
      className="w-100 img-fluid"
      // style = {{height:"95vh"}}
      src="https://website-api.doctorshosp.com/storage/images/banners/find-a-doctor.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-100 img-fluid"
      // style = {{height:"95vh"}}
      src="https://thumbs.dreamstime.com/b/healthcare-medical-concept-medicine-doctor-stethoscope-hand-patients-come-to-hospital-background-179931139.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-100 img-fluid"
      // style = {{height:"95vh"}}
      src="https://image.freepik.com/free-photo/group-successful-doctors-hospital_1139-315.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    </div>
  );
};

export default Banner;
