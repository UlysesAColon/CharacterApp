import React, { Component } from 'react';
import Axe from '../../images/weapons/Axe.jpg';
import Flail from '../../images/weapons/Flail.jpg';
import GreatSword from '../../images/weapons/GreatSword.jpg';
import Halberd from '../../images/weapons/Halberd.jpg';
import MorningStar from '../../images/weapons/MorningStar.jpg';
import Scimitar from '../../images/weapons/Scimitar.jpg';
import Spear from '../../images/weapons/Spear.jpg';
import Sword from '../../images/weapons/Sword.jpg';
import TwoHandedAxe from '../../images/weapons/TwoHandedAxe.jpg';
import TwoHandedHammer from '../../images/weapons/TwoHandedHammer.jpg';
import ChestLeather from '../../images/armor/ChestLeather.jpg';
import ChestPlateArmor from '../../images/armor/ChestPlateArmor.jpg';
import WizardRobes from '../../images/armor/WizardRobes.jpg';
import Bear from '../../images/heraldry/Bear.jpg';
import Boar from '../../images/heraldry/Boar.jpg';
import Bull from '../../images/heraldry/Bull.jpg';
import Elk from '../../images/heraldry/Elk.jpg';
import Fox from '../../images/heraldry/Fox.jpg';
import Snake from '../../images/heraldry/Snake.jpg';
import Wolf from '../../images/heraldry/Wolf.jpg';
import LeatherCap from '../../images/armor/LeatherCap.jpg';
import PlateHelmet from '../../images/armor/PlateHelmet.jpg';
import HealingHerbs from '../../images/items/HealingHerbs.jpg';
import HealthPotion from '../../images/items/HealthPotion.jpg';
import ManaPotion from '../../images/items/ManaPotion.jpg';
import RotGut from '../../images/items/RotGut.jpg';
import TurkeyLeg from '../../images/items/TurkeyLeg.jpg';
import PlatePants from '../../images/armor/PlatePants.jpg';
import LeatherPants from '../../images/armor/LeatherPants.jpg';
import NoneChosen from '../../images/NoneChosen.jpg';
import Grid from '@material-ui/core/Grid';

// Need Cleanup

class CharacterForm extends Component {
  
    
    change = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
    
    onSubmit = e => {
      e.preventDefault();
      this.props.onSubmit(this.state)
      this.setState({
        name: "",
        health: "",
        attack: "",
        defense: "",
        item1: "",
        item1count: "",
        item2: "",
        item2count: "",
        heraldry: ""
      })
    };
    
    constructor(props) {
      super(props);
      this.state = { 
        index : 0,
        indexleft : 0,
        indexright : 0,
        indexchest: 0,
        indexheraldry: 0,
        indexhead: 0,
        indexleg: 0,
        indexitem1: 0,
        indexitem2: 0,
        damage: 65
      };
      this.selectedWeaponArr = [NoneChosen, Axe, Flail, GreatSword, Halberd, MorningStar, Scimitar, Spear, Sword, TwoHandedAxe, TwoHandedHammer];
      this.selectedWeaponNameArr = ["NoneChosen", "Axe", "Flail", "GreatSword", "Halberd", "MorningStar", "Scimitar", "Spear", "Sword", "TwoHandedAxe", "TwoHandedHammer"];
      // [Attack, Defense, Initiative, Element]
      this.selectedWeaponValues = [[0, 0, 0, "Natural"],[10, 0, 4, "Piercing"],[8, 0, 3, "Blunt"],[20, -10, 1, "Piercing"],[12, -5, 3, "Piercing"],[6, 0, 5, "Blunt"],[5, 0, 7, "Piercing"],[8, 0, 5, "Piercing"],[5, 5, 5, "Piercing" ],[15, -8, 2, "Piercing" ],[15, -8, 2, "Blunt" ]]
      this.selectedChestArmorArr = [NoneChosen, ChestLeather, ChestPlateArmor, WizardRobes];
      this.selectedChestArmorNameArr = ["NoneChosen", "ChestLeather", "ChestPlateArmor", "WizardRobes"];
      this.selectedChestArmorValues =[[0,0,0, "Natural"], [0,10,0, "Medium"], [0,25,0, "Heavy"], [0,5,0, "Light"]];
      this.selectedHeraldryArr = [NoneChosen, Bear, Boar, Bull, Elk, Fox, Snake, Wolf];
      this.selectedHeraldryNameArr = ["NoneChosen", "Bear", "Boar", "Bull", "Elk", "Fox", "Snake", "Wolf"];
      // [Attack, Defense, Initative, Element, Health]
      this.selectedHeraldryStatBuff = [[0,0,0, "Natural", 0], [15,20,2, "Bear", 50], [15,10,5, "Boar", 25], [15,15,2, "Bull", 25], [10,10,7, "Elk", 20], [5,5,9, "Fox", 20], [5,5,12, "Snake", 15], [10,10,6, "Wolf", 15]];
      this.selectedHeadArr = [NoneChosen, LeatherCap, PlateHelmet];
      this.selectedHeadNameArr = ["NoneChosen", "LeatherCap", "PlateHelmet"];
      this.selectedHeadArmorValues =[[0,0,0, "Natural"], [0,10,0, "Medium"], [0,25,0, "Heavy"]];
      this.selectedItemArr = [NoneChosen, HealingHerbs, HealthPotion, ManaPotion, RotGut, TurkeyLeg];
      this.selectedItemNameArr = ["NoneChosen", "HealingHerbs", "HealthPotion", "ManaPotion", "RotGut", "TurkeyLeg"];
      this.selectedLegArr = [NoneChosen, PlatePants, LeatherPants];
      this.selectedLegNameArr = ["NoneChosen", "PlatePants", "LeatherPants"];
      this.selectedLegArmorValues =[[0,0,0, "Natural"], [0,25,0, "Heavy"], [0,10,0, "Medium"]];
  }

