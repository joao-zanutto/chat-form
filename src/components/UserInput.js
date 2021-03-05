import React from 'react';

const styles = {
	userBaloon: {
		backgroundColor: 'white',
		padding: 10,
		paddingRight: 30,
		margin: 15,
		borderRadius: 30,
		borderTopRightRadius: 0,
		width: 300,
		float: 'right',
		textAlign: 'right',
		boxShadow: '1px 3px 1px #9E9E9E',
	},
	input: {
		width: '100%',
	},
};

const UserInput = ({ properties, step, handleChange, values, send }) => {
	return (
		<div style={{ width: '100%' }}>
			<div style={styles.userBaloon}>
				<input
					style={styles.input}
					autoComplete='off'
					id={properties[step]}
					name={properties[step]}
					type={properties[step] === 'birthDate' ? 'date' : 'text'}
					onChange={handleChange}
					value={values[properties[step]]}
					onKeyPress={(e) => (e.key === 'Enter' ? send(step) : null)}
					placeholder="Pressione 'Enter' para enviar"
				/>
			</div>
		</div>
	);
};

export default UserInput;
