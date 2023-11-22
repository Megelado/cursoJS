function tabuada() {
    let num = document.getElementById('txtnum')
    var sel = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('Digite um valor válido!')
    } else {
        let n = Number(num.value)
        sel.innerHTML = ''
        for (var c = 1; c <=10;c++) {
            let op = document.createElement('option')
            op.text += `${n} X ${c} = ${n * c}`
            op.value = `tab${c}`
            sel.appendChild(op)
        }
    }
  
}
