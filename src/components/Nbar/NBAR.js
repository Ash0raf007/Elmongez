import Container from "react-bootstrap/Container";
import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NBAR.css";

function NBAR() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowScrollBtnm(true);
      } else {
        setshowScrollBtnm(false);
      }
    });
  }, []);
  const [showScrollBtnm, setshowScrollBtnm] = useState(false);
  return (
    <div>
      <div id="up">
        {showScrollBtnm && (
          <a href="#up">
            <button className="scroll2Top">&#8679; </button>
          </a>
        )}
        <Navbar expand="lg" className="color">
          <Container fluid>
            <Navbar.Brand className="Side">
              <Link to="/">المنجز للدراسات وريادة الأعمال</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "250px" }}
                navbarScroll
              >
                <Nav.Link to="/" as={NavLink}>
                  الرئيسيه
                </Nav.Link>
                <NavDropdown title="الأقسام" id="navbarScrollingDropdown">
                  <NavDropdown.Item>
                    <Link to="/tadkek">قسم التدقيق اللغوى</Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item>
                    <Link to="/estshara">قسم الاستشارات العلميه</Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item>
                    <Link to="/research">قسم البحث العلمى</Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item>
                    <Link to="/derasa">قسم دراسة الجدوى</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/tahkem">قسم التحكيم العلمى و النشر</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/statics">قسم الأحصاء</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/tansek">التنسيق والطباعه والاخراج المطبعى</Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item>
                    <Link to="/programming">قسم البرمجه</Link>
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link to="/contact" as={NavLink}>
                  تواصل معنا
                </Nav.Link>
                <Nav.Link to="/about" as={NavLink}>
                  حول
                </Nav.Link>
              </Nav>

              <Navbar.Brand className="none">
                <Link to="/">
                  <span style={{ color: "white" }}>
                    المنجز للدراسات وريادة الأعمال{" "}
                  </span>
                  <img src="" alt="" />
                </Link>
              </Navbar.Brand>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default NBAR;
