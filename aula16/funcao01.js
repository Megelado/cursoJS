function parimpar(n) {
    if (n % 2 == 0) {
        return `${n} é par!`
    } else {
        return `${n} é ímpar!`
    }
}

let num = parimpar(7)
console.log(num)