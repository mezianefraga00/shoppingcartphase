import React, { Component } from "react";
import ListItem from "./listItem";
import { getFruits } from "../data/data";

class Fruits extends Component {
  state = { fruits: getFruits() };
  render() {
    return <ListItem data={this.state.fruits} getItem={this.props.getItem} />;
  }
}

export default Fruits;
