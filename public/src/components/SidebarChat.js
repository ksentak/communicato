import '../css/SidebarChat.css';

// Material UI
import { Avatar } from '@material-ui/core';

const SidebarChat = () => {
	return (
		<div className="sidebarChat">
			<Avatar />
			<div className="sidebarChat-info">
				<h2>Room name</h2>
				<p>This is the last message </p>
			</div>
		</div>
	);
};

export default SidebarChat;
