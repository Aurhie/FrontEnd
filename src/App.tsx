import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './componentes/estaticos/navbar/Navbar'
import Home from './paginas/home/Home'
import Login from './paginas/login/Login'
import Sobrenos from './paginas/sobrenos/Sobrenos'
import Footer from './componentes/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './componentes/temas/listaTema/ListaTema';
import ListaPostagem from './componentes/postagens/listaPostagem/ListaPostagem';
import CadastroPostagem from './componentes/postagens/cadastroPostagem/CadastroPost';
import CadastroTema from './componentes/temas/cadastroTema/CadastroTema';
 
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

          <Route path='/cadastrousuario'>
              <CadastroUsuario />
            </Route>

            <Route path="/temas">
            <ListaTema />
          </Route>

          <Route path="/posts">
            <ListaPostagem />
          </Route>

          <Route exact path='/formularioPostagem'>
            <CadastroPostagem />
          </Route>

          <Route exact path='/formularioPostagem/:id'>
            <CadastroPostagem />
          </Route>

          <Route exact path='/formularioTema'>
            <CadastroTema />
          </Route>

          <Route exact path='/formularioTema/:id'>
            <CadastroTema />
          </Route>

         

        </div>

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;