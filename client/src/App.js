import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PostsList from './components/PostsList';
import AddForm from './components/AddPost';

import './App.css';


function App() {

  

  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={PostsList}/>
        <Route exact path='/add' component={AddForm} />
      </div>
    </Router>
  );
}

export default App;
