import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import Heading from "../Reusable/Heading";

const sortCategory = (items) => {
  let holdItems = items.map((items) => {
    return items.node.category;
  });

  //Filtering duplicate values
  let holdCategories = new Set(holdItems);
  //Convert into Array for looping
  let categories = Array.from(holdCategories);
  categories = ["All", ...categories];
  return categories;
};

export default class Coursecart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: props.courses.edges,
      mycourses: props.courses.edges,
      sortcategories: sortCategory(props.courses.edges),
    };
  }

  categoryClicked = (category) => {
    let mutateCourses = [...this.state.courses];

    if (category === "All") {
      this.setState(() => {
        return { mycourses: mutateCourses };
      });
    } else {
      let holdCourses = mutateCourses.filter(
        ({ node }) => node.category === category
      );
      this.setState(() => {
        return { mycourses: holdCourses };
      });
    }
  };

  render() {
    //console.log(this.state.courses)
    return (
      <section className="py-5">
        <div className="container">
          <Heading title="Courses" />
          <div className="row my-3">
            <div className="col-10 mx-auto text-center">
              {this.state.sortcategories.map((category, index) => {
                return (
                  <button
                    type="button"
                    className="btn btn-info m-3 px-3"
                    key={index}
                    onClick={() => {
                      this.categoryClicked(category);
                    }}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="row">
            {this.state.mycourses.map(({ node }) => {
              return (
                <Card key={node.id} className="col-6 col-md-3 d-flex my-3 mx-3">
                  <img
                    height="100%"
                    width="100%"
                    src={node.src}
                    alt="Missing"
                    className="mt-2"
                  />
                  <CardBody>
                    <CardTitle className="mb-0">{node.title}</CardTitle>
                    <CardSubtitle className="mb-0 text-success">
                      $ {node.price}
                    </CardSubtitle>
                    <CardText>
                      <small>{node.description}</small>
                    </CardText>
                    <Button className="btn btn-warning">Add to Cart</Button>
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
