import React from 'react'
import { Carousel } from 'react-bootstrap'
const datta=[
  {
    "id": 1,
    "name":"تقديم خدمة التدقيق والتحقيق والتخريج العلمي للنصوص"
  },
  {
    "id":2 ,
    "name":"تقديم خدمة التدقيق اللغوي وإعادة الصياغة لكافة الأعمال "
  },
  {
    "id":3 ,
    "name":"  الترجمة من اللغة العربية إلى اللغات الأخرى والعكس "
  },
  {
    "id":4 ,
    "name":" تقديم خدمة التنسيق وترتيب المادة العلمية "
  },
  {
    "id": 5,
    "name":"تقديم خدمة تقليل الاقتباس، وضبط المادة العلمية لتوافق المعايير الأكاديمية"
  }
]
function Card3() {
  return (
    <div>
    <Carousel className="border">
      {datta.map((item) => (
<Carousel.Item key={item.id}>
{item.img && (
<img src={item.img} width="100%" alt="" />
)}
        <Carousel.Caption className="border2">
        {item.name && (
          <p style={{color:"black",fontSize:"20px"}}>{item.name}</p>
        )}
        </Carousel.Caption>
        </Carousel.Item>

      
      ))}
    </Carousel>
    </div>
  )
}

export default Card3
