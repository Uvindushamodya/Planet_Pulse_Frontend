import React, { useState } from "react";
import { Col, Container, Row, Modal } from "react-bootstrap";
import axios from "axios";
import axiosInstance from "../axios"; // Import your Axios instance with authentication
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import jwtDecode from "jwt-decode";

function PublishBlogs() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("access_token");
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.user_id;

    // Prepare the data to be sent
    const formData = {
      user: userId,
      blogTitle: document.getElementById("blogTitle").value,
      publishDate: document.getElementById("publishDate").value,
      author: document.getElementById("author").value,
      content: document.getElementById("content").value,
      category: document.getElementById("category").value,
    };

    // Make the API call using Axios
    axiosInstance
      .post("/blogs/", formData)
      .then((response) => {
        console.log(response.data);
        // Handle success response and perform any additional actions

        // Redirect to another page
        setShowPopup(true);
      })
      .catch((error) => {
        console.error(error);
        // Handle error response
      });
  };

  return (
    <div>
      <Header></Header>
      <br></br>
      <Container>
        <div class="p-3 mb-2 bg-white text-dark">
          <Row>
            <h1
              style={{ fontFamily: "Montserrat", textTransform: "uppercase" }}
            >
              Give Us your Ideas
              <img
                src={require("../assets/images/blog.png")}
                height={"90px"}
                style={{ float: "right" }}
              ></img>
            </h1>
          </Row>
          <form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col>
                <label for="exampleFormControlInput1" className="form-label">
                  Blog Title
                </label>
                <input class="form-control" id="blogTitle"></input>
              </Col>
              <Col>
                <label for="exampleFormControlInput1" className="form-label">
                  Publish Date
                </label>
                <input
                  type="date"
                  class="form-control"
                  id="publishDate"
                ></input>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <label for="Select Category" className="form-label">
                  Select Category
                </label>
                <select className="form-select" id="category">
                  <option value="" disabled selected>
                    Select your option
                  </option>
                  <option value="Sustainability">Sustainability</option>
                  <option value="Plants and Trees">Plants and Trees</option>
                  <option value="Disasters">Disasters</option>
                  <option value="Clean Energy">Clean Energy</option>
                </select>
              </Col>
              <Col>
                <label for="exampleFormControlInput1" className="form-label">
                  Author
                </label>
                <input class="form-control" id="author"></input>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <label for="exampleFormControlTextarea1" class="form-label">
                  Blog content
                </label>
                <textarea
                  class="form-control"
                  id="content"
                  rows="10"
                ></textarea>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
                <button
                  style={{
                    float: "right",
                  }}
                  className="btn btn-dark"
                >
                  Back
                </button>
              </Col>
            </Row>
          </form>
        </div>
        <Modal show={showPopup} onHide={() => setShowPopup(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Success</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col>
                <p>Your Blog has been submitted successfully!</p>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center">
                <Link to="/blogs">
                  <button className="btn btn-success">OK</button>
                </Link>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default PublishBlogs;
