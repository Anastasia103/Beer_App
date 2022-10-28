import React, { Component } from 'react'
import AnimatedHeart from "./heart"

export default class Characters extends Component {
  constructor(props) {
   super(props)

   this.state = {
    characters: [],
    isClick: false
   }
  }  
   
 
  componentDidMount() {
    console.log("Mounted");
    fetch("https://api.punkapi.com/v2/beers")
    .then((response) => response.json())
    .then((data) => {
        this.setState({
            characters: [...data], 
        })
    });
  }
  render() {
    return (
      <div>
        <h2>Beers</h2> 
        <ul className="characters">
            {this.state.characters.map((character) => {
            return (
            <li className= "character"> 
                <img src= {character.image_url} alt= {character.name}/>
                <h4>{character.name}</h4>
                <ul className= "descriptions">
                  <li>Tagline: {character.tagline}</li>
                  <li>{character.description}</li>
                  <li>First Brewed: {character.first_brewed}</li>
                  <li>abv: {character.abv}</li>
                  <li>ibu: {character.ibu}</li>
                  <li> <p className= "ingredients">Ingredients</p>
                     <ul className= "ingredientList"> 
                      <li> Malt: {character.ingredients.malt[0].name}</li>
                      <li> Hops: {character.ingredients.hops[0].name}</li>
                      <li> Yeast: {character.ingredients.yeast}</li>
                      </ul>
                    </li>

                </ul>
                <AnimatedHeart />
                </li>)})}
        </ul>
        </div>
    )
  }
}



