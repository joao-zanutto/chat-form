import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

const initialValues = {
	firstName: '',
	lastName: '',
	state: '',
	city: '',
	birthDate: '',
	email: '',
	rating: '',
};

let schema = yup.object().shape({
	firstName: yup.string().required(),
	lastName: yup.string().required(),
	state: yup.string().required(),
	city: yup.string().required(),
	birthDate: yup.date(),
	email: yup.string().email(),
	rating: yup.number().min(1).max(5),
});

const properties = Object.keys(initialValues);

const Form = () => {
	const [step, setStep] = useState(0);

	const formik = useFormik({
		initialValues: initialValues,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	const increaseStep = () => {
		schema
			.validateAt(properties[step], formik.values)
			.then(() => {
				setStep(step + 1);
			})
			.catch((err) => {
				alert(err);
			});
	};

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
			}}>
			<input
				autoComplete='off'
				id={properties[step]}
				name={properties[step]}
				type='text'
				onChange={formik.handleChange}
				value={formik.values[properties[step]]}
			/>
			<button onClick={increaseStep} type='button'>
				Enviar
			</button>
			<span> {JSON.stringify(formik.values, null, 2)} </span>
		</form>
	);
};

export default Form;
