import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import { Link } from "react-router-dom";
import Grid from "material-ui/Grid";
import RegularCard from "../../../components/Cards/RegularCard";
import ItemGrid from "../../../components/Grid/ItemGrid";
import Table from "../../../components/Table/Table";

const styles = withStyles(theme => ({
  root: {}
}));

function AccountPending(props) {
  const { classes } = props;
  const tableHead = ["Type", "Account", "Amount", "Hash"];

  const tableData = [
    [
      <code>send</code>,
      <Link to={"/accounts/" + "xxx"}>
        bus_3z9ee6z6sz5nzohd55qkmqj6hjk9pqssbw83xw4qshn8hehwre14893gi9b7
      </Link>,
      "-0.025641",
      <Link to={"/blocks/" + "xxx"}>
        9360C1AB9359C4ABA7172AD7F2EE6594A3C6FD92953DE5281D30DBE91622CB2D
      </Link>
    ]
  ];

  return (
    <Grid container>
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          cardTitle="Pending Transactions"
          plainContent={true}
          content={<Table tableHead={tableHead} tableData={tableData} />}
          className={classes.tableResponsive}
        />
      </ItemGrid>
    </Grid>
  );
}

AccountPending.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AccountPending);
