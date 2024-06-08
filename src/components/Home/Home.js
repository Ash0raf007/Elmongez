import { Link } from "react-router-dom";
import "./Home.css";

import Card1 from "../card1/Card1";
import Card2 from "../card2/Card2";
import Card3 from "../card3/Card3";
import Card4 from "../card4/Card4";


//import Slider from "./Slider";
function Home() {

  return (
    <div className="home">
    <div className="container">
      <div className="intro">
        <p className="text" style={{fontWeight:"bold" }}>المنجز للدراسات وريادة الأعمال</p>
      </div>

      {/* <Slider/> */}
      <h3> &#x2734; خدماتنا &#x2734;</h3>
      <hr />
<h5 >يقدم المركز كافة الخدمات المتعلقة بالبحث العلمي وريادة الأعمال   </h5>
    <hr />
      <div className="mini">
      <h6 className="hsub"> &#x2713; خدمات البحث العلمي </h6>

<br />

<div>  
  <div>

  </div>
    <div className="sub">  
<Card1/>
<Card2/>
<Card3/>
<Card4/>

</div> 
</div>

      </div>
      <hr />

      <div>
  <div className="sub2">
    <div>
  <h6 className="hsub"> &#x2713; ريادة الأعمال</h6>
  
  </div>
  <p> &#8226; يقدم المركز دراسات الجدوى حول المشاريع الكبيرة والصغيرة </p>
</div>
<hr />

<div className="sub3">
  <h6 className="hsub"> &#x2713; البرمجة</h6>
  <p>
    &#8226; يقدم المركز الخدمات المتعلقة بالبرمجة والذكاء الاصطناعي ، وربط ذلك كله بالبحث العلمي  </p>
</div>

  </div>
  <hr />

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
          
          
          قسم التحكيم العلمى و النشر

        

          
  
                    </Link>  
          </div>
    
          <div className="paper">
          <Link to="/statics">
                    قسم الأحصاء
                    </Link>
          </div>
          <div className="paper" style={{whiteSpace:"nowrap",fontSize:"13px"}}>
          <Link to="/tansek">
          قسم التنسيق والطباعه و الاخراج المطبعى 
                    </Link>
          </div>

          <div className="paper">
          <Link to="/programming">قسم البرمجه</Link>

                </div>

          </div>

      </div>
      </div>
  );
}

export default Home;
