import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import Layout from "./_Layout";
import { Link } from "react-router-dom";

class Index extends Component {
  render() {
    return (
      <Layout>
        <Header as="h1">Block Explorer for Consenbus</Header>
        <p>
          Consenbus ($BUS) is the name of a next-generation cryptocurrency with
          nearly instant transactions and no fees. It uses block-dag technology
          to enable fast decentralized processing without sacrificing security.
        </p>
        <p>
          <Link to="/example">
            Mobx Example
          </Link>
        </p>
      </Layout>
    );
  }
}

export default Index;
