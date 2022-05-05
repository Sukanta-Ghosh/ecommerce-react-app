import React, { useContext } from "react";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "reactstrap";
import Layout from "../components/Layout";
import { DualInfoblock } from "../components/Reusable/DualInfoblock";
import HeroSection from "../components/Reusable/HeroSection";
import CartContext from "../context/CartContext";

const CheckoutCart = () => {
  //Use Cart Context
  const { cartItems, setCartItems } = useContext(CartContext);

  //Declare cartAmount
  let cartAmount = 0;
  //Loop through cartAmount to update the cart total amount
  cartItems.forEach((item) => {
    cartAmount = parseInt(cartAmount) + parseInt(item.price);
  });

  //Method to remove an item from cart
  const removeItem = (item) => {
    setCartItems(cartItems.filter((singleItem) => singleItem.id !== item.id));
  };

  //Method to buy cart items and empty the cart
  const buyNow = () => {
    setCartItems([]);

    toast("Purchase Completed", { type: "success" });
  };

  return (
    <Layout>
      <Container fluid>
        <HeroSection
          title="Your Cart"
          subtitle="Delivery Address"
          heroclass="hero-background"
        />
        <Row>
          <Col md="4">
            <ListGroup>
              {cartItems.map((item) => (
                <ListGroupItem key={item.id} className="m-2">
                  <Row>
                    <Col>
                      <img alt="Item " height={80} src={item.src} />
                    </Col>
                    <Col className="text-center">
                      <div className="text-primary">{item.title}</div>
                      <span>Price:- {item.price}</span>
                      <Button
                        color="danger m-2"
                        onClick={() => removeItem(item)}
                      >
                        Remove
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col md="4">
            {/* When Cart has items or Empty */}
            <div className="mb-4">
              {cartItems.length >= 1 ? (
                <Card className="text-center mt-3">
                  <CardHeader>Grand Total</CardHeader>
                  <CardBody>
                    Your total amount for {cartItems.length} products is Rs.
                    {cartAmount}
                  </CardBody>
                  <CardFooter>
                    <Button color="success" onClick={buyNow}>
                      Pay Here
                    </Button>
                  </CardFooter>
                </Card>
              ) : (
                <h2 className="text-success text-center">Cart is empty</h2>
              )}
            </div>
          </Col>
        </Row>
      </Container>
      <DualInfoblock heading="Check Offers" />
    </Layout>
  );
};

export default CheckoutCart;
