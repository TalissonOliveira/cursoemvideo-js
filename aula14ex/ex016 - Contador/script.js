function contar() {
    let txtinicio = document.querySelector('input#txtnuminicio')
    let txtfim = document.querySelector('input#txtnumfim')
    let txtpasso = document.querySelector('input#txtpasso')
    let res = document.querySelector('div#res')
    
    if (txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpasso == 0) {
        res.innerHTML = `Impossível contar! \u{2639}`
    } else {
        res.innerHTML = 'Contando: '
        
        let numInicio = Number(txtinicio.value)
        let numFim = Number(txtfim.value)
        let passo = Number(txtpasso.value)
        
        if (passo <= 0) {
            alert('Passo inválido! Considerando PASSO 1!')
            passo = 1
        }

        if (numInicio < numFim) {
            for (let c = numInicio; c <= numFim; c += passo) {
                res.innerHTML += `${c} \u{1f449} `
                console.log(numInicio)
            }
        } else {
            for (let c = numInicio; c >= numFim; c -= passo) {
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
     
}