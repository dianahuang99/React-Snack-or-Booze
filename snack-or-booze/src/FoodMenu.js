import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

function FoodMenu({ snacks, drinks }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {snacks ? "Snack" : "Drink"} Menu
          </CardTitle>
          <CardText>
            These are the different selections that we have for our{" "}
            {snacks ? "snacks." : "drinks."} You will love them all.
          </CardText>
          <ListGroup>
            {snacks
              ? snacks.map((snack) => (
                  <Link to={`/snacks/${snack.id}`} key={snack.id}>
                    <ListGroupItem>{snack.name}</ListGroupItem>
                  </Link>
                ))
              : drinks.map((drink) => (
                  <Link to={`/drinks/${drink.id}`} key={drink.id}>
                    <ListGroupItem>{drink.name}</ListGroupItem>
                  </Link>
                ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
