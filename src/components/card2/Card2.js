import React from 'react'
import { Carousel } from 'react-bootstrap'

function Card2() {
  const dataa=[
    {
      "id":1 ,
      "name":"المساعدة في إنجاز الأبحاث المتعلقة بالمراحل التمهيدية للدراسات العليا"
      ,"img2":"/logo192.png"
  
    },
    {
      "id":2,
      "name":"المساعدة في اختيار عناوين واقتراحات الرسائل العلمية لمرحتلي الماجستير والدكتوراه"
    ,    "img2":"/logo192.png"
  
    },
    {
      "id":3 ,
      "name":"المساعدة في كتابة البربوزال (الخطة) لكافة التخصصات عربي وانجليزي"
    ,    "img2":"/logo192.png"
  
    },
    {
      "id":4 ,
      "name":"المساعدة في كتابة الرسالة لمرحلة الماجستير، والأطروحة لمرحلة الدكتوراه"
    ,    "img2":"/logo192.png"
  
    },
    {
      "id":5 ,
      "name":"المساعدة في المراجعة والصياغة لكافة الأعمال العلمية ",
      "img2":"/logo192.png"
  
    }
  ]
  return (
    <div>
    <Carousel className="border">
      {dataa.map((item) => (
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

export default Card2
