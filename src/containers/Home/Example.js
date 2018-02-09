import React, { Component } from "react";
import { Header, Button, Statistic } from "semantic-ui-react";

import { observer, inject } from "mobx-react";
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
        <Header as="h1">Mobx example</Header>
        <Statistic>
          <Statistic.Value>{this.props.example.timer}</Statistic.Value>
          <Statistic.Label>SECORNDS</Statistic.Label>
        </Statistic>
        <p><Button primary onClick={this.handleReset}>Reset</Button></p>
      </Layout>
    );
  }
}

export default inject("example")(observer(Example));
