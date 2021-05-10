
# Fecth + HTML + Bootstrap

Tempo estimado: 60 min

Vamos criar uma página **html** construído com **bootstrap** onde o usuário deve digitar o `CEP`, clicar no botão `Pesquisar`, fazer uma consulta a API **Viacep** e carregar o restante dos dado na tela.

![enter image description here](https://github.com/totemarcal/cursoHUB/blob/main/s1d4.png?raw=true)

Para isso crie os arquivos **index.html** e **index.js**. O arquivo **index.html** iremos colocar o código html com as chamadas a funções javascript que estará no arquivo **index.js**.

No arquivo **index.html** adicione o código abaixo:
~~~ javascript
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

    <title>Consulta CEP!</title>
  </head>
  <body>
    <div class="container col-md-5">
        <form id="form" onsubmit="consultarCEP(event, this)">
          <div class="form-group font-weight-bold">
            <label>CEP</label>
            <input type="text" id="cep" pattern= "\d{8}" class="form-control" required placeholder="Insira o seu CEP">
          </div>
          <div class="form-group font-weight-bold">
            <label>Rua</label>
            <input type="text" class="form-control" id="rua" placeholder="...">
          </div>
          <div class="form-group font-weight-bold">
            <label>Complemento</label>
            <input type="text" class="form-control" id="complemento" placeholder="...">
          </div>
          <div class="form-group font-weight-bold">
            <label>Bairro</label>
            <input type="text" class="form-control" id="bairro" placeholder="...">
          </div>
          <div class="form-group font-weight-bold">
            <label>Cidade</label>
            <input type="text" class="form-control" id="cidade" placeholder="...">
          </div>
          <div class="form-group font-weight-bold">
            <label>Estado</label>
            <input type="text" class="form-control" id="estado" placeholder="...">
          </div>
          <button type="submit" id="btnPesquisar" class="btn btn-primary">Pesquisa</button>
          <button type="reset" id="btnLimpar" class="btn btn-danger">Limpar</button>
        </form>
    </div>
    <script src="index.js" type="text/javascript"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
  </body>
</html>
~~~

No `head` adicionamos **Bootstrap CSS**, no `body` foi criado um **container** com o `div` e um `form` seguido dos elementos `label`, `input` e `button`.

No arquivo **index.js** adicione o código abaixo:

~~~ javascript
function consultarCEP(event, form)
{
    event.preventDefault();
    const inputDoCep = form.cep
    const valorDoCep = inputDoCep.value
    const url = `https://viacep.com.br/ws/${valorDoCep}/json/`
    
    fetch(url)
            .then(response =>{
                return response.json();
                })
            .then(data =>{
                
                if(data.erro)
                {
                    alert("O CEP DIGITADO ESTÁ INVÁLIDO");
                    return 
                }
                atribuirCampos(data, form)
            })
}

function atribuirCampos(data, form)
{
    console.log("form",form)
    const rua = form.rua
    const complemento = form.complemento
    const bairro = form.bairro
    const cidade = form.cidade
    const estado = form.estado
    rua.value = data.logradouro
    complemento.value = data.complemento
    bairro.value = data.bairro
    cidade.value = data.localidade
    estado.value = data.uf
}
~~~

A função `consultarCEP` iniciamos invocando o `preventDefault`.  Em seguida obtemos o valor do cep do formulário e atribuímos a `valorDoCep`. A função `fetch(url)` acessa a url `https://viacep.com.br/ws/${valorDoCep}/json/` para obter os dados de endereço do cep informado pelo usuário. O primeiro `.then` transforma o retorno em um **json**. O segundo `.then` verifica se houve erro no retorno, se não houver ele invoca a função `atribuirCampos`. A função `atribuirCampos` atribui os dados do retorno da consulta ao campos do formulário.

> O que é preventDefault?
> 
> As vezes colocamos uma tag de link **< a >** em um site, mas apenas por motivos de semântica, porque quando clicamos nesse link não queremos abrir uma nova página, queremos abrir uma janela modal por exemplo, um pop-up ou realizar algum efeito, animação e etc.  
> 
> Porém uma tag de link **< a >** sempre será uma tag de link que ao ser clicada por padrão irá tentar abrir um novo endereço ou âncora.  
> 
 >Para evitar que isso aconteça nós usamos o método `preventDefault`, que como o nome já dá ideia previne o comportamento default do objeto, ou seja cancela o comportamento que os elementos geralmente tem na página, então se o comportamento padrão de um link é abrir um site, nós vamos cancelar isso.

## Exercício: 
Tempo estimado: 120 minutos

Com base no exemplo acima, crie uma página **html** que utilize a consulta à API criada na atividade anterior (S1D3).
