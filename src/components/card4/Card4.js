import React from 'react'
import { Carousel } from 'react-bootstrap'

function Card4() {
  const data =[
    {
      "id":1 ,
      "name":"تقديم خدمة الطباعة والتجليد، وغيرها من الخدمات الأخرى"
    },  {
      "id": 2,
      "name":"عمل الإحصاء لكافة الدراسات"
    },  {
      "id": 3,
      "name":"كتابة المحتوى الرقمي الهادف والمتميز لكافة المنصات الإعلامية"
    },  {
      "id": 4,
      "name":"كتابة التقارير الإعلامية ودراسات الجدوى للمشاريع "
    },{
      "id":5,
      "name":"مراجعة المحتوى الرقمي لكافة المنصات "
    }
  ]
  return (
    <div>
    <Carousel className="border">
      {data.map((item) => (
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

export default Card4
