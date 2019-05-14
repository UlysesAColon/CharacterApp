import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import KnightHead from './KnightParts/KnightHead';
import KnightChest from './KnightParts/KnightChest';
import KnightLeftArm from './KnightParts/KnightLeftArm';
import KnightRightArm from './KnightParts/KnightRightArm';
import Inventory from './KnightParts/Inventory';
import KnightLegs from './KnightParts/KnightLegs';
import Heraldry from './KnightParts/Heraldry';
import HealthBar from './KnightParts/HealthBar/HealthBar';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    overflowWrap: 'break-word',
    fontSize: 12,
    fontWeight: 'bold'
  },
  head: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: '#FF00FF',
    fontSize: 12,
    fontWeight: 'bold'
  },
  chest: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: '#FFFF00', 
    fontSize: 12,
    fontWeight: 'bold'
  },
  arm: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: '#0000FF',
    fontSize: 12,
    fontWeight: 'bold' 
  },
  inventory: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: '#B5651D',
    fontSize: 12,
    fontWeight: 'bold'

  },
  legs: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: '#2E8B57',
    fontSize: 12,
    fontWeight: 'bold' 
  }
  
});

function Knight(props) {
  const { classes } = props;
  console.log(props)
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} >
          <Paper className={classes.paper}>Sir {props.nameKnight} of the {props.heraldryKnight}</Paper>
        </Grid>
        {/* Stat Bar */}
        <Grid item xs={3} />
        <Grid item xs={6} >
        <Paper className={classes.paper}>
        His Total health is: {props.healthKnight} HP
        <br />
        His attack is: {props.attackKnight}
        <br />
        His defense is: {props.defenseKnight}
        <br />
        His initiative is: {props.initiativeKnight}
        <br />
        </Paper>
        </Grid>
        <Grid item xs={3}>
          <HealthBar currentHealth={ Math.floor(props.healthKnight / props.damagetest * 100)} />
        </Grid>
         {/* Head */}
         <Grid item xs={3}>
          <Paper className={classes.paper}
           justify='center'
          alignitems='center'>
          <Heraldry imageHeraldry={props.heraldryImage}/>
          {props.heraldryKnight}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.head}
          justify='center'
          alignitems='center'
          >
          <KnightHead chosenHeadItem={props.headKnightImage} />
          head
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}
           justify='center'
          alignitems='center'>
          <Heraldry imageHeraldry={props.heraldryImage}/>
          {props.heraldryKnight}
          </Paper>
        </Grid>
        {/* Arms and Chest */}
        <Grid item xs={3}>
          <Paper className={classes.arm}
            justify='center'
            alignitems='center'
            nowrap='false'>
            <KnightLeftArm chosenleftweapon={props.leftArmKnight} />
            Left Arm
            </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.chest}
          justify='center'
          alignitems='center'>
          <KnightChest chosenchestimage={props.chestKnight}/>
          Chest
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.arm}
            justify='center'
            alignitems='center'>
            <KnightRightArm chosenrightweapon={props.rightArmKnight} />
            Right Arm
            </Paper>
        </Grid>
        {/* Inventory */}
        <Grid item xs ={3} />
        <Grid item xs={3}>
          <Paper className={classes.inventory}
            justify='center'
            alignitems='center'
            nowrap='false'>
            <Inventory itemslot={props.itemOneNameKnight}/>
            </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.inventory}
            justify='center'
            alignitems='center'>
            <Inventory itemslot={props.itemTwoNameKnight}/>
            </Paper>
        </Grid>
        <Grid item xs={3} />
        {/* Legs and Banner */}
        <Grid item xs={3} />
        <Grid item xs={6}>
          <Paper className={classes.legs}>
          <KnightLegs knightleg={props.legKnight}/>
          Legs</Paper>
        </Grid>        
        <Grid item xs={3}>
        </Grid>
      </Grid>
    </div>
  );
}

Knight.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Knight);