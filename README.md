
# Promises

## Try/catch/finally
Tempo estimado: 40 minutos

As declarações **try...catch** marcam um bloco de declarações para testar (**try**), e especifica uma resposta, caso uma exceção seja lançada.

A declaração try consiste  em um bloco try, que contém uma ou mais declarações, e ao menos uma cláusula catch  ou uma cláusula finally,  ou ambas. Ou seja, há 3 formas de declarações try :

1. try...catch
2. try...finally
3. try...catch...finally

Uma cláusula **catch** contém declarações que especificam o que fazer caso uma exceção seja lançada no bloco **try**. Ou seja, se você quer que o bloco **try** tenha êxito, e caso não tenha, você quer que o controle passe para o bloco **catch**. Caso qualquer declaração dentro do bloco **try**  (ou em uma função chamada no interior do bloco **try**) lançar uma exceção o controle imediatamente muda para a cláusula **catch**. Se nenhuma exceção for lançada no bloco **try** a cláusula **catch** é ignorada.

A cláusula **finally** é executada após a excecução do bloco **try** e da(s) cláusula(s) **catch** porém antes das declarações seguintes ao **try**. Ela sempre é executada, independente se uma exceção for lançada ou capturada.

Você pode aninhar uma ou mais declarações **try**. Caso uma declaração **try** interior não tenha uma cláusula **catch**, a cláusula **catch** pertencente a declaração **try** que a envolve é introduzida. 

### Cláusulas catch condicionais
Você pode utilizar uma ou mais cláusulas **catch** condicionals para manipular exceções específicas. Nesse caso a cláusula **catch** apropriada será inserida quando a exceção específica for lançada. No exemplo a seguir, o código no bloco **try** pode potencialmente jogar três exceções: **TypeError**, **RangeError** (en-US), e **EvalError**. Quando a exceção ocorre, o controle transfere para a cláusula **catch** apropriada. Caso a exceção não seja uma das especificadas e uma cláusula **catch** incondicional for encontrada, o controle é transferido para essa cláusula **catch**.

Implementação sem ECMAScript.
~~~ javascript
try {
    myroutine(); // pode lançar três tipos de exceções
} catch (e if e instanceof TypeError) {
    // declarações para manipular exceções TypeError
} catch (e if e instanceof RangeError) {
    // declarações para manipular exceções RangeError
} catch (e if e instanceof EvalError) {
    // declarações para manipular exceções EvalError
} catch (e) {
    // declarações para manipular quaisquer exceções não especificadas
    logMyErrors(e); // passa o objeto de exceção para o manipulador de erro
}
~~~

Implementação usando ECMAScript puro.
~~~ javascript
try {
    myroutine(); // pode lançar três tipos de exceções
} catch (e) {
    if (e instanceof TypeError) {
        // declarações para manipular exceções TypeError
    } else if (e instanceof RangeError) {
        // declarações para manipular exceções RangeError
    } else if (e instanceof EvalError) {
        // declarações para manipular exceções EvalError
    } else {
       // declarações para manipular quaisquer exceções não especificadas
       logMyErrors(e); // passa o objeto de exceção para o manipulador de erro
    }
}
~~~

### A cláusula finally

A cláusula finally é executada após a excecução do bloco try e da(s) cláusula(s) catch porém antes das declarações seguintes a declaração try. Ela sempre é executada, independente se uma exceção for lançada ou capturada.

~~~ javascript
try {
    throw new Error("oops");
  }
  catch (ex) {
    console.error("inner", ex.message);
    throw ex;
  }
  finally {
    console.log("finally");
    return;
  }
~~~

### Blocos try aninhados

Exemplo 1:
~~~ javascript
try {
  try {
    throw new Error("oops");
  }
  finally {
    console.log("finally");
  }
}
catch (ex) {
  console.error("outer", ex.message);
}

// Resultado
// "finally"
// "outer" "oops"

~~~
Agora, caso nós já capturamos a exceção no bloco  `try`  interno adicionando um bloco  `catch`

Exemplo 2:
~~~ javascript
try {
  try {
    throw new Error("oops");
  }
  catch (ex) {
    console.error("inner", ex.message);
  }
  finally {
    console.log("finally");
  }
}
catch (ex) {
  console.error("outer", ex.message);
}

// Resultado:
// "inner" "oops"
// "finally"
~~~
E agora, vamos relançar o erro.

Exemplo 3:
~~~ javascript
try {
  try {
    throw new Error("oops");
  }
  catch (ex) {
    console.error("inner", ex.message);
    throw ex;
  }
  finally {
    console.log("finally");
  }
}
catch (ex) {
  console.error("outer", ex.message);
}

