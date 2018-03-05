import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import Button from "material-ui/Button";
import Layout from "./_Layout";

class Example extends Component {
  constructor(props) {
    super(props);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount() {
    this.props.example.startTimer();
  }

  componentWillUnmount() {
    this.props.example.clearTimer();
  }

  handleReset() {
    this.props.example.resetTimer();
  }

  render() {
    return (
      <Layout>
        <h1>Mobx example</h1>
        <h2>{this.props.example.timer}</h2>
        <p>SECORNDS</p>
        <p>
          <Button variant="raised" color="primary" onClick={this.handleReset}>
            Reset
          </Button>
        </p>
      </Layout>
    );
  }
}

export default inject("example")(observer(Example));
