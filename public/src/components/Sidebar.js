// Material UI
import { Avatar, IconButton } from '@material-ui/core';

// Icons
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';

// CSS
import '../css/Sidebar.css';

const Sidebar = () => {
	return (
		<div className="Sidebar">
			<div className="sidebar-header">
				<Avatar />
				<div className="sidebar-icons">
					<IconButton>
						<DonutLargeIcon />
					</IconButton>
					<IconButton>
						<ChatIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
				<div className="sidebar-avatar"></div>
			</div>
		</div>
	);
};

export default Sidebar;
