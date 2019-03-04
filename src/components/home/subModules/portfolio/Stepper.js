import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const styles = {
  root: {
	maxWidth: 700,
	minWidth: 300,
	flexGrow: 1,
	alignSelf: "center"
  },
};

class DotsMobileStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
	}));
	this.props.onNextClicked();
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
	}));
	this.props.onPrevClicked();
  };

  render() {
    const { classes, theme, videoNum } = this.props;

    return (
      <MobileStepper
        variant="dots"
        steps={videoNum}
        position="static"
        activeStep={this.state.activeStep}
        className={classes.root}
        nextButton={
          <Button size="medium" onClick={this.handleNext} disabled={this.state.activeStep === (videoNum-1)}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="medium" onClick={this.handleBack} disabled={this.state.activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
		}
		style={{alignSelf:"center !important"}}
      />
    );
  }
}

DotsMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(DotsMobileStepper);