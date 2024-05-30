import React from "react";
import Carousel from "react-bootstrap/Carousel";
const data = [
  {
    id: 1,
    name: "تقديم خدمة التدقيق والتحقيق والتخريج العلمي للنصوص",
    img: "/logo192.png",

  },
  {
    id: 2,
    name: "تقديم خدمة التدقيق اللغوي وإعادة الصياغة لكافة الأعمال ",
    img: "/logo192.png",

  },
  {
    id: 3,
    name: "  الترجمة من اللغة العربية إلى اللغات الأخرى والعكس ",
    img: "/logo192.png",

  },
  {
    id: 4,
    name: " تقديم خدمة التنسيق وترتيب المادة العلمية ",
    img: "/logo192.png",

  },
  {
    id: 5,
    name: "تقديم خدمة تقليل الاقتباس، وضبط المادة العلمية لتوافق المعايير الأكاديمية",
    img: "/logo192.png",

  },
];
function Card3() {
  return (
    <div>
    <Carousel className="border">
      {data.map((item) => (
        <Carousel.Item key={item.id}>
          {item.img && <img src={item.img} width="100%" alt="" />}
          <Carousel.Caption className="border2">
<div className="slideCard">
            {item.name && (
              <p >{item.name}</p>

            )}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        
      ))}

    </Carousel>
  </div>
  );
}

export default Card3;
