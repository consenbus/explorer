import React from "react";
import { observer, inject } from "mobx-react";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import {
  ContentCopy,
  Store,
  InfoOutline,
  Warning,
  DateRange,
  LocalOffer,
  Update,
  ArrowUpward,
  AccessTime,
  Accessibility,
  Computer,
  Timer,
  AccountBalanceWallet
} from "material-ui-icons";
import dashboardStyle from "../../../variables/styles/dashboardStyle";
import StatsCard from "../../../components/Cards/StatsCard";
import ItemGrid from "../../../components/Grid/ItemGrid";
import { addCommas } from "../../../utils/number";

class Stats extends React.Component {
  componentDidMount() {
    this.props.block.loadBlockCount();
  }

  render() {
    const { classes, block } = this.props;

    return (
      <Grid container>
        <ItemGrid xs={12} sm={6} md={3}>
          <StatsCard
            icon={ContentCopy}
            iconColor="orange"
            title="NUMBER OF BLOCKS"
            description={addCommas(block.blockCount || 0)}
            small=""
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={3}>
          <StatsCard
            icon={AccountBalanceWallet}
            iconColor="green"
            title="NUMBER OF FRONTIERS"
            description={addCommas("475720")}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={3}>
          <StatsCard
            icon={Computer}
            iconColor="red"
            title="CONNECTED PEERS"
            description="686"
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={3}>
          <StatsCard
            icon={Timer}
            iconColor="blue"
            title="TX/SEC (30 MIN AVG)"
            description="0.23"
          />
        </ItemGrid>
      </Grid>
    );
  }
}

export default withStyles(dashboardStyle)(inject("block")(observer(Stats)));
