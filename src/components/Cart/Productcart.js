import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import CartContext from "../../context/CartContext";
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

const Productcart = ({ courses }) => {
  //Courses state
  const [mycourses, setMycourses] = useState(courses.edges);
  const sortcategories = sortCategory(courses.edges);

  //Use Cart Context
  const { cartItems, setCartItems } = useContext(CartContext);

  //Method to click on Category Buttons
  const categoryClicked = (category) => {
    let mutateCourses = [...courses.edges];

    if (category === "All") {
      setMycourses(mutateCourses);
    } else {
      let holdCourses = mutateCourses.filter(
        ({ node }) => node.category === category
      );
      setMycourses(holdCourses);
    }
  };

  //Method for add items to cart
  const addToCart = (item) => {
    //Define method to validate whether item is already present in the cart
    //If not present then it will return -1
    const isAlreadyAdded = cartItems.findIndex((array) => array.id === item.id);

    //Call upper validation method with msg
    if (isAlreadyAdded !== -1) {
      toast(item.title + " item is already added in the cart", {
        type: "error",
      });
      return;
    }

    //Add the item in the cart
    setCartItems([...cartItems, item]);

    toast(item.title + " added to the cart", { type: "success" });
  };

  return (
    <section className="py-5">
      <div className="container">
        <Heading title="Products/Services" />
        <div className="row my-3">
          <div className="col-10 mx-auto text-center">
            {sortcategories.map((category, index) => {
              return (
                <button
                  type="button"
                  className="btn btn-info m-3 px-3"
                  key={index}
                  onClick={() => {
                    categoryClicked(category);
                  }}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
        {/* Display Products/Services Card */}
        <div className="row">
          {mycourses.map(({ node }) => {
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
                    Rs. {node.price}
                  </CardSubtitle>
                  <CardText>
                    <p>Category: {node.category}</p>
                    <small>{node.description}</small>
                  </CardText>
                  <Button
                    className="btn btn-warning"
                    onClick={() => addToCart(node)}
                  >
                    Add to Cart
                  </Button>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Productcart;
