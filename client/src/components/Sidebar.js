import { useState, useEffect } from 'react';
import axios from '../utils/API';
// Components
import SidebarChat from './SidebarChat';
// Material UI
import { Avatar, IconButton } from '@material-ui/core';
// Icons
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
// CSS
import '../css/Sidebar.css';

const Sidebar = () => {
	const [rooms, setRooms] = useState([]);
	useEffect(() => {
		axios
			.get('/api/v1/rooms/all')
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className='sidebar'>
			<div className='sidebar-header'>
				<Avatar />
				<div className='sidebar-icons'>
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
				<div className='sidebar-avatar'></div>
			</div>

			<div className='sidebar-search'>
				<div className='sidebar-search-container'>
					<SearchOutlined />
					<input placeholder='Search or start new chat' type='text' />
				</div>
			</div>

			<div className='sidebar-chat'>
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
			</div>
		</div>
	);
};

export default Sidebar;
