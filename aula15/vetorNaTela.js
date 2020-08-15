let valores = [0, 1, 5, 7, 3, 4]
valores.sort()
/* for (let posi=0; posi < valores.length; posi++) {
    console.log(`A posição ${posi} tem o valor ${valores[posi]}`)
} */

for (let posi in valores) {
    console.log(`A posição ${posi} tem o valor ${valores[posi]}`)
}

console.log(valores.indexOf(4)) //Busca em qual index o valor esta, caso o valor não exista, ele retorna -1
