import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './componentes/estaticos/navbar/Navbar'
import Home from './paginas/home/Home'
import Login from './paginas/login/Login'
import Sobrenos from './paginas/sobrenos/Sobrenos'
import Footer from './componentes/estaticos/footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div>
          <Route path='/login'>
            <Login />
          </Route>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/sobre-nos'>
            <Sobrenos />
          </Route>
        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;