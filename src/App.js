import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddWork from './Components/Content/AddWork';
import Header from './Components/Dashboard/Header';
import Home from './Components/Content/Home';

function App() {
  return (
    <div>
       <Router>

        <Header
        name="MD"
        />

         <Switch>
         <Route exact path='/' component={Home} />
           <Route exact path='/add-work' component={AddWork} />
         </Switch>
       </Router>
    </div>
  );
}

export default App;
