import React from "react";
import "./Section.css";
import icon from "../../assets/icon.png";

function Section() {
  return (
    <div  className="flex" >
    <div className="follow">تابعنا وتواصل معنا عبر المنصات التاليه</div>
    <div className="line">
    <a  href="https://api.whatsapp.com/send?phone=201009625904"alt=""target="_blank"rel="noreferrer" title="whatsapp">  <img src={icon} width={30} alt="" />  </a>  
    <a  href="https://api.whatsapp.com/send?phone=201009625904"alt=""target="_blank"rel="noreferrer">  <img src={icon} width={30} alt="" />  </a>  
    <a  href="https://api.whatsapp.com/send?phone=201009625904"alt=""target="_blank"rel="noreferrer">  <img src={icon} width={30} alt="" />  </a>  
    <a  href="https://api.whatsapp.com/send?phone=201009625904"alt=""target="_blank"rel="noreferrer">  <img src={icon} width={30} alt="" />  </a>  
    <a  href="https://api.whatsapp.com/send?phone=201009625904"alt=""target="_blank"rel="noreferrer">  <img src={icon} width={30} alt="" />  </a>  
    </div>
      

    </div>
  );
}

export default Section;
