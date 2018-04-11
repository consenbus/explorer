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

function Latest(props) {
  const { classes } = props;
  const tableHead = ["Type", "Account", "Amount", "Hash"];

  const tableData = [
    [
      <code>send</code>,
      <Link to={"/accounts/" + "xxx"}>
        bus_3z9ee6z6sz5nzohd55qkmqj6hjk9pqssbw83xw4qshn8hehwre14893gi9b
      </Link>,
      "-0.025641",
      <Link
        to={
          "/blocks/" +
          "9DA0E0CAE28BCE369AE1355EE91932E23CBF526752A22A9BACE3E9479B5096DC"
        }
      >
        9DA0E0CAE28BCE369AE1355EE91932E23CBF526752A22A9BACE3E9479B5096DC
      </Link>
    ]
  ];

  return (
    <Grid container>
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          cardTitle="Latest Transactions"
          plainContent={true}
          content={<Table tableHead={tableHead} tableData={tableData} />}
          className={classes.tableResponsive}
        />
      </ItemGrid>
    </Grid>
  );
}

Latest.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Latest);
