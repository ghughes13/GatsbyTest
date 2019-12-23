import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import * as PropTypes from "prop-types"
import { Parallax, Background } from "react-parallax"
import EmployeeInfo from "./about-us-employees"

const AboutUs = () => (
  <Layout>
    <SEO title="About Us" />
    <div className="about-us-page">
      <EmployeeInfo />
      <Container className="container">
        <Row className="">
          <Col className="content-container column ">
            <h2 className="blue-text centered-text core-values">Our Core Values</h2>
          </Col>
        </Row>
        <img
          className="blob-graphic"
          src="http://tdgatsbytest.wpengine.com/wp-content/uploads/svg/clear-blob.svg"
        ></img>
        <Row className="two-columns full-width-row content-right align-middle content-first">
          <Col className="content-container centered-text">
            <img src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/11/heart.png" />
          </Col>
          <Col className="content-container">
            <div className="values-card">
              <h3 className="pink-text">Love Your Work</h3>
              <p>
                Cherish and protect your creations. Do not compromise its
                quality.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="two-columns full-width-row content-right align-middle content-second">
          <Col className="content-container">
            <div className="values-card left-align">
              <h3 className="purple-text">Create Superheroes</h3>
              <p>
                People come first. We support, train, protect, and empower
                people to unlock their superhuman potential.
              </p>
            </div>
          </Col>
          <Col className="content-container centered-text">
            <img src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/11/mask.png" />
          </Col>
        </Row>
        <img
          className="blob-graphic"
          src="http://tdgatsbytest.wpengine.com/wp-content/uploads/svg/clear-blob.svg"
        ></img>
        <Row className="two-columns full-width-row content-right align-middle content-third">
          <Col className="content-container centered-text">
            <img src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/11/Egg.png" />
          </Col>
          <Col className="content-container">
            <div className="values-card">
              <h3 className="light-blue-text">Break Eggs</h3>
              <p>
                Creating something meaningful and innovative doesn’t come
                without frequent failure.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="two-columns full-width-row content-right align-middle content-fourth">
          <Col className="content-container">
            <div className="values-card left-align">
              <h3 className="yellow-text">Make Your Mark</h3>
              <p>
                Come in every day and make a difference. When you work with
                passion, you create a legacy for all of those we touch.
              </p>
            </div>
          </Col>
          <Col className="content-container centered-text">
            <img src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/11/draw.png" />
          </Col>
        </Row>
        <Row className="two-columns full-width-row content-right align-middle content-fifth">
          <Col className="content-container centered-text">
            <img src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/11/paint.png" />
          </Col>
          <Col className="content-container">
            <div className="values-card">
              <h3 className="teal-text">Mix Paint</h3>
              <p>
                Through collaboration we take people’s most unique qualities and
                mix them to create something new and beautiful.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="cta-container">
        <Row className="">
          <Col className="cta-card box-shadow">
            <h2 className="white-text compressed-text">
              Don’t Be Shy. Contact Us Today!
            </h2>
            <a className="white-text blue-button" href="#">
              Contact Us
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  </Layout>
)

export default AboutUs
