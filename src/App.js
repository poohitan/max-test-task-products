import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import {
  Nav,
  Anchor,
  Box,
} from 'grommet';
import {
  List,
  Add,
} from 'grommet-icons';

import ListProductsPage from './features/products/pages/index';
import EditProductPage from './features/products/pages/edit';
import ViewProductPage from './features/products/pages/view';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav direction="row" background="brand" pad="medium">
          <Link to="/">
            <Anchor icon={<List />} label="Product List" />
          </Link>
          <Link to="/products/new">
            <Anchor icon={<Add />} label="Add Product" />
          </Link>
        </Nav>

        <Box direction="column" pad="medium">
          <Switch>
            <Route path="/" exact>
              <ListProductsPage />
            </Route>
            <Route path="/products/new" exact>
              <EditProductPage />
            </Route>
            <Route path="/products/:id/edit" exact>
              <EditProductPage />
            </Route>
            <Route path="/products/:id" exact>
              <ViewProductPage />
            </Route>
          </Switch>
        </Box>
      </Router>
    </div>
  );
}

export default App;
