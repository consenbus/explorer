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

function AccountShow(props) {
  const { classes } = props;
  const tableData = [
    [
      "Account",
      "bus_3z9ee6z6sz5nzohd55qkmqj6hjk9pqssbw83xw4qshn8hehwre14893gi9b7"
    ],
    ["Type", <code>send</code>],
    ["Balance", <code>0.381524 BUS</code>],
    [
      "Representative",
      <Link to="">
        xrb_1sft3zcmn81q97sk35awr1g9fzqczz57kw3o55o7n7hct6r6zif6ok5mciph
      </Link>
    ],
    ["Voting Weight", <code>0.000000</code>]
  ];

  return (
    <Grid container>
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          cardTitle="Account"
          plainContent={true}
          content={<Table tableData={tableData} />}
          className={classes.tableResponsive}
        />
      </ItemGrid>
    </Grid>
  );
}

AccountShow.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AccountShow);
