import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { toast } from "react-toastify";

const Teamphotosection = ({ teamMember }) => {
  const btnClick = () => {
    toast("Customize your own...Clicked on Learn More button", {
      type: "success",
    });
  };

  return (
    <div className="row">
      <div className="mx-auro">
        <CardGroup>
          {teamMember.teamData.map(({ member }) => {
            return (
              <Card key={member.id}>
                <CardImg
                  top
                  width="100%"
                  src={member.pic}
                  alt="Card image cap"
                  className="card-img"
                />
                <CardBody>
                  <CardTitle>{member.name}</CardTitle>
                  <CardSubtitle>{member.designation}</CardSubtitle>
                  <CardText>{member.description}</CardText>
                  <Button onClick={btnClick}>Learn More</Button>
                </CardBody>
              </Card>
            );
          })}
        </CardGroup>
      </div>
    </div>
  );
};

export default Teamphotosection;
