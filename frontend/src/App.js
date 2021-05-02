
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import UserSignUp from "./components/UserSignUp";
import Template from './components/delivery/Template'
import Login from "./components/Login";

function App() {
  return (
      <Router>
    <div className="App">

      <Route path = "/signup" exact component = {UserSignUp}/>
      <Route path = "/delivery" exact component = {Template}/>
      <Route path = "/login" exact component = {Login}/>

    </div>
      </Router>
  );
}

export default App;
