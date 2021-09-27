import './App.css';
import Navbar from './compoents/navbar'
import About from './compoents/about';
import Home from './compoents/home';
import Stock from './compoents/stock';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar title="GitHub finder" icon="fab fa-github" /> 
        <Switch>
          <Route exact path="/"  component={Home}>
          </Route>
          <Route exact path= "/about" component={About} />
          <Route exact path= "/stock" component={Stock} />
        </Switch>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
