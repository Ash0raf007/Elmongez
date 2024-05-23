import { Link } from "react-router-dom";
import "./Home.css";

import Card1 from "../card1/Card1";

//import Slider from "./Slider";
function Home() {

  return (
    <div className="container">
      <div className="intro">
        <p className="text">المنجز للدراسات وريادة الأعمال</p>
      </div>

      {/* <Slider/> */}
      <h1>خدماتنا </h1>
<h5>يقدم المركز كافة الخدمات المتعلقة بالبحث العلمي وريادة الأعمال   </h5>
      <div className="mini">
          <br />
    <div className="sub">  
    <h6 className="hsub">خدمات البحث العلمي </h6>
    <Card1/>
    <Card1/>
    <Card1/>
    <Card1/>

</div> 



  


  
      </div>
      <div>
  <div className="sub2">
  <h6 className="hsub">ريادة الأعمال</h6>
  <p> &#8226; يقدم المركز دراسات الجدوى حول المشاريع الكبيرة والصغيرة </p>
</div>
<div className="sub3">
  <h6 className="hsub">البرمجة</h6>
  <p>
    &#8226; يقدم المركز الخدمات المتعلقة بالبرمجة والذكاء الاصطناعي ، وربط ذلك كله بالبحث العلمي  </p>
</div>

  </div>

      <h1> الأقسام</h1>
      <div className="papers">

          <div className="paper">
          <Link to="/tadkek">
                    قسم التدقيق اللغوى
          </Link>   
          </div>
          <div className="paper">
          <Link to="/estshara">قسم الاستشارات العلميه</Link> 
          </div>
          <div className="paper">
          <Link to="/research">
                    قسم البحث العلمى
                  </Link>
          </div>
          <div className="paper">
          <Link to="/derasa">
                    قسم دراسة الجدوى
                    </Link> 
          </div>
          <div className="paper">
          <Link to="/tahkem">
                    قسم التحكيم العلمى و التشريعى</Link>  
          </div>
    
          <div className="paper">
          <Link to="/statics">
                    قسم الأحصاء
                    </Link>
          </div>

          <div className="paper">
          <Link to="/programming">قسم البرمجه</Link>

                </div>

          </div>

      </div>
  );
}

export default Home;
