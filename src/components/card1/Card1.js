import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Card1() {
  const daata=[
    {
      "id":1,
      "name":"الاستشارات العلمية والتربوية في كافة المجالات ",
      "img":"/logo192.png"
    },
    {
  "id":2,
  "name":"ترشيح الكليات ذات الكفاءة العلمية العالية التي تناسب سوق العمل"
  ,   
   "img":"/logo192.png"
    
  },{
      "id":3,
      "name":"إنهاء كافة الإجراءات الورقية والقبولات الجامعية",
      "img":"/logo192.png"
  
    },
    {
      "id":4,
      "name":"إنهاء إجراءات المعادلات للطلبة الوافدين",
      "img":"/logo192.png"
  
    },
    {
      "id": 5,
      "name":" المساعدة في حل الواجبات والتكاليف الخاصة بطلبة الليسانس والبكالريوس "
    ,
    "img":"/logo192.png"
  
    }
  ]
  return (
    <div>
    <Carousel className="border">
      {daata.map((item) => (
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

export default Card1
