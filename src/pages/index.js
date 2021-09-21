import React from 'react';
import PropTypes from 'prop-types';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Typography, withStyles } from '@material-ui/core';
import withRoot from '../withRoot';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class Index extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>Super Secret Password</DialogTitle>
          <DialogContent>
            <DialogContentText>1-2-3-4-5</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleClose}>
              Yuppy
            </Button>
          </DialogActions>
        </Dialog>
        <Typography variant="h4" gutterBottom>
          Material-UI
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Light-weighted package works well
        </Typography>
        <Button variant="contained" color="secondary" onClick={this.handleClick}>
          Super Secret
        </Button>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
