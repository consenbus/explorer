import React from "react";
import PropTypes from "prop-types";
import { observer, inject } from "mobx-react";
import { withStyles } from "material-ui/styles";
import { Link } from "react-router-dom";
import Grid from "material-ui/Grid";
import RegularCard from "../../../components/Cards/RegularCard";
import ItemGrid from "../../../components/Grid/ItemGrid";
import Table from "../../../components/Table/Table";
import _isEmpty from "lodash/isEmpty";

const styles = withStyles(theme => ({
  root: {}
}));

class BlockShow extends React.Component {
  componentDidMount() {
    const hash = this.props.match.params.hash;
    this.props.block.getBlock(hash);
  }

  getTableData(hash, block) {
    if (_isEmpty(block)) {
      return [];
    }

    const tableData = [
      ["Hash", <code>{hash}</code>],
      ["Type", <code>{block.type}</code>],
      [
        "Account",
        <Link to={"/accounts/" + block.account}>{block.account}</Link>
      ],
      [
        "Destination",
        <Link to={"/accounts/" + "xxx"}>
          bus_3z9ee6z6sz5nzohd55qkmqj6hjk9pqssbw83xw4qshn8hehwre14893gi9b7
        </Link>
      ],
      ["Amount", "-0.000344 $BUS"],
      [
        "Previous",
        <Link to={"/blocks/" + "xxx"}>
          C02CEB86C835309FB5908E23BC6B05C5315BCFAFD3C22BAA8F72BF80B114E1D2
        </Link>
      ],
      ["Work", <code>{block.work}</code>],
      ["Signature", <code>{block.signature}</code>]
    ];
    return tableData;
  }

  render() {
    const { classes, block, match } = this.props;
    const tableData = this.getTableData(match.params.hash, block.currentBlock);

    return (
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <RegularCard
            cardTitle="Block"
            plainContent={true}
            content={<Table tableData={tableData} />}
            className={classes.tableResponsive}
          />
        </ItemGrid>
      </Grid>
    );
  }
}

BlockShow.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(inject("block")(observer(BlockShow)));
