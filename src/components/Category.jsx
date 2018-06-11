import React from "react";
import { withTheme } from "@material-ui/core/styles";
import injectSheet from "react-jss";
import cn from "classnames";
import { wait } from "../utils";

const size = 200;

function radians(degrees) {
  return (degrees * Math.PI) / 180;
}

function getTranslate(idx) {
  const x0 = -size;
  const y0 = 0;
  const angle = idx * radians(-60);
  const sin = Math.sin(angle);
  const cos = Math.cos(angle);
  const x = x0 * cos - y0 * sin;
  const y = x0 * sin + y0 * cos;

  return `translate(${x}px, ${-y}px)`;
}

const styles = {
  category: {
    display: "flex",
    alignItems: "center",
    borderRadius: "50%",
    justifyContent: "center",
    height: size,
    position: "absolute",
    transform: "scale(0) translate(0px, 0px)",
    width: size,
    willChange: "transform",
    zIndex: 1
  },
  categoryDynamic: props => ({
    background: props.color,
    transition: props.theme.transitions.create(
      ["transform", "width", "height", "z-index"],
      {
        duration: 1000
      }
    )
  }),
  show: props => ({
    transform: `scale(1) ${getTranslate(props.id)}`
  }),
  flip: {
    zIndex: 1000,
    "@media screen and (orientation: landscape)": {
      height: "200vw",
      width: "200vw"
    },
    "@media screen and (orientation: portrait)": {
      height: "200vh",
      width: "200vh"
    }
  }
};

class Category extends React.Component {
  state = {
    open: false,
    show: false
  };

  handleClick = () => {
    this.setState({ ...this.state, open: !this.state.open });
  };

  async componentDidMount() {
    await wait(0);
    this.setState({ ...this.state, show: true });
  }

  render() {
    const { classes } = this.props;
    return (
      <div
        className={cn(
          classes.category,
          classes.categoryDynamic,
          this.state.show && classes.show,
          this.state.open && classes.flip
        )}
        onClick={this.handleClick}
      />
    );
  }
}

export default withTheme()(injectSheet(styles)(Category));
