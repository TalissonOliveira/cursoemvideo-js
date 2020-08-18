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
        console.log(valores)
    } else {
        alert('Valor já adicionado ou inválido. Por favor, insira um valor entre 1 e 100!')
    }
    txtnum.value = ''
}

function finalizar() {
    if (valores.length == 0) {
        alert('Por favor, adiciona algum número!')
    } else {
        totalNumeros(valores)
        maiorValor()
        menorValor()
        somarValores()
        mediaValores(valores)
    }
}

function totalNumeros(l) {
    res.innerHTML += `Ao todo, temos ${l.length} números cadastrados.<br>`
}

function maiorValor() {
    let valor = null
    for (let posi in valores) {
        if (valores[posi] >= valor) {
            valor = valores[posi]
        }
    }
    res.innerHTML += `O maior valor informado foi ${valor}.<br>`
}

function menorValor() {
    let valor = valores[0]
    for (let posi in valores) {
        if (valores[posi] <= valor) {
            valor = valores[posi]
        }
    }
    res.innerHTML += `O menor valor informado foi ${valor}.<br>`
}

function somarValores() {
    let total = null
    for (let posi in valores) {
        total += valores[posi]
    }
    res.innerHTML += `Somando todos os valores temos ${total}.<br>`
}

function mediaValores(l) {
    let total = null
    for (let posi in l) {
        total += l[posi]
    }
    let media = total/l.length
    res.innerHTML += `A média entre os valores é ${media}.`
}