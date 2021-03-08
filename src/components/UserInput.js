import React from 'react';
import RateForm from './RateForm';

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
		display: 'flex',
	},
	input: {
		width: '100%',
		border: '0px',
		outline: 'none',
		fontFamily: 'Roboto',
		fontSize: '16px',
	},
	saveButton: {
		width: '100%',
		padding: '7px',
		borderRadius: '25px',
		border: '0px',
		outline: 'none',
		fontFamily: 'Roboto',
		fontSize: '25px',
		backgroundColor: 'white',
		color: 'black',
		fontWeight: 'bold',
		textShadow: '0px 0.3px 2px black',
		boxShadow: '0px 0px 20px grey',
	},
	sendButton: {
		color: 'black',
	},
};

const UserInput = ({
	properties,
	step,
	handleChange,
	values,
	send,
	submitRating,
	handleSubmit,
}) => {
	return (
		<div style={styles.inputFooter}>
			<div style={styles.inputBaloon}>
				{step < 6 ? (
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
				) : step < 7 ? (
					<RateForm submitRating={submitRating} />
				) : step < 8 ? (
					<button style={styles.saveButton} onClick={handleSubmit}>
						{' '}
						Salvar{' '}
					</button>
				) : null}
				<i
					style={styles.sendButton}
					class='fa fa-send'
					onClick={() => send(step)}></i>
			</div>
		</div>
	);
};

export default UserInput;
