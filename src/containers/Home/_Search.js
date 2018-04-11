import React from "react";
import keycode from "keycode";
import compose from "recompose/compose";
import pure from "recompose/pure";
import EventListener from "react-event-listener";
import PropTypes from "prop-types";
import withWidth, { isWidthUp } from "material-ui/utils/withWidth";
import SearchIcon from "material-ui-icons/Search";
import { fade } from "material-ui/styles/colorManipulator";
import { withStyles } from "material-ui/styles";
import blue from "material-ui/colors/blue";
import { Redirect } from "react-router-dom";
import _startsWith from "lodash/startsWith";

const styles = theme => ({
  "@global": {
    ".algolia-autocomplete": {
      fontFamily: theme.typography.fontFamily,
      "& .algolia-docsearch-suggestion--category-header-lvl0": {
        color: theme.palette.text.primary
      },
      "& .algolia-docsearch-suggestion--subcategory-column-text": {
        color: theme.palette.text.secondary
      },
      "& .algolia-docsearch-suggestion--highlight": {
        color: theme.palette.type === "light" ? "#174d8c" : "#acccf1"
      },
      "& .algolia-docsearch-suggestion": {
        background: "transparent"
      },
      "& .algolia-docsearch-suggestion--title": {
        ...theme.typography.title
      },
      "& .algolia-docsearch-suggestion--text": {
        ...theme.typography.body1
      },
      "& .ds-dropdown-menu": {
        boxShadow: theme.shadows[1],
        borderRadius: 2,
        "&::before": {
          display: "none"
        },
        "& [class^=ds-dataset-]": {
          border: 0,
          borderRadius: 2,
          backgroundColor: theme.palette.background.paper
        }
      }
    }
  },
  root: {
    fontFamily: theme.typography.fontFamily,
    position: "relative",
    marginRight: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit,
    borderRadius: 2,
    background: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      background: fade(theme.palette.common.white, 0.25)
    },
    "& $input": {
      transition: theme.transitions.create("width"),
      width: 300,
      "&:focus": {
        width: 450
      }
    }
  },
  search: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    font: "inherit",
    padding: `${theme.spacing.unit}px ${theme.spacing.unit}px ${theme.spacing
      .unit}px ${theme.spacing.unit * 9}px`,
    border: 0,
    display: "block",
    verticalAlign: "middle",
    whiteSpace: "normal",
    background: "none",
    margin: 0, // Reset for Safari
    color: "inherit",
    width: "100%",
    "&:focus": {
      outline: 0
    },
    "&::placeholder": {
      color: blue["A100"]
    }
  }
});

class AppSearch extends React.Component {
  state = { input: "", redirectType: "" };

  handleSearch = event => {
    event.preventDefault();
    const input = this.state.input;
    // TODO account alias
    if (_startsWith(input, "bus_")) {
      this.setState({ redirectType: "/accounts/" });
    } else {
      this.setState({ redirectType: "/blocks/" });
    }
  };

  render() {
    const { classes, width } = this.props;
    const { redirectType, input } = this.state;
    if (redirectType !== "") {
      return <Redirect to={redirectType + input} />;
    }

    return (
      <form onSubmit={this.handleSearch}>
        <div className={classes.root}>
          <div className={classes.search}>
            <SearchIcon />
          </div>
          <input
            placeholder="Alias, address or block hash"
            onChange={e => this.setState({ input: e.target.value })}
            className={classes.input}
          />
        </div>
      </form>
    );
  }
}

AppSearch.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired
};

export default compose(withStyles(styles), withWidth(), pure)(AppSearch);
