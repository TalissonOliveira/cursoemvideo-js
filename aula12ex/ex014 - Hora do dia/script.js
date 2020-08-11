function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    var data = new Date()
    var hora = adicionarZero(data.getHours())
    var minutos = adicionarZero(data.getMinutes())

    msg.innerHTML = `Agora são ${hora}:${minutos}!`
    
    if (hora >= 5 && hora < 12) {
        img.src = 'images/morning.png'
        mudarCorFundo('#5e88c2')
        mensagem('Bom dia!')
        
    } else if (hora >= 12 && hora < 18) {
        img.src = 'images/afternoon.png'
        mudarCorFundo('#f19c65')
        mensagem('Boa tarde!')
        
    } else {
        img.src = 'images/night.png'
        mudarCorFundo('#012147')
        mensagem('Boa noite!')
        
    }
}

function adicionarZero(i) {
    if (i < 10) {
        i = '0' + i
    }
    return i
}

function mudarCorFundo (cor) {
    document.body.style.background = `${cor}`
}

function mensagem(texto) {
    msg2.innerHTML = `${texto}`
}