import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import AddUserContainer from './containers/AddUserContainer';
import ChatContainer from './containers/ChatContainer';

class App extends Component {
	render() {
		return (
			<Router>
			<React.Fragment>
				<Route exact path="/" component={AddUserContainer} />
				<Route exact path="/chat/:name" component={ChatContainer} />
			</React.Fragment>
			</Router>
		);
	}
}

export default App;

