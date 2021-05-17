# ECMASCRITP 6

JavaScript é uma linguagem de script orientada a objetos e multiplataforma, pequena e leve. 

O ECMAScript 6 é a sexta versão da padronização JS criada em 1997. As versões número 5 e 5.1 do ES, lançada no mercado em 2009, é pura e simplesmente o JavaScript que conhecemos hoje e sua versão mais aceita entre os navegadores do mercado. Portanto, o ECMAScript 6 funciona exatamente como o JavaScript funciona, com seus comandos, recursos, atributos e resultados.

## Declaração de variáveis
Tempo estimado: 30 min

var
Declara uma variável, opcionalmente, inicializando-a com um valor.

let
Declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor.

const
Declara uma constante de escopo de bloco, apenas de leitura.

O exemplo abaixo criamos uma variável `numero` e alteramos o valor dele para `10`:
~~~ javascript
let numero = 1; // ok
numero = “10”;
console.log(numero); // 10
let olaMundo = function() {
    console.log(“Olá mundo!”);
} 
~~~

O exemplo abaixo de **const** derá erro pois uma **const** só pode ter atribuição na inicialização :
~~~ javascript
const numero = 1;
numero = “1”;
console.log(numero); // 1
~~~
A seguir temos uma **const** do tipo objeto `pessoa` em seguida é possível atribuir valores aos atributos do objeto pois não altera o atribuição do objeto.

~~~ javascript
const pessoa = {
  nome: 'Diego',
  idade: 26
}
pessoa.sobrenome = 'Pinho';
console.log(pessoa);
// { nome: 'Diego', idade: 26, sobrenome: 'Pinho' }
~~~

###  let x var
O resultado do código abaixo é `adeus` e `adeus` pois a segunda atribuição da variável `mensagem` sobrescreve o valor `olá` da primeira declaração.
~~~ javascript
var mensagem = 'olá';
{
    var mensagem = 'adeus'
    console.log(mensagem);
}
console.log(mensagem);
~~~

A diferença para as variáveis **let** é que as declaração possuem escopo então no código abaixo a segunda declaração da variável `mensagem` não altera o valor da primeira declaração. Assim, o resultado do código é `adeus`e `olá`.

~~~ javascript
let mensagem = 'olá';
{
    let mensagem = 'adeus'
    console.log(mensagem);
}
console.log(mensagem);
~~~
### Exercício
Crie duas listas de 10 posições e crie uma terceira lista contendo, nas posições pares os valores do primeira lista e nas posições impares os valores do segunda lista.

## Funções
Funções são os blocos de construção de código legível, sustentável e reutilizável. Funções são definidas usando a palavra-chave da função. Uma função pode ter retorno:
- Uma função de retorno deve terminar com uma declaração de retorno.
- Uma função pode retornar no máximo um valor. Em outras palavras, pode haver apenas uma instrução de retorno por função.
- A instrução de retorno deve ser a última instrução na função.

Funções também pode ter parâmetros:
- Parâmetros são um mecanismo para passar valores para funções.
- Os parâmetros formam uma parte da assinatura da função.
- Os valores dos parâmetros são passados ​​para a função durante sua invocação

Exemplo 1:
~~~ javascript
function square(numero) {
	return numero * numero
};
var x = square(4) //x recebe o valor 16
~~~
Exemplo 2: 
~~~ javascript
function fatorial(n){
  if ((n == 0) || (n == 1))
    return 1;
  else
    return (n * fatorial(n - 1));
}

let a, b, c, d, e;
a = fatorial(1); // a recebe o valor 1
b = fatorial(2); // b recebe o valor 2
c = fatorial(3); // c recebe o valor 6
d = fatorial(4); // d recebe o valor 24
e = fatorial(5); // e recebe o valor 120
~~~

### Rest Parameters
Tempo estimado: 30 min

**Parâmetros Rest** não restringe o número de valores que você pode passar para uma função.  Parâmetros Rest atuam como espaços reservados para vários argumentos do mesmo tipo.  Para declarar um rest parâmetro, o nome do parâmetro é prefixado com três períodos, conhecido como o operador de spread.

