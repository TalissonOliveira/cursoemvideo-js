function tabuada() {
    let txtnum = document.querySelector('input#num')

    let res = document.querySelector('div#res')
    let resultado = document.querySelector('select#resultado')

    if (txtnum.value.length == 0) {
        //res.innerHTML = 'Por favor, insira um número válido!'
        alert('Por favor, insira um número válido!')
    } else {
        let num = Number(txtnum.value)
        resultado.innerHTML = ''
        
        /* res.innerHTML = `A tabuada de ${num} é:<br><br> ` */
        /*
        for (let c = 1; c <= 10; c++) {
            res.innerHTML += `${num} x ${c} = ${c*num}<br>`
            console.log(c*num)
        } 
        */

        let c = 1
        while (c <= 10) {
            let item = document.createElement('option')  // Criar elemento option
            item.text = `${num} x ${c} = ${c*num}` // Adicionar conteúdo no option
            item.value = `resultado${c}` // Adicionar value no option
            resultado.appendChild(item) // Adicionar elemento option no select com id='resultado'
            c++
        }
    }
}