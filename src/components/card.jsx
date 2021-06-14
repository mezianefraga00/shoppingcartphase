import React, { Component } from "react";

class Card extends Component {
  onclick(type) {
    this.setState((prevState) => {
      if (prevState.count > 1 && type === "sub") {
        return {
          count: prevState.count - 1,
        };
      }
      if (type === "add") {
        return {
          count: prevState.count + 1,
        };
      }
    });
  }

  state = {
    count: 1,
  };
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={this.onclick.bind(this, "add")}
        >
          +
        </button>
        <span className="badge rounded-pill bg-success">
          {this.state.count}
        </span>
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={this.onclick.bind(this, "sub")}
        >
          -
        </button>
      </div>
    );
  }
}

export default Card;
