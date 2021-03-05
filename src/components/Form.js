import React, { useState } from 'react';
import { useFormik } from 'formik';
import Chat from './Chat';
import UserInput from './UserInput';
import {
	initialChat,
	initialValues,
	properties,
	robot,
	schema,
} from '../defaults';

const Form = () => {
	const [lastErrorMessage, setLastErrorMessage] = useState();
	const [step, setStep] = useState(0);
	const [messageList, setMessageList] = useState(initialChat);

	const formik = useFormik({
		initialValues: initialValues,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

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
				pushMessage(sending, 'E qual seu sobrenome?');
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
			style={{
				backgroundColor: '#19DFA5',
				display: 'flex',
				flexDirection: 'column',
			}}
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
		</form>
	);
};

export default Form;
