import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import SingleReivew from "../components/single-review.js"
import { Waypoint } from "react-waypoint"

const ContactUs = () => (
  <Layout>
    <SEO title="Resview" />
    <div className="reviews">
      <Container className="hero-section transparent-hero container flexed blue-gradient-background">
        <Row className="">
          <Col className="content-container column ">
            <h2 className="white-text">TESTIMONIALS FROM SATISFIED CLIENTS</h2>
            <p className="white-text subtext">
              These reviews will give you an idea of what it’s like to work with
              us.
            </p>
          </Col>
          <Col className="content-container column phone-img-container">
            <img
              src="https://tdgatsbytest.wpengine.com/wp-content/uploads/svg/reviews/Phone%20Img.svg"
              alt="iphone reviews"
            />
          </Col>
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <SingleReivew className="margin-top-90" number="1" type="half" />
          <SingleReivew className="margin-top-90" number="2" type="half" />
          <Waypoint
            onEnter={() => {
              document
                .querySelector(".review-container.number-0")
                .classList.add("slide-up")
              document
                .querySelector(".review-container.number-1")
                .classList.add("slide-up", "odd")
            }}
          />
        </Row>
      </Container>
      <Container className="container reviews-container blue-swish">
        <Row className="two-columns full-width-row content-right align-middle">
          <SingleReivew number="3" type="half" />
          <SingleReivew number="4" type="half" />
          <Waypoint
            onEnter={() => {
              document
                .querySelector(".review-container.number-2")
                .classList.add("slide-up", "odd")
              document
                .querySelector(".review-container.number-3")
                .classList.add("slide-up")
            }}
          />
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <SingleReivew number="5" type="half" />
          <SingleReivew number="6" type="half" />
          <Waypoint
            onEnter={() => {
              document
                .querySelector(".review-container.number-4")
                .classList.add("slide-up")
              document
                .querySelector(".review-container.number-5")
                .classList.add("slide-up", "odd")
            }}
          />
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <SingleReivew number="7" type="half" />
          <SingleReivew number="8" type="half" />
          <Waypoint
            onEnter={() => {
              document
                .querySelector(".review-container.number-6")
                .classList.add("slide-up", "odd")
              document
                .querySelector(".review-container.number-7")
                .classList.add("slide-up")
            }}
          />
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <SingleReivew number="9" type="half" />
          <SingleReivew number="10" type="half" />
          <Waypoint
            onEnter={() => {
              document
                .querySelector(".review-container.number-8")
                .classList.add("slide-up")
              document
                .querySelector(".review-container.number-9")
                .classList.add("slide-up", "odd")
            }}
          />
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <SingleReivew number="11" type="half" />
          <SingleReivew number="12" type="half" />
          <Waypoint
            onEnter={() => {
              document
                .querySelector(".review-container.number-10")
                .classList.add("slide-up", "odd")
              document
                .querySelector(".review-container.number-11")
                .classList.add("slide-up")
            }}
          />
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <SingleReivew number="13" type="half" />
          <SingleReivew number="14" type="half" />
          <Waypoint
            onEnter={() => {
              document
                .querySelector(".review-container.number-12")
                .classList.add("slide-up")
              document
                .querySelector(".review-container.number-13")
                .classList.add("slide-up", "odd")
            }}
          />
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <SingleReivew number="19" type="full" />
          <Waypoint
            onEnter={() => {
              document
                .querySelector(".review-container.number-18")
                .classList.add("slide-up")
            }}
          />
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <SingleReivew number="15" type="personal-half" />
          <SingleReivew number="16" type="personal-half" />
          <Waypoint
            onEnter={() => {
              document
                .querySelector(".review-container.number-14")
                .classList.add("slide-up")
              document
                .querySelector(".review-container.number-15")
                .classList.add("slide-up", "odd")
            }}
          />
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <SingleReivew number="20" type="full" />
          <Waypoint
            onEnter={() => {
              document
                .querySelector(".review-container.number-19")
                .classList.add("slide-up")
            }}
          />
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <SingleReivew number="17" type="personal-half" />
          <SingleReivew number="18" type="personal-half" />
          <Waypoint
            onEnter={() => {
              document
                .querySelector(".review-container.number-16")
                .classList.add("slide-up")
              document
                .querySelector(".review-container.number-17")
                .classList.add("slide-up", "odd")
            }}
          />
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <SingleReivew number="21" type="full" />
          <Waypoint
            onEnter={() => {
              document
                .querySelector(".review-container.number-20")
                .classList.add("slide-up")
            }}
          />
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <Waypoint
            onEnter={() => {
              document
                .querySelector(".review-container.number-21")
                .classList.add("slide-up")
            }}
          />
          <SingleReivew number="22" type="full" />
        </Row>
        <Row className="two-columns full-width-row content-right align-middle">
          <SingleReivew number="23" type="full" />
          <Waypoint
            onEnter={() => {
              document
                .querySelector(".review-container.number-22")
                .classList.add("slide-up")
            }}
          />
        </Row>
      </Container>
      <Container className="cta-container">
        <Row className="">
          <Col className="cta-card box-shadow">
            <h2 className="white-text compressed-text">
              It's Time to Meet the Team.
            </h2>
            <a className="white-text blue-button" href="/about-us">
              Meet the Team{" "}
            </a>
          </Col>
          <Waypoint
            onEnter={() =>
              document.querySelector(".cta-card").classList.add("slide-up")
            }
          />
        </Row>
      </Container>
    </div>
  </Layout>
)

export default ContactUs
