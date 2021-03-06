import React, { useState } from 'react';
import { useFormik } from 'formik';
import Chat from './Chat';
import UserInput from './UserInput';
import { initialChat, initialValues, properties, robot } from '../defaults';
import Header from './Header';
import { formFlowMessages, validationMessages } from '../messages';
import * as yup from 'yup';
import axios from 'axios';

const schema = yup.object().shape({
	firstName: yup.string().required(validationMessages.firstName.required),
	lastName: yup.string().required(validationMessages.lastName.required),
	state: yup.string().required(validationMessages.state.required),
	city: yup.string().required(validationMessages.city.required),
	birthDate: yup.date(validationMessages.birthDate.date),
	email: yup
		.string()
		.required(validationMessages.email.required)
		.email(validationMessages.email.email),
});

const styles = {
	Form: {
		minHeight: '100vh',
		backgroundColor: '#DCEDC8',
		display: 'flex',
		flexDirection: 'column',
	},
};

const Form = () => {
	const [lastErrorMessage, setLastErrorMessage] = useState();
	const [step, setStep] = useState(0);
	const [messageList, setMessageList] = useState(initialChat);
	const [rating, setRating] = useState();

	const formik = useFormik({
		initialValues: initialValues,
		onSubmit: (values) => {
			const payload = { ...values, rating: rating };
			axios
				.post('https://6043744aa20ace001728e18b.mockapi.io/users', payload)
				.then((result) => {
					if (result.status >= 200 && result.status < 300)
						pushMessage('', formFlowMessages[step].text(true));
					else pushMessage('', formFlowMessages[step].text(false));
					setStep(step + 1);
				});
		},
	});

	const submitRating = (rating) => {
		setRating(rating);
		pushMessage(rating, formFlowMessages[step].text(rating));
		setStep(step + 1);
	};

	const pushMessage = (sending, receiving) => {
		const tempList = [
			...messageList,
			{ sender: formik.values.firstName, text: sending },
			{ sender: robot, text: receiving },
		];
		setMessageList(tempList);
		window.scrollTo(0, document.body.scrollHeight);
	};

	const send = (step) => {
		const sending = formik.values[properties[step]];
		schema
			.validateAt(properties[step], formik.values)
			.then(() => {
				pushMessage(
					sending,
					formFlowMessages[step].text(formik.values[properties[step]]) // Bizzarro!
				);
				setStep(step + 1);
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
			style={styles.Form}
			onSubmit={(e) => {
				e.preventDefault();
			}}>
			<Header />
			<Chat messageList={messageList} />
			<UserInput
				properties={properties}
				step={step}
				handleChange={formik.handleChange}
				values={formik.values}
				send={send}
				submitRating={submitRating}
				handleSubmit={formik.handleSubmit}
			/>
		</form>
	);
};

export default Form;
