import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';
import KnightBox from './components/KnightBox/KnightBox';
import CharacterForm from './components/CharacterForm/CharacterForm';
import NoneChosen from '../src/images/NoneChosen.jpg';

class App extends Component {
 
    state = {
      fields: {
        chosenitem1image: NoneChosen,
        chosenitem2image: NoneChosen,
        chosenheadimage: NoneChosen,
        chosenleftarmimage: NoneChosen,
        chosenchestimage: NoneChosen,
        chosenrightarmimage: NoneChosen,
        chosenlegimage: NoneChosen,
        chosenheraldryimage: NoneChosen,
        chosenleftarmweaponstats: [0,0,0,"Neutral"],
        chosenrightarmweaponstats: [0,0,0,"Neutral"],
        chosenheadarmorstats: [0,0,0,"Neutral"],
        chosenchestarmorstats: [0,0,0,"Neutral"],
        chosenlegarmorstats: [0,0,0,"Neutral"],
        AttackCharacteristic: 0,
        health: 0,
        damage: 85,
        chosenheraldrystatbuff: [0,0,0,"Neutral", 0]
      }
    };

  

  onSubmit = fields => {
    this.setState({ fields });
    console.log("APP component got: ", fields);
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div>
        <br></br>
          <div>
          <Grid container spacing={24}>
            <Grid item xs={6}>
              <CharacterForm onSubmit={fields => this.onSubmit(fields)} />
            </Grid> 

            <Grid item xs={6}>
            <KnightBox 
            knightName={this.state.fields.name}
            knightHealth={100 + this.state.fields.chosenheraldrystatbuff[4]}
            knightAttack={this.state.fields.chosenleftarmweaponstats[0] + this.state.fields.chosenrightarmweaponstats[0] + this.state.fields.chosenheraldrystatbuff[0]}
            knightDefense={this.state.fields.chosenleftarmweaponstats[1] + this.state.fields.chosenrightarmweaponstats[1] + this.state.fields.chosenchestarmorstats[1] + this.state.fields.chosenheadarmorstats[1] + this.state.fields.chosenlegarmorstats[1] + this.state.fields.chosenheraldrystatbuff[1]}

            knightInitiative={this.state.fields.chosenleftarmweaponstats[2] + this.state.fields.chosenrightarmweaponstats[2] + this.state.fields.chosenchestarmorstats[2] + this.state.fields.chosenheadarmorstats[2] + this.state.fields.chosenlegarmorstats[2] + this.state.fields.chosenheraldrystatbuff[2]}


            knightItemOne={this.state.fields.chosenitem1image}
            knightItemOneNumber={this.state.fields.item1count}
            knightItemTwo={this.state.fields.chosenitem2image}
            knightItemTwoNumber={this.state.fields.item2count}
            wordHeraldry={this.state.fields.chosenheraldryname}
            knightHeadImageChosen={this.state.fields.chosenheadimage}
            knightWeaponOneImageChosen={this.state.fields.chosenleftarmimage}
            knightChestArmorImageChosen={this.state.fields.chosenchestimage}
            knightWeaponTwoImageChosen={this.state.fields.chosenrightarmimage}
            knightLegImageChosen={this.state.fields.chosenlegimage}
            knightHeraldryImageChosen={this.state.fields.chosenheraldryimage}

            testdamage={this.state.fields.damage}
            />
            </Grid>
          </Grid>  
          </div>
         </div>
         <br></br>
         <div>
         </div>
        </header>
      </div>
    );
  }
}

export default App;
