import React from "react";
import "./Contact.css"
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import DoneAnimation from '../animation/done.json'
import ContactAnimation from '../animation/contact.json'
const Contact = () => {
  const [state, handleSubmit] = useForm("mgegjknq");
  return(
    
<section className="contact-us" id="contactMe">
<div className="intro">
      <h1 style={{color:"white"}} className="text">
راسلنا       </h1>
      </div>
      <p className="sub-title">
    لطلب خدماتنا يمكنك التواصل معنا عن طريق الواتساب او راسلنا عبر البريد الالكترونى
      </p>

      <div className="contparent" style={{justifyContent:"space-between"}}>
        <form onSubmit={handleSubmit} className="">

<div className="mailling">
          <div className="contparentt">
            <label htmlFor="email"  >    بريدك الالكترونى  </label>
            <input required type="email" name="email" id="email" placeholder='example@example.com'/>
            <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
          </div>

          <div className="contparentt" style={{marginTop: "24px"}}>
            <label htmlFor="message">رسالتك</label>
            <textarea required name="message" id="message" placeholder='اترك طلبك او استفسارك'></textarea>
            <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
          </div>
<div>
          <button type="submit" disabled={state.submitting} className="submit">{state.submitting? "جارى الارسال .....":"ارسال"}</button>
          </div>
          </div>
          {state.succeeded && (<p className="contparent" style={{fontSize:"18px",marginTop:"1.2rem",color:"white"}}>
          <Lottie loop={false} style={{height:37}}  animationData={DoneAnimation} />
وصلتنا رسالتك وسوف نتواصل معك فى اقرب وقت ممكن
             </p>)}
            
        </form>

        <div className="animation" style={{alignItems:"center"}}>
        <Lottie className='ANIMATIONCONTACT' style={{width:"600px"}}  animationData={ContactAnimation} />
        </div>
      </div>
    </section>
  )
};

export default Contact;
