import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title="Privacy Policy">
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>When you directly use an End User Service for your personal use (such as when you sign up for Link, or make a payment to Stripe Climate in your personal capacity), we refer to you as an “End User.”
When you do business with, or otherwise transact with, a Business User (e.g. when you buy a pair of shoes from a merchant that uses Stripe Checkout for payment processing) but are not directly doing business with Stripe, we refer to you as an “End Customer.”</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;