export const initialValues = {
	firstName: '',
	lastName: '',
	state: '',
	city: '',
	birthDate: '',
	email: '',
};

export const properties = Object.keys(initialValues);

export const robot = 'Robot';

export const initialChat = [
	{
		sender: robot,
		text:
			'Olá, eu sou o ' +
			robot +
			' e estou aqui para te ajudar a realizar o cadastra na super empresa! Primeiramente, qual o seu nome?',
	},
];
