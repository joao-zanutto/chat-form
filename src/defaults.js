import { validationMessages } from './messages';
import * as yup from 'yup';

export const initialValues = {
	firstName: '',
	lastName: '',
	state: '',
	city: '',
	birthDate: '',
	email: '',
	rating: '',
};

export const properties = Object.keys(initialValues);

export const schema = yup.object().shape({
	firstName: yup.string().required(validationMessages.firstName.required),
	lastName: yup.string().required(validationMessages.lastName.required),
	state: yup.string().required(validationMessages.state.required),
	city: yup.string().required(validationMessages.city.required),
	birthDate: yup.date(validationMessages.birthDate.date),
	email: yup
		.string()
		.required(validationMessages.email.required)
		.email(validationMessages.email.email),
	rating: yup.number().min(1).max(5),
});

export const robot = 'Robot';

export const initialChat = [
	{
		sender: robot,
		text: 'Olá, eu sou o Robô, qual seu nome?',
	},
];
