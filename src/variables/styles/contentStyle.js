// ##############################
// // // Content styles
// #############################

// import { drawerWidth, transition, container } from "../styles";

const contentStyle = theme => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    fontSize: 16,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    padding: `0 ${theme.spacing.unit}px`,
    color: theme.palette.text.primary,
    "& .anchor-link": {
      marginTop: -theme.spacing.unit * 12, // Offset for the anchor.
      position: "absolute"
    },
    '& pre, & pre[class*="language-"]': {
      margin: `${theme.spacing.unit * 3}px 0`,
      padding: "12px 18px",
      backgroundColor: theme.palette.background.paper,
      borderRadius: 3,
      overflow: "auto"
    },
    "& code": {
      display: "inline-block",
      lineHeight: 1.6,
      fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace',
      padding: "3px 6px",
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.background.paper,
      fontSize: 14
    },
    "& p code, & ul code, & pre code": {
      fontSize: 14,
      lineHeight: 1.6
    },
    "& h1": {
      ...theme.typography.display2,
      color: theme.palette.text.secondary,
      margin: "0.7em 0"
    },
    "& h2": {
      ...theme.typography.display1,
      color: theme.palette.text.secondary,
      margin: "1em 0 0.7em"
    },
    "& h3": {
      ...theme.typography.headline,
      color: theme.palette.text.secondary,
      margin: "1em 0 0.7em"
    },
    "& h4": {
      ...theme.typography.title,
      color: theme.palette.text.secondary,
      margin: "1em 0 0.7em"
    },
    "& p, & ul, & ol": {
      lineHeight: 1.6
    },
    "& h1, & h2, & h3, & h4": {
      "& code": {
        fontSize: "inherit",
        lineHeight: "inherit",
        // Remove scroll on small screens.
        wordBreak: "break-word"
      },
      "& .anchor-link-style": {
        opacity: 0,
        // To prevent the link to get the focus.
        display: "none"
      },
      "&:hover .anchor-link-style": {
        display: "inline-block",
        opacity: 1,
        padding: `0 ${theme.spacing.unit}px`,
        color: theme.palette.text.hint,
        "&:hover": {
          color: theme.palette.text.secondary
        },
        "& svg": {
          width: "0.55em",
          height: "0.55em",
          fill: "currentColor"
        }
      }
    },
    "& table": {
      width: "100%",
      // display: "block",
      overflowX: "auto",
      borderCollapse: "collapse",
      borderSpacing: 0,
      overflow: "hidden",
      "& .prop-name": {
        fontSize: 13,
        fontFamily: 'Consolas, "Liberation Mono", Menlo, monospace'
      },
      "& .required": {
        color: theme.palette.type === "light" ? "#006500" : "#9bc89b"
      },
      "& .prop-type": {
        fontSize: 13,
        fontFamily: 'Consolas, "Liberation Mono", Menlo, monospace',
        color: theme.palette.type === "light" ? "#932981" : "#dbb0d0"
      },
      "& .prop-default": {
        fontSize: 13,
        fontFamily: 'Consolas, "Liberation Mono", Menlo, monospace',
        borderBottom: `1px dotted ${theme.palette.text.hint}`
      }
    },
    "& thead": {
      fontSize: 14,
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.text.secondary
    },
    "& tbody": {
      fontSize: 14,
      lineHeight: 1.5,
      color: theme.palette.text.primary
    },
    "& td": {
      borderBottom: `1px solid ${theme.palette.divider}`,
      padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px ${theme
        .spacing.unit}px ${theme.spacing.unit}px`,
      textAlign: "left"
    },
    "& td:last-child": {
      paddingRight: theme.spacing.unit * 3
    },
    "& td compact": {
      paddingRight: theme.spacing.unit * 3
    },
    "& td code": {
      fontSize: 13,
      lineHeight: 1.6
    },
    "& th": {
      whiteSpace: "pre",
      borderBottom: `1px solid ${theme.palette.divider}`,
      fontWeight: theme.typography.fontWeightMedium,
      padding: `0 ${theme.spacing.unit * 2}px 0 ${theme.spacing.unit}px`,
      textAlign: "left"
    },
    "& th:last-child": {
      paddingRight: theme.spacing.unit * 3
    },
    "& tr": {
      height: 48
    },
    "& thead tr": {
      height: 64
    },
    "& strong": {
      fontWeight: theme.typography.fontWeightMedium
    },
    "& blockquote": {
      borderLeft: `5px solid ${theme.palette.text.hint}`,
      backgroundColor: theme.palette.background.paper,
      padding: `${theme.spacing.unit / 2}px ${theme.spacing.unit * 3}px`,
      margin: `${theme.spacing.unit * 3}px 0`
    },
    "& a, & a code": {
      // Style taken from the Link component
      color: theme.palette.primary.main,
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline"
      }
    },
    "& img": {
      maxWidth: "100%"
    }
  }
});

export default contentStyle;
