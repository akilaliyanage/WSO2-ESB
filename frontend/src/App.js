
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import UserSignUp from "./components/authentications/UserSignUp";
import Template from './components/delivery/Template'
import Login from "./components/authentications/Login";
import Dashboard from "./components/seller/DashBoard";
import AdminTemplate from './components/delivery/delivery_admin/AdminTemplate'
import AddItem from "./components/seller/AddItem";
import LandingPage from "./components/BuyerPages/LandingPage";
import ProductsPage from "./components/BuyerPages/ProductsPage";
import UpdateItem from "./components/seller/UpdateItem";
import CardPayment from "./components/Payment/CardPayment";



function App() {
  return (
      <Router>
    <div className="App">

      <Route path = "/signup" exact component = {UserSignUp}/>
      <Route path = "/delivery" exact component = {Template}/>
      <Route path = "/login" exact component = {Login}/>
      <Route path = "/seller" exact component = {Dashboard}/>
      <Route path = "/del-admin" exact component = {AdminTemplate}/>
      <Route path = "/add-item" exact component = {AddItem}/>
      <Route path = "/" exact component = {LandingPage}/>
      <Route path = "/products" exact component = {ProductsPage}/>
      <Route path = "/update-item/:itemID" exact component = {UpdateItem}/>
      <Route path = "/CardPayment" exact component = {CardPayment}/>

    </div>
      </Router>
  );
}

export default App;
