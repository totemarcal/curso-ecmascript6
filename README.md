# Map, reduce e filter
A seguir iremos abordar o estudo das função de Array chamadas **map**, **reduce** e **filter**.

## Map
O método **map()** invoca a função `callback` passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

A função `callback` é chamada com três argumentos: o valor do elemento corrente, o índice do elemento corrente e o array original que está sendo percorrido.

O código a seguir mostrar como o método `map` funciona quando a função `callback` possui apenas um argumento. Esse argumento será automaticamente atribuído para cada elemento do array conforme o `map` itera sobre o array original.

~~~ javascript
var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});
// doubles é agora [2, 8, 18]. numbers ainda é [1, 4, 9]
~~~

### Map x Foreach
Agora vamos mostrar a diferença entre Map x Foreach. Vamos começar pela definição encontrada no site da Mozilla:

- map(): O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

- foreach(): O método forEach() executa uma dada função em cada elemento de um array.

Em outras palavras o foreach manipula os dados reais de um array e o map cria um novo array.

**ForEach:**
~~~ javascript
arr.forEach((num, index) => {
    return arr[index] = num * 2;
});
~~~
**Map:**
~~~ javascript
let doubled = arr.map(num => {
    return num * 2;
});
~~~

### Outros exemplos
Adicionando 10% ao valor de cada elemento de um array.
~~~ javascript
[50, 60, 70].map(value => value * 1.1)
// [55, 66, 77]
OU
const add10Percent = (value) => value * 1.1
[50, 60, 70].map(add10Percent)
// [55, 66, 77]
~~~
Retornando objetos a partir de um array.
~~~ javascript
[50, 60, 70].map((value) => {price: value} )
// Returns: 
// [ { price: 50 }, { price: 60 }, { price: 70 } ]
~~~

## Reduce
O método **reduce()** executa uma função **reducer** (fornecida por você) para cada elemento do array, resultando num único valor de retorno.

O método `reduce()` executa a função de  `callback`  uma vez para cada elemento presente no array, excluindo furos (valores indefinidos), recebendo quatro argumentos:

1.  _acumulador_ - valor inicial (ou o valor do callback anterior),
2.  _valorAtual_ - o valor do elemento atual
3.  _index_ - o índice atual e
4.  `array` - o array onde a iteração está ocorrendo.

A primeira vez que o callback é chamado, o `acumulador`  e o  `valorAtual` podem ter um de dois valores possíveis. Se o  `valorInicial`  tiver  sido fornecido na chamada à função  `reduce()`, então o  `acumulador`  será igual ao `valorInicial` e o `valorAtual` será igual ao primeiro valor no array. Caso nenhum  `valorInicial`  seja fornecido, `acumulador`  será igual ao primeiro valor no array, e  `valorAtual`  será igual ao segundo.

~~~ javascript
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
~~~
### Usando reduce com objetos
Vamos utilizar um **reducer** pra extrair todos os livros do seguinte conjunto de dados:

~~~ json
const data = [  
   {  
      "name":"John",
      "books":[ 
         "Harry Potter",
         "1984"
      ]
   },
   {  
      "name":"Peter",
      "books":[  
         "Captains of the sands",
         "Barren Lives"
      ]
   }
]
~~~
Para extrair apenas uma lista de livros de todas as pessoas, poderíamos implementar dessa forma:

~~~ javascript
data.reduce(
  (prev, curr)=> prev.concat(curr.books), 
  [] // Este é o valor inicial do acumulador (prev)
)
// Returns
[ 'Harry Potter',
  '1984',
  'Captains of the sands',
  'Barren Lives' ]
~~~

## Filter
O método **filter()** cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

`filter()` chama a função callback fornecida, uma vez para cada elemento do array, e constrói um novo array com todos os valores para os quais o callback retornou o valor true ou  um valor que seja convertido para true. O callback é chamado apenas para índices do array que possuem valores atribuídos; Ele não é invocado para índices que foram excluídos ou para aqueles que não tiveram valor atribuído. Elementos do array que não passaram no teste do callback são simplesmente ignorados, e não são incluídos no novo array.

callback é invocado com estes três argumentos:

1. valor do elemento
2. índice do elemento
3. objeto do array a ser preenchido

~~~ javascript
function isBigEnough(value) {
  return value >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
~~~
O exemplo a seguir usa filter() para criar um JSON filtrado com todos seus elementos diferentes de zero, e id numérico.
~~~ javascript
var arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
];
var invalidEntries = 0;
function filterByID(obj) {
  if ('id' in obj && typeof(obj.id) === 'number' && !isNaN(obj.id)) {
    return true;
  } else {
    invalidEntries++;
    return false;
  }
}
var arrByID = arr.filter(filterByID);
console.log('Filtered Array\n', arrByID);
// [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }]
console.log('Number of Invalid Entries = ', invalidEntries);
// Number of Invalid Entries = 4
~~~
Pode-se concatenar funções como a seguir.
~~~ javascript
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
let arr2 = arr.map(num => num * 2).filter(num => num < 10);
console.log(arr2);
~~~

## Exemplo Prático

Para os nossos exemplos, iremos utilizar o seguinte array de objetos contendo: nome, idade e tipo.

~~~ json
data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
];
~~~

### Selecionar apenas os cachorros
Para retornar somente os animais de um determinado tipo dentro do nosso array, nós iremos utilizar o método filter().

~~~ javascript
let dogs = data.filter((animal) => {
  return animal.type === 'dog';
})
~~~

### Retornar a idade real de cada cachorro
Agora que nós já adicionamos um filtro para o nosso array, vamos ao nosso segundo exemplo, onde devemos retornar a idade real de cada cachorro.

~~~ javascript
dogs.map((animal) => {
	return animal.age *= 7
})

console.log(dogs)
~~~

### Somar a idade de todos os cachorros juntos
~~~ javascript
var calcAge = dogs.reduce((sum, animal) => {
  return sum + animal.age;
}, 0);
console.log(calcAge);
~~~

## Exercício

1. Aplique as funções de map. reduce e filter para o array abaixo:
~~~ js
[
            {
                "id": 70111470,
                "title": "Die Hard",
                "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": [4.0],
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": [5.0],
                "bookmark": [{ id:432534, time:65876586 }]
            },
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": [4.0],
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": [5.0],
                "bookmark": [{ id:432534, time:65876586 }]
            }
        ]
~~~

## Referência
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript

https://medium.com/luizalabs/entendendo-as-fun%C3%A7%C3%B5es-map-filter-e-reduce-2569888ae084

https://programadriano.medium.com/javascript-conhecendo-map-filter-e-reduce-ce072d8f0ec5
