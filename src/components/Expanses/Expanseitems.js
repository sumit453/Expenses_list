import React from "react";
import "./Expanseitem.css";
import ExpanseDate from "./ExpanseDate";
import Card from "../UI/Card";

function ExpanseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <div>
          <ExpanseDate date={props.date} />
        </div>

        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">$ {props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpanseItem;
