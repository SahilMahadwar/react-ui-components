import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import ButtonPage from './routes/ButtonPage';

const App = () => {
  return (
    <Router>
      <Route path="/button" exact component={ButtonPage} />
    </Router>
  );
};

export default App;
