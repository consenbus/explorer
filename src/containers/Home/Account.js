import React, { Component } from "react";
import { Link } from "react-router-dom";

import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";

import Layout from "./_Layout";
import appStyle from "../../variables/styles/appStyle";
import yellow from "material-ui/colors/yellow";

import AccountShow from "./Account/_Show";
import AccountPending from "./Account/_Pending";
import AccountCompleted from "./Account/_Completed";

class Account extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Layout>
        <AccountShow />
        <AccountPending />
        <AccountCompleted />
      </Layout>
    );
  }
}

export default withStyles(appStyle)(Account);
