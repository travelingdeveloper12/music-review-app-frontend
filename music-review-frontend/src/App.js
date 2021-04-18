import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SongsComponent from './components/SongsComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import HomeComponent from './components/HomeComponent';
import CreateSongComponent from './components/Songs/CreateSongComponent';
import TestComponent from './components/Songs/TestComponent';

function App() {
  return (

    <div>
      <Router>
        <div className="container">
           <HeaderComponent></HeaderComponent>
               <div className="container">
                  <Switch>
                    <Route path="/" exact component={HomeComponent}></Route>
                    <Route path="/home" exact component={TestComponent}></Route>
                    <Route path="/songs/" exact component= {SongsComponent}></Route>
                    <Route path="/songs/add" exact component= {CreateSongComponent}></Route>
                  </Switch>
                  <FooterComponent/>
               </div>
        </div>
      </Router>
  
    </div>

    
  );
}

export default App;
