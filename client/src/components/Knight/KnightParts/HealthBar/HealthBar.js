import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    imagesize: {
    }
  });

function HealthBar(props){
  console.log(props.currentHealth)

    const { classes } = props;
        return (
            <div className="healthbackground">
                <img width={props.currentHealth} height="100%" className={classes.imagesize} src="https://www.abc.net.au/radionational/image/6289622-4x3-340x255.png" alt='healthbar'/>
            </div>
        );
}

HealthBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(HealthBar);