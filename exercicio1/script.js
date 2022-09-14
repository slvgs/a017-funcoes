
function meuNome (nome){
    
    console.log(`Olá, ${nome}`)
}
meuNome(prompt("Qual seu nome?"))

arraytabu = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function tabuada(tabu){
    for(let i = 1; i < 11; i++){
        console.log(`${i} x ${tabu} = ${i*tabu}`)

    }
    
}
tabuada(6)

//                          COM ARROW FUNCTION

const meuNome = (nome) => {
    
    console.log(`Olá, ${nome}`)
}
meuNome(prompt("Qual seu nome?"))

const tabuada = (tabu) => {
    for(let i = 1; i < 11; i++){
        console.log(`${i} x ${tabu} = ${i*tabu}`)

    }
    
}
tabuada(6)
