import React, { Component } from "react";
import Cart from "./cart";
import Grid from "./grid";
import { getElement } from "../data/data";

class FruitsVeg extends Component {
  state = { currentElement: {} };
  getItem = (id) => {
    const element = getElement(id);
    this.setState({ currentElement: element });
  };
  render() {
    return (
      <div className="App">
        <Grid getItem={this.getItem} />
        <Cart item={this.state.currentElement} />;
      </div>
    );
  }
}

export default FruitsVeg;
