// Imports
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Pages
import Auth from './pages/Auth';
import ChatRoom from './pages/ChatRoom';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Auth} />
				<Route exact path='/chatroom' component={ChatRoom} />
			</Switch>
		</Router>
	);
};

export default App;
