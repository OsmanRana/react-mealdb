
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Restaurent from './components/Restaurent/Restaurent';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Features from './components/Features/Features';
import Home from './components/Home/Home';
import Details from './components/Details/Details';


function App() {
  return (
    <div className="App">
     
      <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <Home>

            </Home>
          </Route>
          <Route exact path="/home">
            <Home>

            </Home>
          </Route>
          <Route  path="/features">
            <Features>

            </Features>
          </Route>
          <Route path="/restaurent">
            <Restaurent />
          </Route>
          <Route path="/meal/:mealId">
            <Details />
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
