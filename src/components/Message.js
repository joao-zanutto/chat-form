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
		maxWidth: 800,
		minWidth: 300,
		boxShadow: '1px 3px 1px #9E9E9E',
	},
	userBaloon: {
		backgroundColor: 'white',
		padding: 10,
		paddingRight: 30,
		margin: 15,
		borderRadius: 30,
		borderTopRightRadius: 0,
		minWidth: 300,
		maxWidth: 800,
		float: 'right',
		textAlign: 'right',
		boxShadow: '1px 3px 1px #9E9E9E',
	},
	header: {
		marginTop: 5,
		marginBottom: 10,
	},
};

const Message = ({ message }) => {
	return (
		<div style={{ width: '100%' }}>
			<div
				style={
					message.sender === robot ? styles.robotBaloon : styles.userBaloon
				}>
				<h4 style={styles.header}>{message.sender}</h4>
				<span> {message.text} </span>
			</div>
		</div>
	);
};

export default Message;
