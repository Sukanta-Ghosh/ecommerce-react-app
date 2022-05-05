import React from "react";
import { toast } from "react-toastify";
import Heading from "./Heading";

const Infoblock = ({ heading, bodyContent }) => {
  const btnClick = () => {
    toast("Customize your own...Clicked on " + heading + " button", {
      type: "success",
    });
  };

  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        {/* TODO: Put lower font side in classname */}
        <Heading title={heading} className="" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-white mb-4">{bodyContent}</p>
            <button className="btn btn-warning btn-lg" onClick={btnClick}>
              {heading}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infoblock;
