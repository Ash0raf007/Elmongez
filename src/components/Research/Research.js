import data from "./data.json";
import icon from "../../assets/icon.png";
import "./reserch.css";
function Research() {
  return (
    <div className="contain">
          <div className="container">

        <div className="intro">
        <h1 style={{color:"white"}} className="text"> 
        قسم البحث العلمى
        </h1>
        </div>
        <details className="deti">
          <summary><h4 className="name intro"> القسم النظري&#8659;</h4></summary>
          <div className="main">
      {data.map((item) => (
        <div key={item.id} className="info">
          <details className="deti">

          <summary>
            <h4 className="name intro">{item.name}</h4>
          </summary>

          
          <details className="deti">
          <summary>

        <h4 className="title intro">&#9737;{item.title1} &#8659;</h4>
        </summary>

        
        <p  className="deti CL intro">{item.details}</p> 
        <br />
        <p  className="deti CL intro">{item.details2}</p> 

</details>



<details className="deti">
<summary>
<h4 className="title intro">&#9737;{item.title2} &#8659;</h4>
</summary>
<p  className="deti CL intro">{item.details3}</p> 
</details>

<details className="deti">
<summary>
<h4 className="title intro">{item.title4} </h4>

</summary>
<p  className="deti CL intro">{item.details4}</p>

</details>  

<details className="deti">
<summary>
<h4 className="title intro">{item.title3}</h4>
</summary>
</details>
    
     

          <a
            href="https://api.whatsapp.com/send?phone=201009625904"
            alt=""
            target="_blank"
            rel="noreferrer"
className='contact'
          >
            <span style={{marginRight:"20px"}}>تواصل معنا</span>
            <img src={icon} width={30} alt="" />
          </a>
        </details>
        </div>
      ))}
      </div>
      </details>

      
    </div>
    </div>
  )
}

export default Research
///      <summary><h4 className="name intro">القسم العلمى</h4></summary>
