import React from 'react';
import { robot } from '../defaults';

export const baloon = {
	backgroundColor: 'white',
	padding: 20,
	margin: 15,
	borderRadius: 30,
	minWidth: 100,
	maxWidth: 500,
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
		fontFamily: 'Roboto',
		textShadow: '0px 0.1px 1px',
		marginTop: 5,
		marginBottom: 10,
		color: '#212121',
		fontSize: '20px',
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
				<p style={{ fontFamily: 'Roboto', color: '#666666', fontSize: '16px' }}>
					{' '}
					{message.text === '' ? '...' : message.text}{' '}
				</p>
			</div>
		</div>
	);
};

export default Message;
