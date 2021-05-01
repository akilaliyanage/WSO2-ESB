
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import UserSignUp from "./components/UserSignUp";

function App() {
  return (
      <Router>
    <div className="App">

      <Route path = "/signup" exact component = {UserSignUp}/>

    </div>
      </Router>
  );
}

export default App;
