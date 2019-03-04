import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from "./component/HomePage";
import Checkout from "./component/Checkout";
import ProductPage from "./component/ProductPage";

const App = () => (
  <div>
  <Route path ="/" component={HomePage} />
  <Route path ="/checkout" component={Checkout} />
  <Route path ="/products" component={ProductPage} />
  </div>
);

export default App;
