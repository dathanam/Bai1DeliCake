import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DeliUser from './LayoutUser';
import DeliAdmin from './LayoutAdmin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={DeliUser} />
        <Route path="/admin" component={DeliAdmin} />
      </Switch>
    </Router>

  );
}

export default App;
