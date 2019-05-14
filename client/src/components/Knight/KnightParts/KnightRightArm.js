import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    imagesize: {
      transform: 'rotateY(180deg)'
    }
  });


function KnightRightArm(props){

    const { classes } = props;
        return (
            <div>
                <img width="100%" height="100%" className={classes.imagesize} src={props.chosenrightweapon} alt='right arm' />
            </div>
        );
}

KnightRightArm.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(KnightRightArm);