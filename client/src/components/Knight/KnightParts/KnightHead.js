import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    imagesize: {
    }
  });


function KnightHead(props){

    const { classes } = props;
        return (
            <div>
                <img width="50%" height="50%" className={classes.imagesize} src={props.chosenHeadItem} alt='helmet'/>
            </div>
        );
}

KnightHead.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(KnightHead);