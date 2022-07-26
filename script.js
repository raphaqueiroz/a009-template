const nome = prompt('Qual seu nome?')
const cor = prompt('Qual sua cor favorita?')
const frase = `Olá ${nome} sua cor favorita é : ${cor}`

console.log(`Olá ${nome} sua cor avorita é : ${cor}`)
console.log(frase)

// ------------------

const citacao = prompt('Esreva uma frase que você gosta:')

console.log("\" "+citacao+"\"") // adiciona aspas na impressão do console.log

console.log(`Nome: ${nome} \nCor favorita: ${cor}`)

// ----------------------------

console.log(`Nome: ${nome.toLocaleUpperCase()} \nCor Favorita: ${cor} \nSeus nome tem: ${nome.length} caracteres.`) //  transforma tudo pra caixa alta, e depois mostra a qnt de caracteres

console.log(nome.includes('a'))

// ------------Exercício de fixação---------------

const EndEmail = prompt('Digite seu e-mail:')

console.log(`O e-mail ${EndEmail} foi cadastrado co sucesso, Bem vindo ${nome}!`)
console.log(`O e-mail ${EndEmail} foi cadastrado co sucesso, Bem vindo ${nome}!`.replaceAll("r", "l")) // Subistitui "r" por "l"
console.log(`Seu nome tem:  ${nome.length} caracteres.`)
console.log(EndEmail.includes('@')) // Verificação se há "@"


