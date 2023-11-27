import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Link,useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AccountSetup from "./AccountSetup";
import { useTranslation } from "react-i18next";
import Button from "react-bootstrap/Button";

function Dashboard() {
  const navigate = useNavigate()
  const [firstTimeLogin, setFirstTimeLogin] = useState();

  // multi language handlers
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const currentLanguage = i18n.language;

  // console.log(currentLanguage);
function checkLog(){
  const isFirstTime = localStorage.getItem("firstTimeLogin");
    // If it's the first time login, set a flag in localStorage.
    if (isFirstTime === null) {
      setFirstTimeLogin(false)
      console.log(firstTimeLogin)
    }else{
      
      setFirstTimeLogin(true); 
    }
    navigate("/checkaccup")
}
  useEffect(() => {
    // Check if this is the user's first login based on some condition (e.g., using localStorage).
   // Ensure it's a boolean
    
   const isFirstTime = localStorage.getItem("firstTimeLogin");
    // If it's the first time login, set a flag in localStorage.
    if (isFirstTime === null) {
      setFirstTimeLogin(false)
      console.log(firstTimeLogin)
    }else{
      
      setFirstTimeLogin(true); 
    }
  }, []);
  // const checkStatus = ()=>{
  //     // Check if this is the user's first login based on some condition (e.g., using localStorage).
  //   const isFirstTime = localStorage.getItem('firstTimeLogin');
  //   setFirstTimeLogin(isFirstTime);
  //   console.log(isFirstTime)
  //   console.log(firstTimeLogin)
  //   // If it's the first time login, set a flag in localStorage.
  //   // if (firstTimeLogin === null) {
  //   localStorage.setItem('firstTimeLogin', 'true');
  //   // }
  // }

  return (
    <div>
      <Header></Header>
      <Container style={{ paddingTop: "20px" }}>
        <div class="p-3 mb-2 bg-white text-dark">
          <Row className="d-flex justify-content-center mb-3">
            <Col className="mb-3" md={4}>
              <Button
                variant={
                  currentLanguage === "en" ? "success" : "outline-success"
                }
                onClick={() => changeLanguage("en")}
                style={{ width: "50vh" }}
              >
                English
              </Button>
            </Col>
            <Col className="mb-3" md={4}>
              <Button
                variant={
                  currentLanguage === "sl" ? "success" : "outline-success"
                }
                onClick={() => changeLanguage("sl")}
                style={{ width: "50vh" }}
              >
                සිංහල
              </Button>
            </Col>
            {/* <Col className="mb-3" md={4}>
              <Button onClick={checkLog}>
                Set up your account
              </Button>
            </Col> */}
          </Row>
          <h3
            style={{
              fontFamily: "Montserrat",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            {t("services")}
          </h3>
          <p>{t("stay_informed_main_dashboard")}</p>
          <br></br>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <Link to="/warnings" style={{ textDecoration: "none" }}>
              <div class="col" style={{ paddingLeft: "30px", height: "100%" }}>
                <div
                  class="card shadow"
                  style={{
                    width: "20rem",
                    backgroundColor: "white",
                    color: "black",
                    height: "100%",
                  }}
                >
                  <div class="card-body">
                    <center>
                      <h5 class="card-title">{t("alert")}</h5>
                      <img
                        src={require("../assets/images/megaphone.jpg")}
                        class="card-img-top"
                        alt="Alerts"
                        style={{ width: "50%" }}
                      ></img>
                    </center>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/locshow" style={{ textDecoration: "none" }}>
              <div class="col" style={{ paddingLeft: "30px", height: "100%" }}>
                <div
                  class="card shadow"
                  style={{
                    width: "20rem",
                    backgroundColor: "white",
                    color: "black",
                    height: "100%",
                  }}
                >
                  <div class="card-body">
                    <center>
                      <h5 class="card-title"> {t("free_food_resources")}</h5>
                      <img
                        src={require("../assets/images/paperbag.png")}
                        class="card-img-top"
                        alt="Free Food Resources"
                        style={{ width: "50%" }}
                      ></img>
                    </center>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/floodtips" style={{ textDecoration: "none" }}>
              <div class="col" style={{ paddingLeft: "30px", height: "100%" }}>
                <div
                  class="card shadow"
                  style={{
                    width: "20rem",
                    backgroundColor: "white",
                    color: "black",
                    height: "100%",
                  }}
                >
                  <div class="card-body">
                    <center>
                      <h5 class="card-title"> {t("tips_and_tricks")}</h5>
                      <img
                        src={require("../assets/images/bulb.png")}
                        class="card-img-top"
                        alt="Alerts"
                        style={{ width: "50%" }}
                      ></img>
                    </center>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/authority" style={{ textDecoration: "none" }}>
              <div class="col" style={{ paddingLeft: "30px", height: "100%" }}>
                <div
                  class="card shadow"
                  style={{
                    width: "20rem",
                    backgroundColor: "white",
                    color: "black",
                    height: "100%",
                  }}
                >
                  <div class="card-body">
                    <center>
                      <h5 class="card-title"> {t("Emergency Notification Management")}</h5>
                      <img
                        src={require("../assets/images/call119.jpg")}
                        class="card-img-top"
                        alt="Alerts"
                        style={{ width: "50%" }}
                      ></img>
                    </center>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <br></br>

          <h3
            style={{
              fontFamily: "Montserrat",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            {t("tools")}
          </h3>
          <p>{t("Stay_aware_of_air_quality_main_dashboard")}</p>
          <br></br>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <Link to="/airquality" style={{ textDecoration: "none" }}>
              <div class="col" style={{ paddingLeft: "30px", height: "100%" }}>
                <div
                  class="card shadow"
                  style={{
                    width: "20rem",
                    backgroundColor: "white",
                    color: "black",
                    height: "100%",
                  }}
                >
                  <div class="card-body">
                    <center>
                      <h5 class="card-title">{t("air_quality_tracker")}</h5>
                      <img
                        src={require("../assets/images/air.jpg")}
                        class="card-img-top"
                        alt="Air Quality Tracker"
                        style={{ width: "50%" }}
                      ></img>
                    </center>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/greenshowcase" style={{ textDecoration: "none" }}>
              <div class="col" style={{ paddingLeft: "30px", height: "100%" }}>
                <div
                  class="card shadow"
                  style={{
                    width: "20rem",
                    backgroundColor: "white",
                    color: "black",
                    height: "100%",
                  }}
                >
                  <div class="card-body">
                    <center>
                      <h5 class="card-title">{t("green_showcase")}</h5>
                      <img
                        src={require("../assets/images/cam.png")}
                        class="card-img-top"
                        alt="Green Showcase"
                        style={{ width: "50%", paddingTop: "10px" }}
                      ></img>
                    </center>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/carbonDash" style={{ textDecoration: "none" }}>
              <div class="col" style={{ paddingLeft: "30px", height: "100%" }}>
                <div
                  class="card shadow"
                  style={{
                    width: "20rem",
                    backgroundColor: "white",
                    color: "black",
                    height: "100%",
                  }}
                >
                  <div class="card-body">
                    <center>
                      <h5 class="card-title">
                        {" "}
                        {t("carbon_footprint_calculator")}
                      </h5>
                      <img
                        src={require("../assets/images/carbonfootprint .png")}
                        class="card-img-top"
                        alt="Carbon Footprint Calculator"
                        style={{ width: "40%", paddingTop: "10px" }}
                      ></img>
                    </center>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/emergencykit" style={{ textDecoration: "none" }}>
              <div class="col" style={{ paddingLeft: "30px", height: "100%" }}>
                <div
                  class="card shadow"
                  style={{
                    width: "20rem",
                    backgroundColor: "white",
                    color: "black",
                    height: "100%",
                  }}
                >
                  <div class="card-body">
                    <center>
                      <h5 class="card-title"> {t("emergency kit")}</h5>
                      <img
                        src={require("../assets/images/emergencykit2.jpg")}
                        class="card-img-top"
                        alt="Alerts"
                        style={{ width: "50%" }}
                      ></img>
                    </center>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <br></br>
          <h3
            style={{
              fontFamily: "Montserrat",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            {t("social")}
          </h3>
          <p>{t("engage_with_others_main_dashboard")}</p>
          <br></br>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <Link to="/projectDash" style={{ textDecoration: "none" }}>
              <div class="col" style={{ paddingLeft: "30px", height: "100%" }}>
                <div
                  class="card shadow"
                  style={{
                    width: "20rem",
                    backgroundColor: "white",
                    color: "black",
                    height: "100%",
                  }}
                >
                  <div class="card-body">
                    <center>
                      <h5 class="card-title">{t("projects")}</h5>
                      <img
                        src={require("../assets/images/project.png")}
                        class="card-img-top"
                        alt="Projects"
                        style={{ width: "50%" }}
                      ></img>
                    </center>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/blogs" style={{ textDecoration: "none" }}>
              <div class="col" style={{ paddingLeft: "30px", height: "100%" }}>
                <div
                  class="card shadow"
                  style={{
                    width: "20rem",
                    backgroundColor: "white",
                    color: "black",
                    height: "100%",
                  }}
                >
                  <div class="card-body">
                    <center>
                      <h5 class="card-title">{t("blogs_articles")}</h5>
                      <img
                        src={require("../assets/images/blog.png")}
                        class="card-img-top"
                        alt="Blogs & Articles"
                        style={{ width: "50%" }}
                      ></img>
                    </center>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/addcomplaints" style={{ textDecoration: "none" }}>
              <div class="col" style={{ paddingLeft: "30px", height: "100%" }}>
                <div
                  class="card shadow"
                  style={{
                    width: "20rem",
                    backgroundColor: "white",
                    color: "black",
                    height: "100%",
                  }}
                >
                  <div class="card-body">
                    <center>
                      <h5 class="card-title">{t("carbon_complaints")}</h5>
                      <img
                        src={require("../assets/images/complaint.png")}
                        class="card-img-top"
                        alt="Carbon Emission Complaints"
                        style={{ width: "50%", paddingTop: "10px" }}
                      ></img>
                    </center>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/allissues" style={{ textDecoration: "none" }}>
              <div class="col" style={{ paddingLeft: "30px", height: "100%" }}>
                <div
                  class="card shadow"
                  style={{
                    width: "20rem",
                    backgroundColor: "white",
                    color: "black",
                    height: "100%",
                  }}
                >
                  <div class="card-body">
                    <center>
                      <h5 class="card-title">{t("issues")}</h5>
                      <img
                        src={require("../assets/images/question.jpg")}
                        class="card-img-top"
                        alt="Issues"
                        style={{ width: "40%" }}
                      ></img>
                    </center>
                  </div>
                </div>
              </div>
            </Link>
            {/* <Link to="#" style={{ textDecoration: "none" }}>
              <div class="col" style={{ paddingLeft: "30px", height: "100%" }}>
                <div
                  class="card shadow"
                  style={{
                    width: "20rem",
                    backgroundColor: "white",
                    color: "black",
                    height: "100%",
                  }}
                >
                  <div class="card-body">
                    <center>
                      <h5 class="card-title">{t("sponsors")}</h5>
                      <img
                        src={require("../assets/images/Solar.png")}
                        class="card-img-top"
                        alt="Sponsors"
                        style={{ width: "50%" }}
                      ></img>
                    </center>
                  </div>
                </div>
              </div>
            </Link> */}
            <Link to="/news" style={{ textDecoration: "none" }}>
              <div class="col" style={{ paddingLeft: "30px", height: "100%" }}>
                <div
                  class="card shadow"
                  style={{
                    width: "20rem",
                    backgroundColor: "white",
                    color: "black",
                    height: "100%",
                  }}
                >
                  <div class="card-body">
                    <center>
                      <h5 class="card-title">{t("climate_news")}</h5>
                      <img
                        src={require("../assets/images/weather.png")}
                        class="card-img-top"
                        alt="Climate News"
                        style={{ width: "40%" }}
                      ></img>
                    </center>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <br></br>
        </div>
      </Container>
      <Footer></Footer>
      {console.log("hdhdh", firstTimeLogin)}
      {!firstTimeLogin && <AccountSetup />}
      
    </div>
  );
}

export default Dashboard;
