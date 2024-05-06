import React from 'react'
import data from "./data.json";
import icon from "../../assets/icon.png";
import './prog.css'
function Prog() {
  return (
    <div className="contai">
        <div className="container">
              <div className="intro">
    <h1 style={{color:"white"}} className="text"> قسم البرمجه</h1>
    </div>
    {data.map((item) => (
      <div key={item.id} className="info">
        <details className="deti">
        <summary>
          <h4 className="name">{item.name}</h4>
        </summary>
        <p className="title">&#9737;{item.title1}</p>
        <p className="title">&#9737;{item.title2} </p>

        <a
          href="https://api.whatsapp.com/send?phone=201009625904"
          alt=""
          target="_blank"
          rel="noreferrer"
className='contact'
        >
          <span>تواصل معنا</span>
          <img src={icon} width={30} alt="" />
        </a>
      </details>
      </div>
    ))}
  </div>
  </div>
  )
}

export default Prog
