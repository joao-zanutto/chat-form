# React Chat Form

Essa é uma aplicação desenvolvida em ReactJS com a ultilização de apenas 3 bibliotecas:

- Formik para controle e manutenção de estado dos dados do formulário
- Yup para validação dos dados
- Axios para realizar a requisição POST ao mock API

## Preview

![image](https://user-images.githubusercontent.com/11475695/110256988-9061d380-7f7a-11eb-8ba7-012c2c058f33.png)

- Aplicação de formulário estilo chat
- Responsiva, tendo design adaptável ao tamanho da tela do usuário
- Desacoplada, tendo regras de negócio separadas da aplicação
- Expasível, sendo que são necessarias poucas modificações para adicionar mais campos ao formulário

## Componentes

A aplicação é formada pela seguinte estrutura de componentes

```
- App > contém o form
  - Form > contém os dados, os componentes funcionais e distribui os dados e funções de alteração de estado entre eles
    - Header > componente visual que mocka o header de uma aplicação de chat
    - Chat > recebe a lista de mensagens e renderiza na tela
      - Message > componente atômico da mensagem; recebe um objeto composto por remetente e texto
      - Message     e exibe essa mensagem na tela; também mocka o visual para input vazio do usuário
      - ...
    - User Input > componente que recebe um estado com o passo corrente e os "campos" do formulário
      - inputs        para serem atualizados conforme o usuário vai interagindo com a aplicação;
      - RateForm > componente com estrelas que retorna o valor para o User Input de acordo com o clique do usuário


- defaults > possui os valores defaults para os intial values do form e outras variáveis usadas por todo código (como o robot)
- messages > possui as mensagens do robô, tanto de fluxo do formulário, quanto de erro que são usadas na validação das entradas
```
