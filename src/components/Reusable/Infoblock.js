import React from "react";
import { toast } from "react-toastify";
import Heading from "./Heading";

const Infoblock = ({ heading }) => {
  const btnClick = () => {
    toast("Coming soon...Clicked on " + heading + " button", {
      type: "success",
    });
  };

  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-white mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              accusamus, blanditiis provident veritatis pariatur fuga adipisci
              impedit error vero! Totam nisi enim quo, unde nemo ratione
              exercitationem pariatur natus? Assumenda!
            </p>
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
