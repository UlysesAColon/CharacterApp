import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
    imagesize: {
    }
  });


function KnightLeftArm(props){

    const { classes } = props;
        return (
            <div>
                <img width="100%" height="100%" className={classes.imagesize} src={props.chosenleftweapon} alt='left arm' />
            </div>
        );
}

KnightLeftArm.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(KnightLeftArm);