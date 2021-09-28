import React, { useState } from "react";
import axios from 'axios';
import Search from './Search.jsx'
class Recipes extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      drinks: [],
    };
    this.getSavedDrinks = this.getSavedDrinks.bind(this);
  }



  getSavedDrinks() {
    axios.get('/drunk/drinks')
      .then(({ data }) => console.log(data, 'my fav drink'))
      .catch(err => console.error(err));
  }

  componentDidMount(){
    console.log(this.getSavedDrinks());
  }



  render() {
    const { drinks } = this.state
  return (
    <div className="list-group">
      <h1 className='drinkBookHeader'>Drink Book</h1>
    {
    !this.getSavedDrinks.length ? null : getSavedDrinks().map((drink, i) => (
      <div>{drinks}</div>

    ))
    }
  <a href="#" className="list-group-item list-group-item-action" aria-current="true">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Drink 1</h5>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/MargaritaReal.jpg/1200px-MargaritaReal.jpg" width="100" height="100"></img>
    </div>
    <p className="mb-1">Some placeholder content in a paragraph.</p>
    <small>And some small print.</small>
  </a>
</div>
  )
  }
}

export default Recipes;