const num = Number(prompt("Digite um número:"))
const tabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (indice in tabuada) {
    indice++
    console.log(`${num} x ${indice} = ${num * indice}`)
}