import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Recipes from './components/recipe/Recipes';
import RecipeInProgress from './components/RecipeInProgress/RecipeInProgress';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
function App() {
  return (
    <BrowserRouter>
      <Switch>

        {/* <Route exact patch="/" component={ () => {} } /> */}
        
        <Route exact patch="/meals" component={ Recipes } />
        <Route exact patch="/drinks" component={ Recipes } />
        <Route
          exact
          patch="/meals/:id-da-receita/in-progress"
          component={ RecipeInProgress }
        />
        <Route
          patch="/drinks/:id-da-receita/in-progress"
          component={ RecipeInProgress }
        />
        <Route patch="/profile" component={ Profile } />
        <Route patch="/done-recipes" component={ () => {} } />
        <Route patch="/favorite-recipes" component={ () => {} } />

      </Switch>
    </BrowserRouter>
  );
}
export default App;