  changeSelectedHeadForwards(e) {
    e.preventDefault();
    let ihead = this.state.indexhead ;
    if (ihead === this.selectedHeadArr.length - 1) {
        ihead = 0; 
    } else {
        ihead = ihead + 1; 
    }
    this.setState({
      indexhead: ihead ,
      chosenheadimage: this.selectedHeadArr[ihead],
      chosenheadname: this.selectedHeadNameArr[ihead],
      chosenheadarmorstats: this.selectedHeadArmorValues[ihead]
    });
  }
  
  changeSelectedHeadBackwards(e) {
    e.preventDefault();
    let ihead = this.state.indexhead;
    if (ihead === 0) {
        ihead = this.selectedHeadArr.length - 1; 
    } else {
        ihead = ihead - 1;
    }
    this.setState({
      indexhead: ihead ,
      chosenheadimage: this.selectedHeadArr[ihead],
      chosenheadname: this.selectedHeadNameArr[ihead],
      chosenheadarmorstats: this.selectedHeadArmorValues[ihead]

    });
  }

  changeSelectedLeftArmForwards(e) {
      e.preventDefault();
      let ileft = this.state.indexleft;
      if (ileft === this.selectedWeaponArr.length - 1) {
          ileft = 0; 
      } else {
          ileft = ileft + 1; 
      }
      this.setState({
        indexleft: ileft ,
        chosenleftarmimage: this.selectedWeaponArr[ileft],
        chosenleftarmweaponname: this.selectedWeaponNameArr[ileft],
        chosenleftarmweaponstats: this.selectedWeaponValues[ileft]
      });
  }

  changeSelectedLeftArmBackwards(e) {
      e.preventDefault();
      let ileft = this.state.indexleft;
      if (ileft === 0) {
          ileft = this.selectedWeaponArr.length - 1; 
      } else {
          ileft = ileft - 1;
      }
      this.setState({
        indexleft: ileft ,
        chosenleftarmimage: this.selectedWeaponArr[ileft],
        chosenleftarmweaponname: this.selectedWeaponNameArr[ileft],
        chosenleftarmweaponstats: this.selectedWeaponValues[ileft]
      });
  }
  
  changeSelectedChestForwards(e) {
    e.preventDefault();
    let ichest = this.state.indexchest;
    if (ichest === this.selectedChestArmorArr.length - 1) {
        ichest = 0; 
    } else {
        ichest = ichest + 1; 
    }
    this.setState({
      indexchest: ichest ,
      chosenchestimage: this.selectedChestArmorArr[ichest],
      chosenchestname: this.selectedChestArmorNameArr[ichest],
      chosenchestarmorstats: this.selectedChestArmorValues[ichest]
    });
}

