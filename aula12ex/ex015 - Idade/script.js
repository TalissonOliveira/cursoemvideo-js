function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()

    var res = document.querySelector('div#res')
    var anotxt = document.querySelector('input#txtano')

    if (anotxt.value.length == 0 || Number(anotxt.value) > anoAtual) {
        alert('Verifique os dados e tente novamente!')
    } else {
        var formSexo = document.getElementsByName('radsex')
        var idade = anoAtual - Number(anotxt.value)

        var genero = formSexo[0].checked ? 'Homem' : 'Mulher'

        var img = document.createElement('img') // Criar elemento img no html
        img.setAttribute('id', 'foto') // Colocar id='foto' no img

        if (genero == 'Homem') {
            mudarCorFundo('#3584df')
            if (idade >= 0 && idade < 12) {
                // Criança
                img.setAttribute('src', 'images/foto-bebe-m.png') // Colocar atribuo src='' no img
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'images/foto-jovem-m.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'images/foto-adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'images/foto-idoso-m.png')
            }
        } else {
            mudarCorFundo('#f786df')
            if (idade >= 0 && idade < 12) {
                // Criança
                img.setAttribute('src', 'images/foto-bebe-f.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'images/foto-jovem-f.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'images/foto-adulto-f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'images/foto-idoso-f.png')
            }
        }
        res.innerHTML = `${genero} com ${idade} ano(s)`
        res.appendChild(img) // Fazer o img aparecer
    }
}

function mudarCorFundo(cor) { 
    document.body.style.background = `${cor}` // Colocar cor no body
}