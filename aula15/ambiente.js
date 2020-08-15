let num = [5, 8, 2, 3]

num[3] = 7 // Adicionar na posição

num.push(10) // Adicionar na última posição

num.sort() // Organiza o array em ordem crescente (considerando a primeira casa decimal)

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é: ${num[0]}`)

let posi = num.indexOf(5) // Busca em qual index o valor esta, caso o valor não exista, ele retorna -1
if (posi == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${num.indexOf(posi)}`)
}
