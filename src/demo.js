import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/lab/Slider";

const styles = {
  root: {
    width: 300
  },
  slider: {
    padding: "22px 0px"
  }
};

class SimpleSlider extends React.Component {
  state = {
    value: 200,
    min: 150,
    max: 600,
    step: 50
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value, min, max, step } = this.state;

    return (
      <div className={classes.root}>
        <h1>Selected value {value}</h1>
        <Typography id="label">
          Select a value between {min} and {max} (step: {step})
        </Typography>
        <Slider
          classes={{ container: classes.slider }}
          value={value}
          aria-labelledby="label"
          step={step}
          min={min}
          max={max}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

SimpleSlider.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleSlider);
