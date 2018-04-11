// ##############################
// // // Table styles
// #############################

import {
  warningColor,
  primaryColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  defaultFont
} from "../styles";

const tableStyle = theme => ({
  warningTableHeader: {
    color: warningColor
  },
  primaryTableHeader: {
    color: primaryColor
  },
  dangerTableHeader: {
    color: dangerColor
  },
  successTableHeader: {
    color: successColor
  },
  infoTableHeader: {
    color: infoColor
  },
  roseTableHeader: {
    color: roseColor
  },
  grayTableHeader: {
    color: grayColor
  },
  table: {
    marginBottom: "0",
    width: "100%",
    maxWidth: "100%",
    backgroundColor: "transparent",
    borderSpacing: "0",
    borderCollapse: "collapse"
  },
  tableHeadCell: {
    color: "inherit",
    ...defaultFont,
    fontSize: "1em"
  },
  tableCell: {
    ...defaultFont,
    lineHeight: "1.42857143",
    padding: "12px 8px",
    verticalAlign: "middle",
    "& a": {
      color: theme.palette.primary.main,
      textDecoration: "none"
    },
    "& a:hover": {
      color: theme.palette.primary.light,
      textDecoration: "underline"
    },
    "& a:visited": {
      color: theme.palette.primary.dark
    },
    "& code": {
      color: theme.palette.error.dark
    }
  },
  tableResponsive: {
    width: "100%",
    // marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  }
});

export default tableStyle;
