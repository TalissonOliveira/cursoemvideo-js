let valores = []

let txtnum = document.querySelector('input#txtnum')
let num = Number(txtnum.value)
function adicionarValor() {
    if (txtnum.value.length == 0 || txtnum.value > 100 || txtnum.value < 1) {
        alert('Valor inválido. Insira um número entre 1 e 100')
    } else {
        valores.push(Number(txtnum.value))
        console.log(valores)
    }
    txtnum.value = ''
}