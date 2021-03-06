import React from "react"
import { Link, graphql, useStaticQuery, navigate } from "gatsby"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import { fade, makeStyles } from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu"
import styles from "./header.module.scss"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}))

export default function Header() {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/`)}
            className={classes.title}
            variant="h6"
            noWrap
          >
            {data.site.siteMetadata.title}
          </Typography>
          <ul className={styles.linkList}>
            <li>
              <Link
                className={styles.btn2}
                activeClassName={styles.linkActive}
                to="/"
              >
                Main
              </Link>
            </li>
            <li>
              <Link activeClassName={styles.linkActive} to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link activeClassName={styles.linkActive} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link activeClassName={styles.linkActive} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  )
}
