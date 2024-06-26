import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Card2() {
  const data = [
    {
      id: 1,
      name: "المساعدة في إنجاز الأبحاث المتعلقة بالمراحل التمهيدية للدراسات العليا",
      img: "/logo192.png",
    },
    {
      id: 2,
      name: "المساعدة في اختيار عناوين واقتراحات الرسائل العلمية لمرحتلي الماجستير والدكتوراه",
      img: "/logo192.png",
    },
    {
      id: 3,
      name: "المساعدة في كتابة البربوزال (الخطة) لكافة التخصصات عربي وانجليزي",
      img: "/logo192.png",
    },
    {
      id: 4,
      name: "المساعدة في كتابة الرسالة لمرحلة الماجستير، والأطروحة لمرحلة الدكتوراه",
      img: "/logo192.png",
    },
    {
      id: 5,
      name: "المساعدة في المراجعة والصياغة لكافة الأعمال العلمية ",
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

export default Card2;
