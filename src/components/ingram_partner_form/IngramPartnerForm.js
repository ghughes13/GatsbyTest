import React from "react";
import axios from "axios";

import Loader from "../loader/Loader";

import "../../styles/fortinet-lp.scss";

const IngramPartnerForm = ({
  formClassName,
  formName,
  formActionURL,
  formTitle = "Ready to Start Generating Leads?",
  additionaltext,
}) => {
  return (
    <form
      id="vendor-lp"
      className={formClassName}
      method="POST"
      name={formName}
      action={formActionURL + "/#thanks"}
      onSubmit={e => {
        e.preventDefault();
        const submitButton = document.getElementById("sbmt-form-btn");
        const loader = document.querySelector(".loader");
        const formName = document.getElementById("vendor-lp");

        loader.style.display = "block";
        submitButton.style.display = "none";

        fetch(formName.getAttribute("action"), {
          method: "POST",
          body: new FormData(document.getElementById("vendor-lp")),
        })
          .then(res => {
            console.log(res);
            if (res.status === 200) {
              document.querySelector("#vendor-lp").style.display = "none";
              document.querySelector(".contact-thank-you").style.display =
                "block";
            } else {
              loader.style.display = "none";
              document.getElementById("error-msg").style.display = "block";
              submitButton.style.display = "block";

              axios.post(
                "https://www.tridigitalmarketing.com/.netlify/functions/errorCatcher",
                JSON.stringify({
                  res,
                })
              );
            }
          })
          .catch(error => {
            loader.style.display = "none";
            document.getElementById("error-msg").style.display = "block";
            submitButton.style.display = "block";

            console.log(error);

            axios.post(
              "https://www.tridigitalmarketing.com/.netlify/functions/errorCatcher",
              JSON.stringify({
                error,
              })
            );
          });
      }}
      netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" id="bot" />
      <h3 className="blue-text form-title centered-text">{formTitle}</h3>
      {additionaltext ? (
        <p
          style={{
            textAlign: "center",
            marginTop: "25px",
            marginBottom: "-20px",
          }}
        >
          {additionaltext}
        </p>
      ) : (
        ""
      )}
      <div className="form-content margin-top-60">
        <div className="company-name company-field">
          <label htmlFor="company">
            Please write your company name as you would like to see it written
            in all your marketing assets
          </label>
          <input
            type="text"
            name="company-name"
            id="company"
            className="send-value"
            required
          />
        </div>
        <div className="company-url company-field">
          <label htmlFor="company-url">
            Please provide your company website URL.
          </label>
          <input
            type="text"
            name="company-url"
            id="company-url"
            className="send-value"
            required
          />
        </div>
        <div className="company-logo">
          <label htmlFor="logo">
            Please provide your logo in svg, eps or ai format/s
          </label>
          <input
            type="file"
            name="logo"
            id="logo"
            className="send-value"
            required
          />
        </div>
        <div className="contact-info">
          <label htmlFor="contact-info">
            Please provide your company contact information as you would like to
            see it on your marketing assets (phone, address, support email)
          </label>
          <textarea
            name="contact-info"
            id="contact-info"
            className="send-value"
            required
          />
        </div>
        <div className="branding-colors">
          <label htmlFor="branding-colors">
            Please provide your company branding colors. Your primary color and
            your secondary color. Please provide this by hex code
          </label>
          <textarea
            name="branding-colors"
            id="branding-colors"
            className="send-value"
            required
          />
        </div>
        <div className="primary-contact margin-top-30">
          <p>
            Please provide a primary contact to be added to Honey, this person
            should be able to respond or route lead activities or sales
            activities. Please provide name, email and phone number
          </p>
          <div className="name name-field">
            <label className="blue-label" htmlFor="firstName">
              Name
            </label>
            <input
              type="text"
              className="send-value"
              name="name"
              id="firstName"
              required
            />
          </div>
          <div className="position">
            <label className="blue-label" htmlFor="position">
              Position
            </label>
            <input
              type="text"
              className="send-value"
              name="position"
              id="position"
              required
            />
          </div>
          <div className="email margin-top-20 email-field">
            <label className="blue-label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="send-value"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="phone margin-top-20">
            <label className="blue-label" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              className="send-value"
              name="phone"
              id="phone"
              required
            />
          </div>
        </div>
        <div className="signature-block">
          <label htmlFor="signature-block">
            Please provide a signature block for the same contact here (copy &
            paste)
          </label>
          <textarea
            name="signature-block"
            id="signature-block"
            className="send-value"
            required
          />
        </div>
        <div className="alt-email company-field">
          <label htmlFor="alt-email">
            If different then the above person, what email address would you
            like emails to come from?
          </label>
          <input
            type="email"
            name="alt-email"
            id="alt-email"
            className="send-value"
            required
          />
        </div>
        <div className="form-submission-email company-field">
          <label htmlFor="form-submission-email">
            What email would you like form submissions to go to?
          </label>
          <input
            type="email"
            name="form-submission-email"
            id="form-submission-email"
            className="send-value"
            required
          />
        </div>
        <div className="industries margin-top-30">
          <p>
            What are the top 10 industries you sell to, starting with the most
            important? (healthcare, construction, financial horizontal){" "}
          </p>
          <div className="single-input margin-top-20">
            <label className="blue-label" htmlFor="industry-1">
              Industry 1
            </label>
            <input
              type="text"
              name="industry-1"
              id="industry-1"
              className="send-value"
              required
            />
          </div>
          <div className="single-input margin-top-20">
            <label className="blue-label" htmlFor="industry-2">
              Industry 2
            </label>
            <input
              type="text"
              name="industry-2"
              id="industry-2"
              className="send-value"
              required
            />
          </div>
          <div className="single-input margin-top-20">
            <label className="blue-label" htmlFor="industry-3">
              Industry 3
            </label>
            <input
              type="text"
              name="industry-3"
              id="industry-3"
              className="send-value"
              required
            />
          </div>
          <div className="single-input margin-top-20">
            <label className="blue-label" htmlFor="industry-4">
              Industry 4
            </label>
            <input
              type="text"
              name="industry-4"
              id="industry-4"
              className="send-value"
              required
            />
          </div>
          <div className="single-input margin-top-20">
            <label className="blue-label" htmlFor="industry-5">
              Industry 5
            </label>
            <input
              type="text"
              name="industry-5"
              id="industry-5"
              className="send-value"
              required
            />
          </div>
          <div className="single-input margin-top-20">
            <label className="blue-label" htmlFor="industry-6">
              Industry 6
            </label>
            <input
              type="text"
              name="industry-6"
              id="industry-6"
              className="send-value"
              required
            />
          </div>
          <div className="single-input margin-top-20">
            <label className="blue-label" htmlFor="industry-7">
              Industry 7
            </label>
            <input
              type="text"
              name="industry-7"
              id="industry-7"
              className="send-value"
              required
            />
          </div>
          <div className="single-input margin-top-20">
            <label className="blue-label" htmlFor="industry-8">
              Industry 8
            </label>
            <input
              type="text"
              name="industry-8"
              id="industry-8"
              className="send-value"
              required
            />
          </div>
          <div className="single-input margin-top-20">
            <label className="blue-label" htmlFor="industry-9">
              Industry 9
            </label>
            <input
              type="text"
              name="industry-9"
              id="industry-9"
              className="send-value"
              required
            />
          </div>
          <div className="single-input margin-top-20">
            <label className="blue-label" htmlFor="industry-10">
              Industry 10
            </label>
            <input
              type="text"
              name="industry-10"
              id="industry-10"
              className="send-value"
              required
            />
          </div>
        </div>
        <div className="company-size">
          <label htmlFor="company-size">
            What employee size range do you sell to? (1-50,51-75, 100-250,
            500-5000)
          </label>
          <input
            type="text"
            name="company-size"
            id="company-size"
            className="send-value"
            required
          />
        </div>
        <div className="sell-to">
          <label htmlFor="sell-to">
            Which contacts do you prefer to sell to in prospect clients (CEO,
            CIO, Directors, manager, etc.)
          </label>
          <input
            type="text"
            name="sell-to"
            id="sell-to"
            className="send-value"
            required
          />
        </div>
        <div className="service-areas">
          <label htmlFor="service-areas">
            What is your services area? (counties, cities, zip codes)
          </label>
          <textarea
            type="text"
            name="service-areas"
            id="service-areas"
            className="send-value"
            required
          />
        </div>
        <p className="DKIM-disclaimer">
          We will be asking you to set up DKIM to ensure the best possible email
          results. If you choose to not set up DKIM, your email results may be
          lower than average.
        </p>
        <div className="sbmt-btn">
          <Loader />
          <p id="error-msg">
            Looks like there was a problem submitting your form. Please ensure
            ALL form fields are filled out and try again.
          </p>
          <button type="submit" className="btn pink-button" id="sbmt-form-btn">
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default IngramPartnerForm;