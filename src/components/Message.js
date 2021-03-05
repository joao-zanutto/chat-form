import React from 'react';
import { robot } from '../defaults';

export const baloon = {
	backgroundColor: 'white',
	padding: 10,
	margin: 15,
	borderRadius: 30,
	maxWidth: 800,
	minWidth: 300,
	boxShadow: '1px 5px 10px #9E9E9E',
};

const styles = {
	baloon: baloon,
	robotBaloon: {
		...baloon,
		paddingLeft: 30,
		borderTopLeftRadius: 0,
	},
	userBaloon: {
		...baloon,
		paddingRight: 30,
		borderTopRightRadius: 0,
		float: 'right',
		textAlign: 'right',
	},
	header: {
		marginTop: 5,
		marginBottom: 10,
	},
};

const Message = ({ message }) => {
	return (
		<div>
			<div
				style={
					message.sender === robot ? styles.robotBaloon : styles.userBaloon
				}>
				<h4 style={styles.header}>
					{message.sender === '' ? 'Usuário' : message.sender}
				</h4>
				<span> {message.text === '' ? '...' : message.text} </span>
			</div>
		</div>
	);
};

export default Message;
