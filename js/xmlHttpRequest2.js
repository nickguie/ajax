function ajaxUpload(config){
    const xhr = new XMLHttpRequest()
    if(xhr.upload){
        xhr.upload.onprogress = e => {
            // dados carregados
            const atual = e.loaded
            // valor total
            const total = e.total
            // calcula percentual
            const percentual = Math.floor(atual / total * 100)
            // chama a função progresso com dados mastigados
            config.progresso({atual, total, percentual})
        }
    }

    xhr.open("post", config.url, true)
    xhr.send(config.formData)
}

document.querySelector('input[type=file').onchange = e => {
    const formData = new FormData()
    const inputFile = e.target
    formData.append(inputFile.name, inputFile.files[0])

    ajaxUpload({
        url: "upload",
        formData: formData,
        progresso(dados){
            const progresso = document.querySelector('.progresso')
            progresso.innerHTML = JSON.stringify(dados)
        }
    })
}