import React from "react";
import "./Section.css";
import icon from "../../assets/icon.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";


function Section() {
  return (
    <div  className="flex" >
    <div className="follow">تابعنا وتواصل معنا عبر المنصات التاليه</div>
    <div className="line">
    <a  href="https://api.whatsapp.com/send?phone=201009625904"alt=""target="_blank" rel="noreferrer" title="whatsapp">  <img src={icon} width={30} alt="" />  </a>  
    <a  href="https://www.facebook.com/p/%D8%A7%D9%84%D9%85%D9%86%D8%AC%D8%B2-%D9%84%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D8%A7%D8%AA-%D9%88%D8%A7%D9%84%D8%A3%D8%A8%D8%AD%D8%A7%D8%AB-100064059218973/"alt=""target="_blank"rel="noreferrer" title="facebook">  <img src={icon1} width={30} alt="" />  </a>  
    <a  href="https://eg.linkedin.com/in/%D8%A7%D9%84%D9%85%D9%86%D8%AC%D8%B2-%D9%84%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D8%A7%D8%AA-bb5387268"alt=""target="_blank"rel="noreferrer" title="linkedin">  <img src={icon2} width={30} alt="" />  </a>  
    <a  href="https://www.baaz.com/al.al.13"alt=""target="_blank"rel="noreferrer" title="baaz">  <img src={icon3} width={30} alt="" />  </a>  
    </div>
      

    </div>
  );
}

export default Section;
