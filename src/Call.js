import React from 'react'
import icon7 from "./assets/icon.png";
function Call() {
  return (
<div className="call">  
{/* <div className="text-wrapper">
 {[1,2,3,4,5,6,7,8,9,0,2,5,7].map((item)=>(

  <p className='wrap'>الموقع قيد التطوير</p>

))}



</div> */}
<div className="imgCall">
          <a
            href="https://api.whatsapp.com/send?phone=201009625904"
            alt="contact"
            target="_blank"
            rel="noreferrer"
          >
<img src={icon7} width={60} height={60} alt="contact" />
</a>
</div>
</div>
  )
}




export default Call
//  <a  href="https://api.whatsapp.com/send?phone=201009625904"alt=""target="_blank" rel="noreferrer" title="whatsapp"> 
//<img src={icon7} width={60} alt="" />  </a>  