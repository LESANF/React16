import React, { Component } from "react";

const MAX_PIZZA = 10;

const Eat = (state, props) => {
  const { pizzas } = state;

  if (pizzas < MAX_PIZZA) {
    return { pizzas: pizzas + 1 };
  } else {
    return null;
  }
};

class Pizza extends Component {
  state = {
    pizzas: 0
  };

  render() {
    const { pizzas } = this.state;

    return (
      <button onClick={this.handleClick}>{`I eaten ${pizzas} ${
        pizzas === 1 ? "pizza" : "pizzas"
      }`}</button>
    );
  }

  handleClick = () => {
    this.setState(Eat);
  };
}

class App extends Component {
  render() {
    return <Pizza />;
  }
}

export default App;
