let botao = document.getElementById('btn')
botao.addEventListener('click', () => {
    let inputPao = document.querySelector('#pao')
    let precoPao = Number(inputPao.value)
    let resultado = document.getElementById('res')
    
    for(let i = 1; i <= 50; i++) {
        resultado.innerHTML += `<strong>(${i})</strong> - R$${(precoPao * i).toFixed(2)}  `
    }
})