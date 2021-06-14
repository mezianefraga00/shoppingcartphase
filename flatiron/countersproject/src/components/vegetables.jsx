import React, { Component } from "react";
import ListItem from "./listItem";
import { getVegetables } from "../data/data";

class Vegetables extends Component {
  state = { Vegetables: getVegetables() };

  render() {
    return (
      <div>
        <ListItem data={this.state.Vegetables} getItem={this.props.getItem} />
      </div>
    );
  }
}

export default Vegetables;
