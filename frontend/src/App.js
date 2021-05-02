
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import UserSignUp from "./components/UserSignUp";
import Template from './components/delivery/Template'

function App() {
  return (
      <Router>
    <div className="App">

      <Route path = "/signup" exact component = {UserSignUp}/>
      <Route path = "/delivery" exact component = {Template}/>

    </div>
      </Router>
  );
}

export default App;
