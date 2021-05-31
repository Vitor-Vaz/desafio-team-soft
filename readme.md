## <p style="text-align: center; font-size: 1.5rem; "> Desafio Team Soft </p>

<br>

---

##    Proposta 

<br>

  Criar uma API que faz operações CRUD's de clientes e endereços com um banco de dados integrado para persistência dos dados. Inclui também funcionalidades extras, como validação dos campos pela própria API e calculo da latitude e longitude, com base no endereço que o usuario coloca (apenas visualização).

---

![JavaScript](https://img.shields.io/badge/-Javascript-black?style=for-the-badge&logo=javascript)
![Express](https://img.shields.io/badge/-Express-242424?style=for-the-badge&logo=express&logoColor=e82c2f)
![Nodejs](https://img.shields.io/badge/-Nodejs-339933?style=for-the-badge&logo=Node.js&logoColor=ffffff)
![MongoBD](https://img.shields.io/badge/-Mongodb-116149?style=for-the-badge&logo=mongodb&logoColor=ffffff)

<br>

 ## Como instalar? 

<br>

- Com a pasta do programa já em seu computador, abra o terminal integrado do VS Code dentro da pasta do projeto (API-teamSoft).


- Rode o seguinte comando no terminal do VSCode e ele irá baixar todas as dependencias necessarias para que a API rode sem intercorrencias.

``` 
npm install
```
- Certifique-se de que tenha o MongoDB instalado em seu computador e que ele esteja ativo no momento.

- Após isso, a porta na qual o servidor está configurada no arquivo "server.js" na pasta raiz pela porta 8000, caso queira mudar, é só mudar a variavel port da linha 4.

- Rode o comando no console e o servidor ficará ligado e pronto para utilizar as CRUD's.

``` 
npm start
```

<br>
<br>


<strong><p style="text-align: center; font-size: 1.7rem; "> Rotas disponiveis </p> </strong>

---

<br>

- Listar todos os clientes:
```
  GET:  '/client'
```
- Resultado:

``` json

[
  {
    "_id": "6090b780e441067d0248fab5",
    "nameContact": "Joelma Cruz",
    "cnpj": 42973246000190,
    "socialName": "Estrela Produções",
    "contactNumber": 98981739773,
    "__v": 0
  },
  {
    "_id": "6090d04aee1ccbab2912f096",
    "nameContact": "Gilberto Souza",
    "cnpj": 50626677000108,
    "socialName": "Padaria da Rua 10",
    "contactNumber": 31925746924,
    "__v": 0
  }
]
```

<br>

---

<br>

- Listar um cliente pelo id:
```
GET:'/client/:id' 
```
 - Resultado

``` json
{
  "_id": "609364db9f28689a93b61e33",
  "nameContact": "Maicon Larcerda",
  "cnpj": 80049210000103,
  "socialName": "Pastelaria Lacerda's",
  "contactNumber": 21994489670,
  "__v": 0
}
```

<br>

---

<br>

- Criando um cliente:



``` 
POST: /client
```

<br>

- Campos aceitos:
```
nameContact: String,
cnpj: Numbers,
socialName: String,
contactName: Numbers
```
<span style="color: red"> Todos os campos devem ser preennchidos no formato correto e não podem ficar em branco!</span>

<br>

---

<br>

- Editando um cliente pelo id:

``` 
PUT: /client/:id
```

<br>

- Campos aceitos:
```
nameContact: String,
cnpj: Numbers,
socialName: String,
contactName: Numbers
```
<span style="color: red"> Todos os campos devem ser preennchidos no formato correto e não podem ficar em branco!</span>

---

<br>

- Deletando um cliente pelo id:
- Passe apenas o id dele pelo link


``` 
DELETE: /client/:id
```

<br>

---


<br>

- Listar todos os endereços:


```
- GET: '/address' 
```
<br>

- Resultado
``` json
[
  {
    "_id": "6092e0b5ac7db1490b32eadb",
    "log": "Avenida Chile",
    "number": "500",
    "district": "Centro",
    "city": "Rio de Janeiro",
    "state": "RJ",
    "complement": "Edificio",
    "lat": "-22.9096007",
    "lng": "-43.1825781",
    "__v": 0,
    "code": "20031170"
  },
  {
    "_id": "60936e7a7cd751a7f1d06c0a",
    "log": "Ru Oscar de Souza",
    "number": "252",
    "district": "Santissimo",
    "city": "Rio de Janeiro",
    "state": "RJ",
    "lat": "-22.8775893",
    "lng": "-43.5099133",
    "__v": 0,
    "code": "23094080"
  },
]
```
<br>

---

<br>

- Listar um endereço pelo id:

```
GET: '/address/:id'
```

<br>

- Resultado:

``` json
  {
    "_id": "60936e7a7cd751a7f1d06c0a",
    "log": "Ru Oscar de Souza",
    "number": "252",
    "district": "Santissimo",
    "city": "Rio de Janeiro",
    "state": "RJ",
    "lat": "-22.8775893",
    "lng": "-43.5099133",
    "__v": 0,
    "code": "23094080"
  }
```

---

<br>

- Criando um endereço:



``` 
POST: /address
```

<br>

- Campos aceitos:
```
log: String,
number: Number,
district: String,
city: Number,
state: String,
code: Number,
```
<span style="color: red"> Todos os campos devem ser preennchidos no formato correto e não podem ficar em branco, exceto pelo complement.</span>

<br>

---


<br>


- Editando um endereço pelo id:



``` 
PUT: /address/:id
```

<br>

- Campos aceitos:
```
log: String,
number: Number,
district: String,
city: Number,
state: String,
code: Number,
```
<span style="color: red"> Todos os campos devem ser preennchidos no formato correto e não podem ficar em branco, exceto pelo complement.</span>

<br>

---

<br>

- Deletando um endereço pelo id:
- Passe apenas o id dele pelo link


``` 
DELETE: /address/:id
```

<br>
<br>



<strong><p style="text-align: center; font-size: 1.7rem; "> Validações </p> </strong>


---
<br>
A API tambem conta com um sistema de validação dos campos para verificar se eles estão corretamente preenchidos, caso não cumpra as regras, ele retorna com um log de erro dizendo onde foi inserido um dado de forma incorreta, segue abaixo alguns exemplos:

<br>
<br>

- Caso os campos obrigatórios estejam vazios:

```json
{
  "value": "",
  "msg": "O preenchimento desse campo é obrigatório",
  "param": "nameContact",
  "location": "body"
}
```
<br>

- Formato pedido seja numero porém recebeu String:

```json
{
  "value": "a",
  "msg": "Esse campo deve ser apenas numeros",
  "param": "contactNumber",
  "location": "body"
}
```

<br>

- Os campos CNPJ, code e contactNumber aceitam APENAS NUMEROS e é verificado tambem se a quantidade de digitos bate com o que deve ser inserido. Os numeros de telefone precisam ser DDD + digito + numero, segue um exemplo de retorno de erro:

```json
{
  "value": 99448970,
  "msg": "Coloque o numero com ddd e o digito 9",
  "param": "contactNumber",
  "location": "body"
}
```

<br>

- O campo complement da tabela address é OPCIONAl, caso não o preencha na hora de inserir, a tabela ficará sem essa coluna, caso faça a edição e adicione ele será inserido normalmente, e o contrário tambem.

- Os campos lat e lng da tabela Address são gerados automaticamente através do consumo da API Geocode, entretanto, a key utilizada é temporária, é recomendável que acesse o link https://developers.google.com/maps/documentation/geocoding/overview onde será redirecionado para criar sua própria key, que pode ser editada através de um arquivo .env e colocando o valor da key na variavel de ambiente, verifique o arquivo .envexample.

- As colunas lat e lng SÂO APENAS para visualização, se o usuario tentar inserir manualmente, tanto nas rotas POST ou PUT, nada acontecerá.

- O campo number da tabela address aceita apenas strings, o motivo dessa escolha é que alguns identificadores de logradouro não são apenas numeros, por exemplo, "Lote 7" ou "Quadra 4" e a API Geocode precisa que esse dado chegue como uma string para que a consulta seja feita sem problemas.

---

<br>

## Bibliotecas utilizadas

- Express.
- Express-validator.
- Mongoose.
- Node-fetch.
- Nodemon.