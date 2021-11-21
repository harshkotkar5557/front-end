import './App.css';
import Navbar from './compoents/navbar'
import About from './compoents/about';
import Home from './compoents/home';
import Bill from './compoents/Bill';
import Stock from './compoents/Stock';
import Customer from './compoents/Customer';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/"  component={Home}>
          </Route>
          <Route exact path="/stock" component={Stock} />
          <Route exact path= "/customer" component={Customer} />
          <Route exact path= "/about" component={About} />
          <Route exact path= "/bill" component={Bill} />
        </Switch>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
