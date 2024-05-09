import React from "react";
import data from "./data.json";
import icon from "../../assets/icon.png";
import "./prog.css";
function Prog() {
  return (
    <div className="contai">
      <div className="container">
        <div className="intro">
          <h1 style={{ color: "white" }} className="text">
            
          قسم البرمجه و التصميم
          </h1>
        </div>
        <div className="main">
        {data.map((item) => (
          <div key={item.id} className="info">
            <details className="deti">
            {item.name && (
              <summary>
                <h4 className="name">{item.name}</h4>
              </summary>
            )}
              {item.title1 && (
              <p className="title">&#9737;{item.title1}</p>
              )}
                {item.title2 && (
              <p className="title">&#9737;{item.title2} </p>
                )}
                    {item.title3 && (
              <p className="title">&#9737;{item.title3} </p>
                )}
              <a
                href="https://api.whatsapp.com/send?phone=201009625904"
                alt=""
                target="_blank"
                rel="noreferrer"
                className="contact"
              >
                <span>تواصل معنا</span>
                <img src={icon} width={30} alt="" />
              </a>
            </details>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Prog;
