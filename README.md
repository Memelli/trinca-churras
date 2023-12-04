# O que deve ser feito

## Cadastro do usuário (US 01)

O usuário terá um cadastro simples com email, nome e senha

```javascript
{
  name: string;
  email: string;
  password: hash(256);
}
```

## Criar um churras (US 02)

- Local
- Data
- Nome do churras
- Valor incluso bebida
- Valor sem bebida
- Convidados

Convidados -> nome, valor a ser pago, se foi pago ou não

Quando for criar um churrasco, enviar o seguinte objeto:

```javascript
{
    local: string,
    bbqName: string,
    date: Date,
    maximunValue: number,
    minimunValue: number,
    guests: Guest[],
}
```

## Usuários convidados (US 03)

Quando um usuário for convidado para o churrasco, validar se o usuário já tem cadastro na plataforma, se tiver cadastro enviar email notificando que houve um novo convite ao usuário, caso não seja cadastrado, enviar um email convite e cadastro.

```javascript
{
  name: string;
  email: string;
  paymentValue: number;
  isPaid: number;
}
```

## Usuário aceitou o convite (US 04)

Quando o usuário aceitar o convite que foi recebido via email, enviar ele para uma rota de aceitação de convite com o id do churrasco.

Usuário clica no link -> Redirecionado para a rota /churras/aceitar/[id] -> Caso o usuário não seja cadastrado, mostrar modal de cadastro

## Editar o churras (US 05)

Para editar o churrasco não será necessário redirecionar o usuário para uma página nova, isso pode ser feito dentro de uma modal.

# Como realizar

## US 01

Quando o usuário entrar pela primeira vez na plataforma, ele não terá uma autenticação, e será exibido a página de login. Dentro da página de login, terá um botão escrito "Registrar".

Ao clicar nesse botão irá abrir uma modal de cadastro, onde o usuário poderá digitar as suas informações (nome, email e senha).

Essa modal fará uma requisição para o endpoint de criar o usuário.

A resposta do cadastro será um toast, em caso de sucesso o usuário será redirecionado para a página principal.

## US 02

Na página principal, o usuário deverá ser capaz de visualizar e clicar em um botão com o texto de "Criar Churras".

Ao clicar nesse botão, uma modal irá aparecer possibilitando que o usuário digite as informações necessárias para se criar um churrasco.

Ao clicar em enviar, será feita uma requisição para o endpoint de criar churrasco, que em caso de sucesso cria o churrasco e envia os emails de convite para os convidados.

A resposta da criação será um toast, em caso de sucesso o usuário será redirecionado para a página de detalhes do churrasco.

## US 03

Ao criar um churras, teremos uma lista de convidados com e-mail de cada um, no endpoint de criação teremos uma função para enviar email de convite para cada usuário.

O e-mail de convite deve conter as seguintes informações:

- Nome do evento
- Dia
- Pessoa que está organizando
- Valores de pagamento (máximo e minimo)
- Botão com link para aceitação do convite

O link deve conter o id do churras, e redirecionar o usuário para a tela de aceitação.

## US 04

Ao aceitar o convite, será feita uma validação se o convidado já é cadastrado na plataforma, caso não seja, realizar o cadastro.

Na tela de detalhes do churras, informar possíveis métodos de pagamento.

## US 05

O usuário (criador do churrasco) poderá editar o churras a partir de uma modal que poderá ser aberta na pagina de detalhes ou na lista de todos os churrascos
