import data from "./data.json";
import "./reserch.css";
import Nazry from "./nazary/Nazry";
import Sci from './sci/Sci';
function Research() {

  return (
    <div className="contain" style={{width:"100%"}}>
          <div className="container">

        <div className="intro">
        <h1 style={{color:"white"}} className="text"> 
        قسم البحث العلمى
        </h1>
        </div>
        <br />
  
    <Nazry data={data}/>
    <Sci />

    </div>
    </div>
    
  )
}

export default Research
