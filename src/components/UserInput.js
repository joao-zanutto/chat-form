import React from 'react'

const UserInput = ({properties, step, handleChange, values, send}) => {
    return (
			<div>
				<input
					autoComplete='off'
					id={properties[step]}
					name={properties[step]}
					type='text'
					onChange={handleChange}
					value={values[properties[step]]}
				/>
				<button onClick={() => send(step)} type='button'>
					Enviar
				</button>
			</div>
		);
}

export default UserInput
