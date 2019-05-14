import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Knight from '../Knight/Knight';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundImage: `url(${"https://cdnb.artstation.com/p/assets/images/images/012/296/573/large/bin-kurt-asset.jpg?1534075794"})`,
        backgroundSize: 'cover',
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    background: {
        
    }
})

function KnightBox(props) {
    const { classes } = props;
    console.log(props);
    return (
        <div className={classes.root}>
        <Grid container spacing={24}>
            <Grid item xs={12} />
            <Grid item xs={3} ></Grid>
            <Grid item xs={6} className={classes.background} >
            <Knight  
            nameKnight={props.knightName}
            healthKnight={props.knightHealth}
            attackKnight={props.knightAttack}
            defenseKnight={props.knightDefense}
            initiativeKnight={props.knightInitiative}
            itemOneNameKnight={props.knightItemOne}
            itemTwoNameKnight={props.knightItemTwo}
            itemOneNumberKnight={props.knightItemOneNumber}
            itemTwoNumberKnight={props.knightItemTwoNumber}
            heraldryKnight={props.wordHeraldry}
            heraldryImage={props.knightHeraldryImageChosen}
            headKnightImage={props.knightHeadImageChosen}
            leftArmKnight={props.knightWeaponOneImageChosen}
            chestKnight={props.knightChestArmorImageChosen}
            rightArmKnight={props.knightWeaponTwoImageChosen}
            legKnight={props.knightLegImageChosen}
            damagetest={props.testdamage}
            />
            <p>Hello, Sir {props.knightName}</p>
            </Grid>
            <Grid item xs={3} />
        </Grid>

        </div>
    )
}

KnightBox.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(KnightBox);
