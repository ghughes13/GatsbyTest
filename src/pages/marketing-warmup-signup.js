import React from "react";
import Layout from "../components/layout/Layout";
import SEO from "../components/seo/Seo";
import { Container, Row } from "react-bootstrap";
import CheckoutForm from "../components/warmup_checkout_form/WarmupCheckoutForm";

const WarmUpPayment = () => {
  return (
    <Layout>
      <SEO title="Warm Up - Signup" />
      <div className="warmup-signup">
        <Container className="container pink-gradient-background hero swish">
          <Row className=""></Row>
        </Container>
        <Container className="container white-section">
          <Row>
            <div className="form-container">
              <h1 className="hide-me">
                Complete The Sign Up Form to Get Your Marketing Started
              </h1>
              <CheckoutForm />
            </div>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default WarmUpPayment;
