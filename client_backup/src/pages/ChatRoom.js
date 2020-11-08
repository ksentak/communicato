// Imports
import { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
// Components
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';
// Utils
import axios from '../utils/API';
// CSS
import '../css/ChatRoom.css';

const ChatRoom = (props) => {
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
		channel.bind('inserted', (newMessage) => {
			setMessages([...messages, newMessage]);
		});

		return () => {
			channel.unbind_all();
			channel.unsubscribe();
		};
	}, [messages]);

	// console.log(messages);

	return (
		<div className='chatRoom'>
			<div className='chatRoom-body'>
				<Sidebar />
				<Chat messages={messages} />
			</div>
		</div>
	);
};

export default ChatRoom;
