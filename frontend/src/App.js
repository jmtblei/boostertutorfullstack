import './App.scss';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";
import HomeScreen from './screens/HomeScreen';
import ProductsListScreen from "./screens/ProductsListScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import OrderReviewScreen from "./screens/OrderReviewScreen";
import Footer from "./components/Footer";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <div id="page-container">
      <Router>
        <NavBar click={() => setSideToggle(true)} />
        <SideDrawer show={sideToggle} click={() =>setSideToggle(false)} />
        <Backdrop show={sideToggle} click={() =>setSideToggle(false)} />
        <div id="content-wrap">
          <Switch>
            <Route exact path="/" component={HomeScreen}/>
            <Route exact path="/products" component={ProductsListScreen}/>
            <Route exact path="/product/:id" component={ProductScreen}/>
            <Route exact path="/cart" component={CartScreen}/>
            <Route exact path="/checkout" component={CheckoutScreen}/>
            <Route exact path="/orderreview" component={OrderReviewScreen}/>
          </Switch>
        </div>
      </Router>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