// Resultado:
// "inner" "oops"
// "finally"
// "outer" "oops"
~~~

## Promises
Tempo estimado: 40 minutos

Uma  [`Promise`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise)  é um objeto que representa a eventual conclusão ou falha de uma operação assincrona. Como a maioria das pessoas consomem promisses já criadas, este guia explicará o consumo de promisses devolvidas antes de explicar como criá-las.

Quando utilizamos funções assíncronas, não conseguimos garantir o fluxo de nosso código, ou seja, um trecho de código que está localizado após uma função assíncrona pode ser executado antes da mesma ter sido realizada

**Promises** definem uma ação que vai ser executada no futuro, ou seja, ela pode ser resolvida (com sucesso) ou rejeitada (com erro).

### Sintaxe

~~~ javascript
new Promise((resolve: Function, reject: Function) => void)
~~~

- resolve: função para retornar o resultado da promise.
- reject: função para retornar o erro da promise.

### Estados
- **Pending**: O estado inicial da Promise, ela foi iniciada mas ainda não foi realizada nem rejeitada
- **Fulfilled**: Sucesso da operação, é o que chamamos de uma Promise realizada (resolved)
- **Rejected**: Falha da operação, é o que chamamos de uma Promise rejeitada
- **Settled**: É o estado final da Promise, quando ela já sabe se foi resolved ou rejected

Estado inicial como pendente (**pending**). Se ela estiver no estado de resolvida (**resolved**) é porque tudo deu certo, ou seja, a **Promise** foi criada e processada com sucesso, porém, em casos de falhas, a mesma estará no estado de rejeitada (**rejected**).

Uma das maneiras de fazer esse tratamento é através das funções **then** e **catch**, para sucesso ou falha respectivamente. O estado realizada (**fulfilled**) é quando a **Promise** foi resolvida, ou seja, assim que invocamos a função **resolved** da mesma. O estado estabelecida (**settled**) é quando a **Promise** foi resolvida ou rejeitada, ou seja, se o seu estado não está como pendente.

~~~ javascript
const timeout = (duration) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration)
  })
}

timeout(3000)
  .then(function() { // executa o bloco após 3 segundos
    console.log('passou 3 segundos')
  })
~~~

No exemplo abaixo executamos uma promise que resultou em uma falha, ou seja, nossa execução foi direcionada ao bloco catch. Veremos no bloco abaixo como esse tratamento é feito:

~~~javascript
function getTodosOsUsuarios () {
  return new Promise((resolve, reject) => {
    reject(new Error('Não foi possível recuperar a lista de usuários'))
  })
}
getTodosOsUsuarios()
  .catch(err => console.log(err.message)) // Não foi possível recuperar a lista de usuários
~~~

### Outros exemplos
Exemplo 1:
~~~ javascript
function fazRequisicao() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Promise resolvida.")
			//reject("Promise erro")
		}, 5000)
	})
}
fazRequisicao()
	.then(console.log)
	.catch(console.log)
	.finally(() => console.log("Finalizando ..."))

//Promise resolvida.
//Finalizando ...
~~~

## Fetch

Tempo estimado: 40 minutos

A API **Fetch** fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas. Ela também fornece o método global `fetch()`  que fornece uma maneira fácil e lógica para buscar recursos de forma assíncrona através da rede.

1. Crie um projeto node.js:
> npm init

2. Faça a instalação do **node-fetch**:
> npm install node-fetch

3. Crie um arquivo chamado **fetch.js*** e adicione o código abaixo:
~~~ javascript
fetch = require("node-fetch")
let cepBuscado
console.log("Buscando CEP")
buscarCep("13845373")

function buscarCep(param){
    let cep
    fetch(`https://viacep.com.br/ws/${param}/json/`)
        .then(response => response.json())
        .then(data => {
            cep = data.cep
            console.log("CEP: ", data.cep)
            console.log("Bairro: ", data.bairro)
        })
        .catch(console.error)
}
~~~

4. Execute e teste

## Exercício: 
Tempo estimado: 60 minutos

Encontre uma api pública e faça uma consulta utilizando o **fetch**. Em seguida, utilizes as funções **map**, **reduce** e **filter** para tratar o retorno e exiba os dados.

Exemplos: 

https://randomuser.me/api/?nat=br&results=10

https://pokeapi.co/api/v2/pokemon/ditto

https://picsum.photos/v2/list

https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY

## Referência
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript

https://www.devmedia.com.br/javascript-promise/41205

