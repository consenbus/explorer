import React, { Component } from "react";
import { Link } from "react-router-dom";

import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";

import Layout from "./_Layout";
import styles from "../../styles/paper";

class Index extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Layout>
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Typography variant="title">
              Block Explorer for Consenbus
            </Typography>
            <p>
              Consenbus ($BUS) is the name of a next-generation cryptocurrency
              with nearly instant transactions and no fees. It uses block-dag
              technology to enable fast decentralized processing without
              sacrificing security.
            </p>
            <p>
              <Link to="/example">Mobx Example</Link>
            </p>
          </Paper>
        </div>
      </Layout>
    );
  }
}

export default withStyles(styles)(Index);
