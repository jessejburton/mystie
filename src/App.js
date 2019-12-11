import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Layout from './layout/Layout'
import Dashboard from './pages/Dashboard'
import Plan from './pages/Plan'
import Tasks from './pages/Tasks'
import Invoices from './pages/Invoices'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/plans" component={Plan} />
          <Route path="/tasks" component={Tasks} />
          <Route path="/invoices" component={Invoices} />
        </Switch>
      </Layout>
    </Router >
  );
}

export default App;
