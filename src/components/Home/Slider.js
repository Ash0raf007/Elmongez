import Carousel from 'react-bootstrap/Carousel';
import imgl from "../../assets/test.jpg"
function Slider() {
  const data=[
    {
      "id": 1,
      "img":imgl,
    },    {
      "id": 2,
      "img":imgl,
    },  
    {
      "id": 3,
      "img":imgl,
    }, 
       {
      "id": 4,
      "img":imgl,
    },
]
  return (
    <Carousel>
      {data.map((item) => (
        <Carousel.Item key={item.id}>
        <img src={item.img} width="100%" alt="" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
      ))}

      

    
    </Carousel>
  );
}

export default Slider;