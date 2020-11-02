// Material UI
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';

// CSS
import '../css/Chat.css';

const Chat = () => {
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
		</div>
	);
};

export default Chat;
