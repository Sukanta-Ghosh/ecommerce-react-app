import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import Heading from "./Heading";
import { toast } from "react-toastify";

export const DualInfoblock = ({ heading, imgsrc }) => {
  const btnClick = () => {
    toast("Coming soon...Clicked on " + heading + " button", {
      type: "success",
    });
  };

  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="lead text-white mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              voluptas, repellat eaque facilis aut asperiores, nostrum et
              similique mollitia nesciunt blanditiis repellendus labore possimus
              quis voluptatum delectus voluptates vel repudiandae reiciendis.
              Corrupti est saepe nostrum, dolor nihil porro distinctio, minima
              esse nemo quos vero doloremque excepturi suscipit rerum iusto
              praesentium?
            </p>
          </div>
          <div className="col-4">
            <div>
              <Card className="bg-dark">
                <CardImg top width="100%" src={imgsrc} alt="Card image cap" />
                <CardBody>
                  <CardTitle className="text-white">Card title</CardTitle>
                  <CardSubtitle className="text-white">
                    Card subtitle
                  </CardSubtitle>
                  <CardText className="text-white">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                  <Button className="btn-warning" onClick={btnClick}>
                    {heading}
                  </Button>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
