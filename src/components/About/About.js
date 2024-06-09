import React from "react";
import './About.css'
const About = () => {
  return( 
    <div className="about">
     <div className="container"
  style={{height:"100vh",marginTop:"10px"}}>
        <div className="intro">
        <h1 style={{color:"black"}} className="text"> 
        رؤية المركز 
        </h1>
  
        </div>
  <p className="Aboutinf">رؤية عصرية تربط بين مجالات البحث العلمي و التقدم التكنولوجي   </p>

  <div className="intro">
        <h1 style={{color:"black"}} className="text"> 
        سياستنا 
        </h1>
        </div>
<p className="Aboutinf"> &#8226;الشفافية </p>
<p className="Aboutinf"> &#8226;الدقة </p>
<p className="Aboutinf"> &#8226; الأنجاز   </p>

<div className="intro">
        <h1 style={{color:"black"}} className="text"> 
        خدماتنا 
        </h1>
        </div>
        <p className="Aboutinf">يقدم المركز كافة الخدمات المتعلقة بالبحث العلمي وريادة الأعمال</p>

  </div>
  </div>
  

  )
};

export default About;
