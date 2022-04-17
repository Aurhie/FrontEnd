import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import './App.css';
import ListaTema from './componentes/temas/listaTema/ListaTema';
import ListaPostagem from './componentes/postagens/listaPostagem/ListaPostagem';
import CadastroPostagem from './componentes/postagens/cadastroPostagem/CadastroPost';
import CadastroTema from './componentes/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './componentes/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './componentes/temas/deletarTema/DeletarTema';
import Sobrenos from './paginas/sobrenos/Sobrenos'
import {Provider} from 'react-redux';
import store from './store/store';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProfilePage from './paginas/profilePage/ProfilePage';


function App() {
  return (

    <Provider store={store}>
      <ToastContainer />

    <Router>
      <Navbar />
      <Switch>
        <div style={{ minHeight: '100vh' }}>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/perfil'>
            <ProfilePage />
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

          <Route path="/postagens">
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
            
          <Route  exact path='/DeletarPostagem/:id'>
            <DeletarPostagem />
          </Route>

          <Route exact path='/DeletarTema/:id'>
            <DeletarTema />
          </Route>

        </div>

      </Switch>
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;