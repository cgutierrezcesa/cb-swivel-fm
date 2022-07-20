import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import Home from './pages/index';
import SWBC from './pages/indexSWBC';
import SigninPage from './pages/signin';
import Express from './pages/expressCheckout';
import { useFlags} from 'launchdarkly-react-client-sdk';
import "./components/Hero/Flags"


function App() {

    const {routeChange} = useFlags()

  return (
    <Router>
      <Switch>

        <Route path='/' component={Home} exact />

        {routeChange ? <Route path='/checkout' component={SigninPage} exact /> : <Route path='/checkout' component={Express} exact />  }

      </Switch>
    </Router>
  );
}

export default App; 
