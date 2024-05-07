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
        <br />
        <details className="intro">
          <summary><h4 className="name intro"> القسم النظري&#8659;</h4></summary>
          <div className="main">
      {data.map((item) => (
        <div key={item.id} className="info">

          
          <details className="deti">

          <summary>
            <h4 className="name intro">{item.name}</h4>
          </summary>


          
          <details className="deti">

           {/*to inquary data {item.data name && ( 

           )}   */}
          {item.title1 && (
          <summary>
        <h4 className="title intro">&#9737;{item.title1} &#8659;</h4>
        </summary>
)}
        {item.details && (
        <p  className="deti CL intro">{item.details}</p> 
        )}
        
        <br />
        {item.details2 && (
        <p  className="deti CL intro">{item.details2}</p> 
        )}
</details>



<details className="deti">
{item.title2 && (
<summary>
<h4 className="title intro">&#9737;{item.title2} &#8659;</h4>
</summary>
)}
{item.details3 && (
<p  className="deti CL intro">{item.details3}</p> 
)}
</details>
{item.title3 && (
<details className="deti">
<summary>
<h4 className="title intro">{item.title3}</h4>
</summary>
</details>
)}

<details className="deti">
{item.title4 && (
<summary>
<h4 className="title intro">{item.title4} </h4>

</summary>
)}
{item.details4 && (
<p  className="deti CL intro">{item.details4}</p>
)}
</details> 

<details className="deti">
{item.title5 && (
<summary>
<h4 className="title intro">{item.title5} </h4>

</summary>
)}
{item.details5 && (
<p  className="deti CL intro">{item.details5}</p>
)}
</details> 
{item.title6 && (
  <details className="deti">

<summary className="deti">
<h4 className="title intro">{item.title6} </h4>
</summary>
</details>

)}
{item.title7 && (
  <details className="deti">

<summary className="deti">
<h4 className="title intro">{item.title7} </h4>
</summary>
</details>
)}
{item.title8 && (
  <details className="deti">
<summary className="deti">
<h4 className="title intro">{item.title8} </h4>
</summary>
</details>
)}
{item.title9 && (
  <details className="deti">
<summary className="deti">
<h4 className="title intro">{item.title9} </h4>
</summary>
</details>

)}

{item.title10 && (
  <details className="deti">
<summary className="deti">
<h4 className="title intro">{item.title10} </h4>
</summary>
</details>
)}
{item.title11 && (
  <details className="deti">
<summary className="deti">
<h4 className="title intro">{item.title11} </h4>
</summary>
</details>
)}


    
     

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
