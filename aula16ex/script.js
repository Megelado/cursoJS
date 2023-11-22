let num = document.getElementById('txtnum')
let res = document.getElementById('res')
let lista = document.getElementById('selana')
let valores = []
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function isList(n, l) {
    for (let c = 0; isNumero(n) == true; c++){
        if (n == l[c]){
            return true
        } else {
            return false
        }
    }
    
}

function adicionar() {
    if (isNumero(num.value)  && !isList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        lista.appendChild(item)
    }else {
        alert('[ERRO]Valor inválido ou já está na lista!')
    }
        
} 
    
function finalizar() {
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let ud = 0
        let soma = 0
        c = 0
        for (c in valores) {
            if (valores[c] > maior) {
                maior = valores[c]
            }
            if (valores[c] < menor) {
                menor = valores[c] 
            }
            soma = ud + valores[c]
            ud = soma
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor digitado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor digitado foi ${menor}</p>`
        res.innerHTML += `<p>A soma entre os valores digitados foi ${soma}</p>`
        res.innerHTML += `<p>A média entre os valores digitados foi ${media}</p>`
    }
}
