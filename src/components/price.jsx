import React, { Component } from "react";

class Price extends Component {
  constructor(props) {
    super(props);
    this.state = { price: [] };
  }
  saveInput = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    const itemId = this.props.item.item[0];
    console.log("price", itemId.price);

    this.state.price.push(itemId.price);
    console.log("boucle", this.state.price);
    return (
      <div>
        <div>
          <h1>$ {this.state.price[0]} /lb</h1>
        </div>
      </div>
    );
  }
}

export default Price;
