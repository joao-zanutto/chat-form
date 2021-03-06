export const validationMessages = {
	firstName: {
		required: 'Mas como eu vou conseguir te ajudar se não souber seu nome?',
	},
	lastName: {
		required: 'Poxa, me diga seu sobrenome por favor',
	},
	state: {
		required: 'Vamos lá, só faltam mais alguns dados. Me diga seu estado',
	},
	city: {
		required: 'Estamos quase no final! Me diga sua cidade',
	},
	birthDate: {
		date: 'Ei, essa data não está correta',
	},
	email: {
		required:
			'Todo mundo usa e-mail hoje em dia, não é possível que você não tenha um',
		email: 'Ei, isso não é um e-mail correto, você está tentando me enganar?',
	},
};

export const formFlowMessages = [
	{
		text: (firstName) =>
			'Muito prazer em te conhecer, ' + firstName + ', e como é seu sobrenome?',
	},
	{
		text: (lastName) =>
			lastName +
			' é um sobrenome muito bonito! Em qual estado do país você mora?',
	},
	{
		text: (state) => 'Dizem que é muito bonito aí. E de qual cidade você é?',
	},
	{
		text: (city) => city + ', certo! E qual a data do seu nascimento?',
	},
	{
		text: (date) =>
			'Nossa, que jovem você! Me passa o seu e-mail pra finalizar.',
	},
	{
		text: (email) => 'Agora pode avaliar o meu atendimento por favor?',
	},
	{
		text: (rating) =>
			'Muito obrigado! Agora, clique ou aperte no botão enviar para confirmar o envio das suas informações',
	},
	{
		text: (result) =>
			result === true
				? 'Suas informações foram recebidas com sucesso em nosso servidor'
				: 'Oh não! Houve um problema ao enviar a sua solicitação!',
	},
];
