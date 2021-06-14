import React, { Component } from "react";
import Card from "./card";
import Price from "./price";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { cart: [] };
  }
  saveInput = (e) => {
    this.setState({ input: e.target.value });
  };

  handleItem = () => {
    let occur = 0;
    let indexItem = this.state.cart.indexOf(this.props.item[0].label);

    for (var i = 0; i < this.state.cart.length; i++) {
      if (this.state.cart[i] === this.props.item[0].label) {
        occur++;
      }
    }
    if (occur > 0) {
      this.state.cart.splice(indexItem, 1);
      console.log("index", indexItem);
    } else {
      this.state.cart.push(this.props.item[0].label);
    }
  };

  render() {
    const itemId = this.props.item[0];

    if (itemId) {
      this.handleItem();

      return (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="border-0 bg-light">
                  <div className="p-2 px-3 text-uppercase">Product</div>
                </th>
                <th scope="col" className="border-0 bg-light">
                  <div className="py-2 text-uppercase">Quantity</div>
                </th>
                <th scope="col" className="border-0 bg-light">
                  <div className="py-2 text-uppercase">Price</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.cart.map((subItems, sIndex) => {
                return (
                  <>
                    <tr>
                      <th scope="row" className="border-0">
                        <div className="p-2" key={sIndex}>
                          <div className="ml-3 d-inline-block align-middle">
                            <button type="button" class="btn btn-danger">
                              {subItems}
                            </button>
                          </div>
                        </div>
                      </th>
                      <th scope="row" className="border-0">
                        <Card />
                      </th>
                      <th scope="row" className="border-0">
                        <Price item={this.props} />
                      </th>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }

    return <></>;
  }
}

export default Cart;
