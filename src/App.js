import React from 'react';
import './App.scss';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Container } from '@material-ui/core'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MovieList from './pages/MovieList'
import Header from './components/Header'
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <main>
        <Header />
        <Container maxWidth="lg">
          <Switch>
            <Route path='/movie/:title' component={MovieDetail}></Route>
            <Route path='/' component={MovieList}></Route>
          </Switch>
        </Container>
      </main>
    </BrowserRouter>
  );
}

export default App;
