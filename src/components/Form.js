import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Chat from './Chat';
import UserInput from './UserInput';

const initialValues = {
	firstName: '',
	lastName: '',
	state: '',
	city: '',
	birthDate: '',
	email: '',
	rating: '',
};

let errorMessages = {
	firstName: {
		required: 'Mas como eu vou conseguir te ajudar se não souber seu nome?',
	},
	lastName: {
		required: 'Poxa, me diga seu sobrenome por favor',
	},
	state: {
		required: 'Vamos lá, só faltam mais alguns dados. Me diga seu estado'
	},
	city: {
		required: ''
	}
};

let schema = yup.object().shape({
	firstName: yup.string().required(errorMessages.firstName.required),
	lastName: yup.string().required(errorMessages.lastName.required),
	state: yup.string().required(),
	city: yup.string().required(),
	birthDate: yup.date(),
	email: yup.string().email(),
	rating: yup.number().min(1).max(5),
});

const properties = Object.keys(initialValues);

const Form = () => {
	const [lastErrorMessage, setLastErrorMessage] = useState();
	const [step, setStep] = useState(0);
	const [messageList, setMessageList] = useState([
		{
			sender: 'Robot',
			text: 'Olá, eu sou o Robô, qual seu nome?',
		},
	]);

	const formik = useFormik({
		initialValues: initialValues,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	const increaseStep = () => {
		setStep(step + 1);
	};

	const pushMessage = (sending, receiving) => {
		const tempList = [
			...messageList,
			{ sender: 'User', text: sending },
			{ sender: 'Robot', text: receiving },
		];
		setMessageList(tempList);
	};

	const send = (step) => {
		const sending = formik.values[properties[step]];
		schema
			.validateAt(properties[step], formik.values)
			.then(() => {
				pushMessage(sending, 'E qual seu sobrenome?');
				increaseStep();
			})
			.catch((err) => {
				if (lastErrorMessage !== err.message) {
					pushMessage(sending, err.message);
					setLastErrorMessage(err.message);
				}
			});
	};

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
			}}>
			<Chat messageList={messageList} />
			<UserInput
				properties={properties}
				step={step}
				handleChange={formik.handleChange}
				values={formik.values}
				send={send}
			/>
			<span> {JSON.stringify(formik.values, null, 2)} </span>
		</form>
	);
};

export default Form;
