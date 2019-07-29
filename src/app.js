import React, { Component } from 'react';
import Items from './items'
import Checkout from './checkout'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom' 

class App extends Component {

  constructor(props){
    super(props);
    this.state={}
  }

  render() {
    return (
      <div className="container">
       <h1 className="text-center">Donate</h1>
          <Router>
            <div>
            <Switch>
              <Route exact path='/' component={Items}/>
              <Route path='/Checkout' component={Checkout}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;