  changeSelectedChestBackwards(e) {
    e.preventDefault();
    let ichest = this.state.indexchest;
    if (ichest === 0) {
        ichest = this.selectedChestArmorArr.length - 1; 
    } else {
        ichest = ichest - 1;
    }
    this.setState({
      indexchest: ichest ,
      chosenchestimage: this.selectedChestArmorArr[ichest],
      chosenchestname: this.selectedChestArmorNameArr[ichest],
      chosenchestarmorstats: this.selectedChestArmorValues[ichest]
    });
}

  changeSelectedRightArmForwards(e) {
    e.preventDefault();
    let iright = this.state.indexright;
    if (iright === this.selectedWeaponArr.length - 1) {
        iright = 0; 
    } else {
        iright = iright + 1; 
    }
    this.setState({
      indexright: iright ,
      chosenrightarmimage: this.selectedWeaponArr[iright],
      chosenrightarmweaponname: this.selectedWeaponNameArr[iright],
      chosenrightarmweaponstats: this.selectedWeaponValues[iright]
    });
}

  changeSelectedRightArmBackwards(e) {
    e.preventDefault();
    let iright = this.state.indexright;
    if (iright === 0) {
        iright = this.selectedWeaponArr.length - 1; 
    } else {
        iright = iright - 1;
    }
    this.setState({
      indexright: iright ,
      chosenrightarmimage: this.selectedWeaponArr[iright],
      chosenrightarmweaponname: this.selectedWeaponNameArr[iright],
      chosenrightarmweaponstats: this.selectedWeaponValues[iright]
    });
}
  
  changeSelectedHeraldryForwards(e) {
  e.preventDefault();
  let iheraldry = this.state.indexheraldry ;
  if (iheraldry === this.selectedHeraldryArr.length - 1) {
      iheraldry = 0; 
  } else {
      iheraldry = iheraldry + 1; 
  }
  this.setState({
    indexheraldry: iheraldry ,
    chosenheraldryimage: this.selectedHeraldryArr[iheraldry],
    chosenheraldryname: this.selectedHeraldryNameArr[iheraldry],
    chosenheraldrystatbuff: this.selectedHeraldryStatBuff[iheraldry]

  });
}

changeSelectedHeraldryBackwards(e) {
  e.preventDefault();
  let iheraldry = this.state.indexheraldry;
  if (iheraldry === 0) {
      iheraldry = this.selectedHeraldryArr.length - 1; 
  } else {
      iheraldry = iheraldry - 1;
  }
  this.setState({
    indexheraldry: iheraldry ,
    chosenheraldryimage: this.selectedHeraldryArr[iheraldry],
    chosenheraldryname: this.selectedHeraldryNameArr[iheraldry],
    chosenheraldrystatbuff: this.selectedHeraldryStatBuff[iheraldry]
  });
}

changeSelectedItem1Forwards(e) {
  e.preventDefault();
  let iitem1 = this.state.indexitem1 ;
  if (iitem1 === this.selectedItemArr.length - 1) {
      iitem1 = 0; 
  } else {
      iitem1 = iitem1 + 1; 
  }
  this.setState({
    indexitem1: iitem1 ,
    chosenitem1image: this.selectedItemArr[iitem1],
    chosenitem1name: this.selectedItemNameArr[iitem1]
  });
}

changeSelectedItem1Backwards(e) {
  e.preventDefault();
  let iitem1 = this.state.indexitem1;
  if (iitem1 === 0) {
      iitem1 = this.selectedItemArr.length - 1; 
  } else {
      iitem1 = iitem1 - 1;
  }
  this.setState({
    indexitem1: iitem1 ,
    chosenitem1image: this.selectedItemArr[iitem1],
    chosenitem1name: this.selectedItemNameArr[iitem1]
  });
}

changeSelectedItem2Forwards(e) {
  e.preventDefault();
  let iitem2 = this.state.indexitem2 ;
  if (iitem2 === this.selectedItemArr.length - 1) {
      iitem2 = 0; 
  } else {
      iitem2 = iitem2 + 1; 
  }
  this.setState({
    indexitem2: iitem2 ,
    chosenitem2image: this.selectedItemArr[iitem2],
    chosenitem2name: this.selectedItemNameArr[iitem2]
  });
}


changeSelectedItem2Backwards(e) {
  e.preventDefault();
  let iitem2 = this.state.indexitem2;
  if (iitem2 === 0) {
      iitem2 = this.selectedItemArr.length - 1; 
  } else {
      iitem2 = iitem2 - 1;
  }
  this.setState({
    indexitem2: iitem2 ,
    chosenitem2image: this.selectedItemArr[iitem2],
    chosenitem2name: this.selectedItemNameArr[iitem2]
  });
}


changeSelectedLegForwards(e) {
  e.preventDefault();
  let ileg = this.state.indexleg ;
  if (ileg === this.selectedLegArr.length - 1) {
      ileg = 0; 
  } else {
      ileg = ileg + 1; 
  }
  this.setState({
    indexleg: ileg ,
    chosenlegimage: this.selectedLegArr[ileg],
    chosenlegname: this.selectedLegNameArr[ileg],
    chosenlegarmorstats: this.selectedLegArmorValues[ileg]
  });
}

changeSelectedLegBackwards(e) {
  e.preventDefault();
  let ileg = this.state.indexleg;
  if (ileg === 0) {
      ileg = this.selectedLegArr.length - 1; 
  } else {
      ileg = ileg - 1;
  }
  this.setState({
    indexleg: ileg ,
    chosenlegimage: this.selectedLegArr[ileg],
    chosenlegname: this.selectedLegNameArr[ileg],
    chosenlegarmorstats: this.selectedLegArmorValues[ileg]
  });
}


