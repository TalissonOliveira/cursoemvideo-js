let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p) {
        console.log('Engordou!')
        this.peso += p
    }
    /*prop: function engordar(p) {
        console.log('Engordou!')
        this.peso += p
    }*/
}

//amigo.prop(2)
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)