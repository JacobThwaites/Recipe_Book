import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './HomePage';
import RecipeBox from '../containers/RecipeBox';
import NavBar from './NavBar';
import './Main.css'
import ShoppingList from './ShoppingList/ShoppingList';
import AddRecipe from "./Recipe/AddRecipe";

class Main extends Component {
  constructor() {
    super();
    this.state = { page: null };
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Route exact path="/" component={HomePage} />
          <Route path="/recipes" component={RecipeBox} />
          <Route path="/shopping-list" component={ShoppingList} />
          <Route path="/add-recipe" component={AddRecipe} />

        </React.Fragment>
      </Router>
    );
  }
}

export default Main;
