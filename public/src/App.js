import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
// CSS
import './css/App.css';

const App = () => {
	return (
		<div className='App'>
			<div className='app-body'>
				<Sidebar />
				<Chat />
			</div>
		</div>
	);
};

export default App;
