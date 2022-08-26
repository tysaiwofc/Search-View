const config = 
{
    div: true
}
let array = [
    "batata",
    "teste",
    "amor",
    "agua",
    "suspeito",
    "next",
    "verdade",
    "qualquer",
    "megazorde",
    "finn",
    "jake",
    "gato",
    "meio",
    "ok"
]

array.forEach(value => {
    let t = document.getElementById('itens')

    t.innerHTML += `{ name: '${value}' },`
})

function t() {

    let teste = document.getElementById('search')

    let a = array.filter(value => value.includes(teste.value.toLowerCase()))
    let s = document.getElementById('itens')
    s.innerHTML = ` `

    if(a.length < 1) s.innerHTML += 'Sem resultados'
    a.forEach(value => {
        let t = document.getElementById('itens')
        t.innerHTML += `{ name: '${value}' },`
    }) 
}

function div(link) {
    setInterval(() => {
        console.clear()
        console.log('Para ver mais projetos como este, acesse: ' + link)
    }, 2000)

    setTimeout(() => {
        alert('Para ver mais projetos como este, acesse: ' + link)
    }, 5000)
}

if(config.div === true) {
    div('discord.gg/w9J84RkN2b')
}

