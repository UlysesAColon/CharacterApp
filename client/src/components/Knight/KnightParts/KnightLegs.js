import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    imagesize: {
    }
  });


function KnightLegs(props){

    const { classes } = props;
        return (
            <div>
                <img width="50%" height="50%" className={classes.imagesize} src={props.knightleg} alt='leg armor' />
            </div>
        );
}

KnightLegs.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(KnightLegs);