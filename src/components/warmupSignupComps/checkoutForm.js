import React from "react";

const CheckoutForm = () => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <input type="hidden" name="form-name" value="contact" />
      <button type="submit">Subscribe</button>
    </form>
    // <form
    //   id="contact-form"
    //   className="Consultation"
    //   name="warmup"
    //   // onSubmit={e => {
    //   //   // e.preventDefault();
    //   //   // document.querySelector("#contact-form").style.display = "none";
    //   //   // document.querySelector(".contact-thank-you").style.display = "block";
    //   //   // return false;
    //   // }}
    //   data-netlify="true"
    //   method="POST"
    //   enctype="application/x-www-form-urlencoded"
    // >
    //   <h3 className="blue-text form-title">
    //     Complete The Sign Up Form to Get Your Marketing Started
    //   </h3>
    //   <div className="what-do-we-call-you">
    //     <div className="field name-field">
    //       <label>First Name</label>
    //       <input
    //         type="text"
    //         className="theInput"
    //         name="first-name"
    //         required
    //       ></input>
    //     </div>
    //     <div className="field">
    //       <label className="second-label">Last Name</label>
    //       <input type="text" className="theInput" name="last-name"></input>
    //     </div>
    //   </div>
    //   <br />
    //   <div className="field email-field">
    //     <label>Company Name</label>
    //     <input
    //       type="text"
    //       className="theInput"
    //       required
    //       name="company-name"
    //     ></input>
    //   </div>
    //   <div className="field email-field">
    //     <label>What’s your email address?</label>
    //     <input type="email" className="theInput" required name="email"></input>
    //   </div>
    //   {/* <div className="field email-field">
    //     <label>Select Price Tier</label>
    //     <select
    //       id="warmup-level"
    //       name="warmup-level"
    //       form="warmup-signup"
    //       className="theInput"
    //       required
    //     >
    //       <option default>
    //         TESTIN' IT: 3-Months Investment | $1,500.00/mo
    //       </option>
    //       <option>FEELIN' IT: 6-Months Investment | $1,400.00/mo</option>
    //       <option>LOVIN' IT: 12-Months Investment | $1,300.00/mo</option>
    //     </select>
    //     <div className="total">
    //       <p>TOTAL</p>
    //       <p className="price-hook"></p>
    //     </div>
    //     <div className="billing-info"></div>
    //   </div>

    //   <div className="checkbox-part">
    //     <input type="checkbox" className="checkbox" />
    //     <label>Keep Me Updated with Emails and Newsletters</label>
    //   </div> */}
    //   <div className="hide-me field">
    //     <input
    //       data-form-type="Consultation"
    //       className="formcat"
    //       name="honey-data-type"
    //     ></input>
    //   </div>
    //   <div className="submit-btn">
    //     <button type="submit" className="pink-button">
    //       Take the First Step
    //     </button>
    //   </div>
    // </form>
  );
};

export default CheckoutForm;
