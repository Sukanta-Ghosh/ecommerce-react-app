import React from "react";
import Heading from "../Reusable/Heading";
import { toast } from "react-toastify";

export const ContactInfo = () => {
  const fromSubmitEvent = (e) => {
    e.preventDefault();
    toast("Customize your Form submition", { type: "success" });
  };
  return (
    <section className="py-3">
      <Heading title="Contact Us" />
      <div className="col-10 col-sm-8 mx-auto">
        {/* TODO: Define action type */}
        <form method="POST" onSubmit={fromSubmitEvent}>
          <div className="form-group m-2">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="form-control"
            />
          </div>
          <div className="form-group m-2">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className="form-control"
            />
          </div>
          <div className="form-group m-2">
            <textarea
              type="text"
              name="description"
              id="description"
              placeholder="Your message"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-outline-info btn-block m-2">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
