import { Link } from "react-router-dom";
import "./Home.css";
import Slider from "./Slider";
function Home() {

  return (
    <div>
      <div className="intro">
        <p className="text">المنجز للدراسات وريادة الأعمال</p>
      </div>

      <Slider/>
      <div className="papers">
        <div className="paper">
          <img src="" alt="" />
          <p style={{ color: "white" }}>خدماتنا </p>
        </div>

    

    


        <div className="paper">
          <img src="" alt="" />
          <p>lorem</p>
        </div>

        <div className="paper">
          <img src="" alt="" />
          <p>lorem</p>
        </div>

        <div className="paper">
          <img src="" alt="" />
          <p>مرحبا</p>
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
