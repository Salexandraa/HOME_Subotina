class Calculator {
    constructor() {
        Object.defineProperty(this, 'inp', { value: this.input })
    }
    equal() {
        let input = document.getElementById('txt')
        let inp = document.getElementById('txt').innerText
        if (inp) {
            input.value = eval(inp)

        }
    }

    click(e) {
        let input = document.getElementById('txt')

        if (e.target.tagName === 'table') {
            input.value = ''
        }
        else {
            input.value += e.target.innerText
        }

        if (e.target.innerHTML === 'C') {
            input.value = ''
        }
        if (e.target.innerHTML === '🠈') {
            let inp = document.getElementById('txt').innerText
            input.value = inp.substring(0, length - 1)

        }
        if(e.target.innerHTML === '='){
            let inp =document.getElementById('txt').innerText
           if (inp) {
               input.value = eval(inp)

           }
        }
        this.render
    }
    render(conatinerId) {
        this.container = document.getElementById(conatinerId)
        this.container.innerHTML = ''
        this.container.backgroundColor = 'yellow'
        this.input = document.createElement('input')
        this.input.setAttribute('id', 'txt')

        this.table = document.createElement('table')
        this.table.setAttribute('border', '2px')
        this.table.style.width = '170px'
        this.table.style.backgroundColor = 'skyblue'
        this.table.setAttribute('id', 'tableButton')
        this.table.addEventListener('click', this.click)
        let tr = document.createElement('tr')
        let td = document.createElement('td')
        td.setAttribute('value', 9)
        td.innerText = '9'
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerText = '8'
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerText = '7'
        tr.appendChild(td)

        this.table.appendChild(tr)

        tr = document.createElement('tr')
        td = document.createElement('td')
        td.innerText = '6'
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerText = '5'
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerText = '4'
        tr.appendChild(td)

        this.table.appendChild(tr)

        tr = document.createElement('tr')
        td = document.createElement('td')
        td.innerText = '3'
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerText = '2'
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerText = '1'
        tr.appendChild(td)

        this.table.appendChild(tr)

        tr = document.createElement('tr')
        td = document.createElement('td')
        td.setAttribute('colspan', '2')
        td.style.textAlign = 'center'
        td.style.backgroundColor = 'blue'
        td.innerText = '0'
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerText = '.'
        tr.appendChild(td)

        this.table.appendChild(tr)
        this.container.appendChild(this.input)
        this.container.appendChild(this.table)

    }

}
class CalculatorAcion extends Calculator {

    render(conatinerId) {
        super.render(conatinerId)

        let tr = document.createElement('tr')
        let td = document.createElement('td')
        td.innerHTML = '+'
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = '-'
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = '*'
        tr.appendChild(td)

        this.table.appendChild(tr)

        tr = document.createElement('tr')
        td = document.createElement('td')
        td.innerHTML = '/'
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = '('
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = ')'
        tr.appendChild(td)

        this.table.appendChild(tr)

        tr = document.createElement('tr')
        td = document.createElement('td')
        td.style.backgroundColor = 'blue'
        td.innerText = 'C'
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = '🠈'
        tr.appendChild(td)

        td = document.createElement('td')
        td.style.backgroundColor = 'blue'
        td.innerHTML = '='
        td.onclick = this.equal.bind(this)
        tr.appendChild(td)

        this.table.appendChild(tr)
        this.container.appendChild(this.table)
    }
}
window.onload = function () {
    let calculator = new CalculatorAcion()
    calculator.render('calculator')
}
