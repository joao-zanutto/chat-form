import Message from './Message';

const styles = {
	chat: {
		padding: 20,
		display: 'flex',
		flexDirection: 'column',
	},
};

const Chat = ({ messageList }) => {
	return (
		<div style={styles.chat}>
			{messageList.map((message) => {
				return <Message message={message} />;
			})}
		</div>
	);
};

export default Chat;
