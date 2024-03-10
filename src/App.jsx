import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard'
import Navbar from './component/Navbar/Navbar'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