    render() {
       var chosenleftarmitem = this.selectedWeaponArr[this.state.indexleft];
       var chosenchestitem = this.selectedChestArmorArr[this.state.indexchest];
       var chosenrightarmitem = this.selectedWeaponArr[this.state.indexright];
       var chosenheraldry = this.selectedHeraldryArr[this.state.indexheraldry];
       var chosenheaditem = this.selectedHeadArr[this.state.indexhead];
       var chosenitem1 = this.selectedItemArr[this.state.indexitem1];
       var chosenitem2 = this.selectedItemArr[this.state.indexitem2];
       var chosenleg = this.selectedLegArr[this.state.indexleg];

      return (
        <div width="100%" height="100%" className="characterFormBackground">
        <form>
            <button onClick={e => this.onSubmit(e)}>Submit</button>
            <br />
            <input
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={e => this.change(e)}
              />
              <br />
              <Grid container justify="center" spacing={24}>
             <div>
                <div className="top-section-actions">
                    <div className="armorychoice" ><h6>Head Armor Choice</h6>
                    <div className="image-holder">
                        <img height="25%" width="25%" className="blog-pictures" src={chosenheaditem} alt='SelectedWeapon'/>
                    </div>
                    <div className="blog-name">
                        <div className="left-arrow-action arrow-icons">
                        <button onClick={(e) => this.changeSelectedHeadForwards(e)} className="fa fa-arrow-circle-o-left fa-2x" aria-hidden="true" >Next Armor</button>
                        </div>
                        <div className="right-arrow-action arrow-icons">
                        <button onClick={(e) => this.changeSelectedHeadBackwards(e)} className="fa fa-arrow-circle-o-right fa-2x" aria-hidden="true" >Previous Armor</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>        
            <div>
                <div className="top-section-actions">
                    <div className="armorychoice" ><h6>Left Arm Choice</h6>
                    <div className="image-holder">
                        <img height="25%" width="25%" className="blog-pictures" src={chosenleftarmitem} alt='SelectedWeapon'/>
                    </div>
                    <div className="blog-name">
                        <div className="left-arrow-action arrow-icons">
                        <button onClick={(e) => this.changeSelectedLeftArmForwards(e)} className="fa fa-arrow-circle-o-left fa-2x" aria-hidden="true" >Next Weapon</button>
                        </div>
                        <div className="right-arrow-action arrow-icons">
                        <button onClick={(e) => this.changeSelectedLeftArmBackwards(e)} className="fa fa-arrow-circle-o-right fa-2x" aria-hidden="true" >Previous Weapon</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="top-section-actions">
                    <div className="armorychoice" ><h6>Chest Armor Choice</h6>
                    <div className="image-holder">
                        <img height="25%" width="25%" className="blog-pictures" src={chosenchestitem} alt='SelectedWeapon'/>
                    </div>
                    <div className="blog-name">
                        <div className="left-arrow-action arrow-icons">
                        <button onClick={(e) => this.changeSelectedChestForwards(e)} className="fa fa-arrow-circle-o-left fa-2x" aria-hidden="true" >Next Armor</button>
                        </div>
                        <div className="right-arrow-action arrow-icons">
                        <button onClick={(e) => this.changeSelectedChestBackwards(e)} className="fa fa-arrow-circle-o-right fa-2x" aria-hidden="true" >Previous Armor</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="top-section-actions">
                    <div className="armorychoice" ><h6>Right Arm Choice</h6>
                    <div className="image-holder">
                        <img height="25%" width="25%" className="blog-pictures" src={chosenrightarmitem} alt='SelectedWeapon'/>
                    </div>
                    <div className="blog-name">
                        <div className="left-arrow-action arrow-icons">
                        <button onClick={(e) => this.changeSelectedRightArmForwards(e)} className="fa fa-arrow-circle-o-left fa-2x" aria-hidden="true" >Next Weapon</button>
                        </div>
                        <div className="right-arrow-action arrow-icons">
                        <button onClick={(e) => this.changeSelectedRightArmBackwards(e)} className="fa fa-arrow-circle-o-right fa-2x" aria-hidden="true" >Previous Weapon</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="top-section-actions">
                    <div className="armorychoice" ><h6>Item One Choice</h6>
                    <div className="image-holder">
                        <img height="25%" width="25%" className="blog-pictures" src={chosenitem1} alt='SelectedWeapon'/>
                    </div>
                    <div className="blog-name">
                        <div className="left-arrow-action arrow-icons">
                        <button onClick={(e) => this.changeSelectedItem1Forwards(e)} className="fa fa-arrow-circle-o-left fa-2x" aria-hidden="true" >NextItem</button>
                        </div>
                        <div className="right-arrow-action arrow-icons">
                        <button onClick={(e) => this.changeSelectedItem1Backwards(e)} className="fa fa-arrow-circle-o-right fa-2x" aria-hidden="true" >Previous Item</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="top-section-actions">
                    <div className="armorychoice" ><h6>Item Two Choice</h6>
                    <div className="image-holder">
                        <img height="25%" width="25%" className="blog-pictures" src={chosenitem2} alt='SelectedWeapon'/>
                    </div>
                    <div className="blog-name">
                        <div className="left-arrow-action arrow-icons">
                        <button onClick={(e) => this.changeSelectedItem2Forwards(e)} className="fa fa-arrow-circle-o-left fa-2x" aria-hidden="true" >Next Item</button>
                        </div>
                        <div className="right-arrow-action arrow-icons">
                        <button onClick={(e) => this.changeSelectedItem2Backwards(e)} className="fa fa-arrow-circle-o-right fa-2x" aria-hidden="true" >Previous Item</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="top-section-actions">
                    <div className="armorychoice" ><h6>Leg Armor Choice</h6>
                    <div className="image-holder">
                        <img height="25%" width="25%" className="blog-pictures" src={chosenleg} alt='SelectedWeapon'/>
                    </div>
                    <div className="blog-name">
                        <div className="left-arrow-action arrow-icons">
                        <button onClick={(e) => this.changeSelectedLegForwards(e)} className="fa fa-arrow-circle-o-left fa-2x" aria-hidden="true" >Next Armor</button>
                        </div>
                        <div className="right-arrow-action arrow-icons">
                        <button onClick={(e) => this.changeSelectedLegBackwards(e)} className="fa fa-arrow-circle-o-right fa-2x" aria-hidden="true" >Previous Armor</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="top-section-actions">
                    <div className="armorychoice" ><h6>Heraldry Choice</h6>
                    <div className="image-holder">
                        <img height="25%" width="25%" className="blog-pictures" src={chosenheraldry} alt='SelectedWeapon'/>
                    </div>
                    <div className="blog-name">
                        <div className="left-arrow-action arrow-icons">
                        <button onClick={(e) => this.changeSelectedHeraldryForwards(e)} className="fa fa-arrow-circle-o-left fa-2x" aria-hidden="true" >Next Heraldry</button>
                        </div>
                        <div className="right-arrow-action arrow-icons">
                        <button onClick={(e) => this.changeSelectedHeraldryBackwards(e)} className="fa fa-arrow-circle-o-right fa-2x" aria-hidden="true" >Previous Heraldry</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </Grid>
            </form>
            </div>
        );
      }
    }
    

export default CharacterForm;
