import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { CSSTransition } from "react-transition-group";
import Category from "../components/Category";
import { categories, category } from "../categories";

const styles = theme => ({
  menu: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    height: "100%",
    transform: "rotate(-180deg)",
    transformOrigin: "center",
    transition: theme.transitions.create("transform", {
      duration: 1000
    }),
    width: "100%"
  },
  loaded: {
    transform: "rotate(0)"
  }
});

class App extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <CSSTransition
        appear
        timeout={1}
        in
        classNames={{
          enterDone: classes.loaded
        }}
      >
        <div className={classes.menu}>
          {categories.map(c => <Category key={c.id} {...category(c.id)} />)}
        </div>
      </CSSTransition>
    );
  }
}

export default withStyles(styles)(App);
