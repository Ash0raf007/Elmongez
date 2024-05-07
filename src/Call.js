import React from 'react'
import icon7 from "./assets/icon.png";
function Call() {
  return (
    <div style={{position:"fixed",bottom:"90px",right:"170px"}}>
    <a  href="https://api.whatsapp.com/send?phone=201009625904"alt=""target="_blank" rel="noreferrer" title="whatsapp"> 
     <img src={icon7} width={60} alt="" />  </a>  
    </div>
  )
}




export default Call
