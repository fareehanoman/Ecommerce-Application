import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - The Developers"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          <h3>Developed by</h3>       
          <h5>Sohaib Akhter and Fareeha Noman</h5>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;