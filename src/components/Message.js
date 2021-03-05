import React from 'react';
import { robot } from '../defaults';

const styles = {
	robotBaloon: {
		backgroundColor: 'white',
		padding: 10,
		paddingLeft: 30,
		margin: 15,
		borderRadius: 30,
		borderTopLeftRadius: 0,
	},
	userBaloon: {
		backgroundColor: 'white',
		padding: 10,
		paddingRight: 30,
		margin: 15,
		borderRadius: 30,
		textAlign: 'right',
		borderTopRightRadius: 0,
	},
	header: {
		marginTop: 5,
		marginBottom: 10,
	},
};

const Message = ({ message }) => {
	return (
		<div
			style={message.sender === robot ? styles.robotBaloon : styles.userBaloon}>
			<h4 style={styles.header}>{message.sender}</h4>
			<span> {message.text} </span>
		</div>
	);
};

export default Message;
