import React from 'react';
import { robot } from '../defaults';

const Chat = ({ messageList }) => {
	return (
		<div>
			{messageList.map((message) => {
				if (message.sender === robot) {
					return (
						<h4>
							{message.sender}: {message.text}
						</h4>
					);
				} else {
					return <h4 style={{ textAlign: 'right' }}> {message.text} </h4>;
				}
			})}
		</div>
	);
};

export default Chat;
