import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  day: {
    position: "relative",
    width: "calc(100% / 7)",
    height: "44px",
    // display: "inline-block",
    backgroundColor: "white",
    padding: "0",
    margin: "0",
    // boxSizing: "border-box",
    // zIndex: "1",
    textAlign: "center",
    borderRight: "1px solid black",
  },
});

const Day = (props) => {
  const { classes } = props;

  console.log(props);
  return (
    <>
      <div className={classes.day}>
        {props.data.format("D".toString())}
        <p>Test</p>
      </div>
    </>
  );
};

export default withStyles(styles)(Day);