Exemplo 1:
~~~ javascript
function fun1(...params){
	console.log(params.length)
}
fun1()
fun1(5)
fun1(3,4,5)
~~~
Exemplo 2:
~~~ javascript
function multiplicar(multiplicador, ...args) {
  return args.map(x => multiplicador * x);
}
var arr = multiplicar(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
~~~
Exemplo 3:
~~~ javascript
function sortRestArgs(...theArgs) {
  var sortedArgs = theArgs.sort();
  return sortedArgs;
}
console.log(sortRestArgs(5,3,7,1)); // Exibe 1,3,5,7
~~~
### Exercício:

Elabore uma função que receba uma lista contendo N valores e um (ou mais) valores **num**. Percorra a lista e informe o número de vezes que esse elemento **num** (ou **num1**, **num2**, ... ) ocorreu no vetor.

### Funções anônimas
Tempo estimado: 30 min

Funções que não estão vinculadas a um identificador (nome da função) são chamadas como funções anônimas.  Essas funções são declaradas dinamicamente no tempo de execução.  ***Funções anônimas*** podem aceitar entradas e retornar saídas, assim como as funções padrão.  Uma **função anônima*** geralmente não é acessível após sua criação inicial. Variáveis ​​podem ser atribuídas a uma função anônima. 

Exemplo 1:
~~~ javascript
console.log(square(5));
var square = function (n) {
  return n * n;
}
~~~
Exemplo 2:
~~~ javascript
var somarDoisNumeros = function(parametro1, parametro2) {
    soma = parametro1 + parametro2;
    return soma;
}
console.log(somarDoisNumeros(5, 3));
// print 8
console.log(somarDoisNumeros(2, 4));
// print 6
~~~

### Exercícios

1. Escreva uma função que recebes 3 valores reais X, Y e Z e que verifique se esses valores podem ser os comprimentos dos lados de um triângulo e, neste caso, retornar qual o tipo de triângulo formado. Para que X, Y e Z formem um triângulo é necessário que a seguinte propriedade seja satisfeita: o comprimento de cada lado de um triângulo é menor do que a soma do comprimento dos outros dois lados. A função deve identificar o tipo de triângulo formado observando as seguintes definições:

	Triângulo Equilátero: os comprimentos dos 3 lados são iguais.
	Triângulo Isósceles: os comprimentos de 2 lados são iguais.
	Triângulo Escaleno: os comprimentos dos 3 lados são diferentes.

## Arrow Function

Tempo estimado: 30 min

Arrow Fuctions refere-se a funções anônimas na programação:
- Parâmetros – Uma função pode opcionalmente ter parâmetros.
- A notação da seta gorda / notação lambda (=>): Também é chamada como o operador vai para.
- Instruções – Representa o conjunto de instruções da função.

~~~ javascript
(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression
// equivalente a: => { return expression; }

// Parênteses são opcionais quando só há um nome de parâmetro:
(singleParam) => { statements }
singleParam => { statements }

// A lista de parâmetros para uma função sem parâmetros deve ser escrita com um par de parênteses.
() => { statements }
~~~

Arrow functions podem ter um corpo conciso ("concise body") ou o usual corpo em bloco ("block body").

Em um concise body, apenas uma expressão é especificada, a qual se torna o valor de retorno implícito. Em um block body, você precisa explicitamente usar a declaração de retorno, ou seja, o return.

~~~ javascript
var func = x => x * x;
// sintaxe de concise body. O "return" é implícito

var func = (x, y) => { return x + y; };
// Em um função com block body, é necessário um "return" explícito
~~~

Tenha em mente que retornar objetos literais usando a sintaxe de corpo conciso (_concise body_) `params => {object:literal}` não funcionará como experado, então tem que envolver o objeto literal em parênteses.

~~~ javascript
var func = () => ({foo: 1});
~~~

Mais exemplos:
~~~ javascript
var simple = a => a > 15 ? 15 : a;
simple(16); // 15
simple(10); // 10

let max = (a, b) => a > b ? a : b;
~~~
### Arrow function usadas como métodos
~~~ javascript
var obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c: function() {
    console.log(this.i, this);
  }
}
~~~

## Exercício: 
Tempo estimado: 60 min

1. Uma empresa de táxi cobra a bandeirada de R$ 5,00 e ainda o valor de R$ 1,50 para cada quilômetro rodado. Faça uma **arrow function** que calcule o valor cobrado em uma corrida de 12 km.

2. Faça uma função que recebe por parâmetro o tempo de duração de uma fábrica expressa em segundos e retorna por objeto esse tempo em horas, minutos e segundos.

3. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula peso ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.

## Referência
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript

https://kenzie.com.br/blog/ecmascript-6/#:~:text=O%20ECMAScript%206%20%C3%A9%20a,entre%20os%20navegadores%20do%20mercado.

https://imasters.com.br/front-end/let-const-e-var-nao-e-tudo-mesma-coisa#:~:text=Let%20e%20Const,-Antes%20que%20possamos&text=Veja%20s%C3%B3%20alguns%20exemplos%3A,)%3B%20%7D%20%2F%2F%20tamb%C3%A9m%20ok!&text=A%20refer%C3%AAncia%20continua%20a%20mesma,inserir%20mais%20propriedades%20no%20objeto.
