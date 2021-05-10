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

function limparCampos(data, form)
{
    const rua = form.rua
    const complemento = form.complemento
    const bairro = form.bairro
    const cidade = form.cidade
    const estado = form.estado
    rua.value = ""
    complemento.value = ""
    bairro.value = ""
    cidade.value = ""
    estado.value = ""
}