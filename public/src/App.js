// Imports
import { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
// Components
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
// Utils
import axios from './utils/API';
// CSS
import './css/App.css';

const App = () => {
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		axios.get('/api/v1/messages/sync').then((res) => {
			setMessages(res.data);
		});
	}, []);

	useEffect(() => {
		const pusher = new Pusher(process.env.REACT_APP_PUSHER, {
			cluster: 'us2'
		});

		const channel = pusher.subscribe('messages');
		channel.bind('inserted', (data) => {
			alert(JSON.stringify(data));
		});
	}, []);

	console.log(messages);

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
