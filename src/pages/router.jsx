import {  Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { Product } from './Produto';

export function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/produto" component={Product} /> 
    </Switch>
  )
}