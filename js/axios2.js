function exibirResultado(id, dados){
    const texto = JSON.stringify(dados)
    document.getElementById(id).innerHTML = texto
}

axios.get('parOuImpar', {
    params:{
        numero:6
    }
}).then(resp => exibirResultado('get', resp.data))

// axios('parOuImpar?numero=7').then(resp => exibirResultado('get', resp.data))

axios.post('formulario', {
    nome:'Joao',
    sobrenome: 'Silva',
}).then(resp => exibirResultado('post', resp.data))