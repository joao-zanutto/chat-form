import React from 'react';

const Chat = ({ messageList }) => {
	return (
		<div>
			{messageList.map((message) => {
				return (
					<h4>
						{message.sender}: {message.text}
					</h4>
				);
			})}
		</div>
	);
};

export default Chat;
