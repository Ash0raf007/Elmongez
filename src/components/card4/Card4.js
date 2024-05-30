import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Card4() {
  const data = [
    {
      id: 1,
      name: "تقديم خدمة الطباعة والتجليد، وغيرها من الخدمات الأخرى",
      img: "/logo192.png",

    },
    {
      id: 2,
      name: "عمل الإحصاء لكافة الدراسات",
      img: "/logo192.png",

    },
    {
      id: 3,
      name: "كتابة المحتوى الرقمي الهادف والمتميز لكافة المنصات الإعلامية",
      img: "/logo192.png",

    },
    {
      id: 4,
      name: "كتابة التقارير الإعلامية ودراسات الجدوى للمشاريع ",
      img: "/logo192.png",

    },
    {
      id: 5,
      name: "مراجعة المحتوى الرقمي لكافة المنصات ",
      img: "/logo192.png",

    },
  ];
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

export default Card4;
