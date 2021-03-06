import { useState } from 'react';
import axios from '../utils/API';
// Material UI
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

// CSS
import '../css/Chat.css';

const Chat = ({ messages }) => {
	const [input, setInput] = useState('');

	const sendMessage = async (e) => {
		e.preventDefault();

		await axios.post('/api/v1/messages/new', {
			name: 'Keaton',
			message: input,
			timestamp: '11/02/2020',
			received: false
		});

		setInput('');
	};

	return (
		<div className='chat'>
			<div className='chat-header'>
				<Avatar />
				<div className='chat-headerInfo'>
					<h3>Room name</h3>
					<p>Last seen at...</p>
				</div>

				<div className='chat-headerIcons'>
					<IconButton>
						<SearchOutlined />
					</IconButton>
					<IconButton>
						<AttachFile />
					</IconButton>
					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
			</div>

			<div className='chat-body'>
				{messages.map((message) => (
					<p
						className={`chat-message ${!message.received && 'chat-sent'}`}
						key={message._id}
					>
						<span key={`nameId${message._id}`} className='chat-name'>
							{message.name}
						</span>
						{message.message}
						<span key={`messageId${message._id}`} className='chat-timestamp'>
							{message.timestamp}
						</span>
					</p>
				))}
			</div>

			<div className='chat-footer'>
				<InsertEmoticonIcon />
				<form>
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder='Type a message'
						type='text'
					/>
					<button onClick={sendMessage} type='submit'>
						Send a message
					</button>
				</form>
				<MicIcon />
			</div>
		</div>
	);
};

export default Chat;
