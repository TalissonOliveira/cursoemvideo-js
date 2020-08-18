let valores = []
let txtnum = document.querySelector('input#txtnum')
let num = Number(txtnum.value)
let res = document.querySelector('div#res')
let lista = document.querySelector('select#lista')

function isNum(n) {
    if (n >= 1 && n <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) > -1) {
        return true
    } else {
        return false
    }
}

function adicionarValor() {
    if (isNum(txtnum.value) && !inLista(txtnum.value, valores)) {
        res.innerHTML = ''
        valores.push(Number(txtnum.value))

        let item = document.createElement('option')
        item.text = `Valor ${valores[valores.length-1]} adicionado!`
        lista.appendChild(item)
    } else {
        alert('Valor já adicionado ou inválido. Por favor, insira um valor entre 1 e 100!')
    }
    txtnum.value = ''
    txtnum.focus()
}

function finalizar() {
    res.innerHTML = ''
    if (valores.length == 0) {
        alert('Por favor, adicione algum número!')
    } else {
        let total = valores.length
        let soma = null
        for (let posi in valores) {
            soma += valores[posi]
        }
        let media = soma/total
        
        res.innerHTML += `Ao todo, temos ${total} números cadastrados.<br>`
        maiorMenorValor()
        res.innerHTML += `Somando todos os valores temos ${soma}.<br>`
        res.innerHTML += `A média entre os valores é ${media}`
    }
}

function maiorMenorValor() {
    let maior = null
    let menor = valores[0]
    for (let posi in valores) {
        if (valores[posi] > maior) {
            maior = valores[posi]
        }
        if (valores[posi] < menor) {
            menor = valores[posi]
        }
    }
    res.innerHTML += `O maior valor informado foi ${maior}.<br>`
    res.innerHTML += `O menor valor informado foi ${menor}.<br>`
}