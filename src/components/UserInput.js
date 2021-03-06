import React from 'react';

const styles = {
	inputFooter: {
		width: '100%',
		position: 'fixed',
		bottom: 0,
		backgroundColor: '#4CAF50',
		boxShadow: '0px -1px 6px #111111',
	},
	inputBaloon: {
		backgroundColor: 'white',
		padding: 20,
		paddingRight: 30,
		margin: 15,
		marginRight: '12%',
		borderRadius: 30,
		borderTopRightRadius: 0,
		width: '60%',
		float: 'right',
		textAlign: 'left',
		boxShadow: '-1px 2px 5px #111111',
	},
	input: {
		width: '100%',
		border: '0px',
		outline: 'none',
		fontFamily: 'Roboto',
		fontSize: '18px',
	},
};

const UserInput = ({ properties, step, handleChange, values, send }) => {
	return (
		<div style={styles.inputFooter}>
			<div style={styles.inputBaloon}>
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
