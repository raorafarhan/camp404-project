import Carousel from "react-bootstrap/Carousel";
import Layout from "./Layout";

const Head = () => {
  return (
    <Layout>
    
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/800x400?book"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Most Updated Book Store</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/800x400?cover+book"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Newest Books</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/800x400?book+math"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Cheapest In Town</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="container">
        <h1>Ohara Bookstore </h1>
        <p>Ohara is the largest bookstore in this century, selling manuals about the void century</p>
      </div>
    </div>
    </Layout>
  );
};

export default Head;
