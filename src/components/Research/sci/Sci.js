import React from 'react'
import '../reserch.css'
import data from './data.json'
import icon from "../../../assets/icon.png";
function Sci({items}) {
  return (

        <details className="intro">
          <summary><h4 className="name intro"> القسم العلمي&#8659;</h4></summary>
          <div className="main">
          {data.map((item) => (
          <div key={item.ID} className="info">
            <details className="deti">
            {item.Name && (
              <summary>
                <h4 className="name">{item.Name}</h4>
              </summary>
            )}
            {item.Title1 && (
              <p className="title">&#9737;{item.Title1}</p>
            )}
            {item.Title2 && (
              <p className="title">&#9737;{item.Title2} </p>
            )}
              {item.Title3 && (
              <p className="title">&#9737;{item.Title3} </p>
            )}
              {item.Title4 && (
              <p className="title">&#9737;{item.Title4} </p>
            )}
              {item.Title5 && (
              <p className="title">&#9737;{item.Title5} </p>
            )}
    {item.Title6 && (
              <p className="title">&#9737;{item.Title6} </p>
            )}
                {item.Title7 && (
              <p className="title">&#9737;{item.Title7} </p>
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
          </details>

    
  )
}

export default Sci
