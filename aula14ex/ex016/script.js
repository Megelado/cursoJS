function contar() {
    let inicio = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let incremento = document.getElementById('txtpas')
    let res = document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || incremento.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(incremento.value)
        if (p <= 0) {
            alert('Passo inválido!')
            p = 1
        }
        if (i < f) {
            for (var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}` 
        }
        } else {
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}` 
        }
        }
        res.innerHTML += `\u{1f3C1}`
    }
}
