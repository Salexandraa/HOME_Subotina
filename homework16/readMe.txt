<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        function getTotalSumOfRadioGroup(groupName) {
            let sum = 0
            const inputs = document.getElementsByName(groupName)
            for (let i = 0; i < inputs.length; i++) {
                if (inputs[i].checked) {
                    sum += parseFloat(inputs[i].value)
                }
            }
            return sum
        }
        function getTotalSumOfCheckboxGrouo(group) {
            let s = 0
            const inputs2 = document.getElementsByName(group)
            for (let i = 0; i < inputs2.length; i++) {
                if (inputs2[i].checked) {
                    s += parseFloat(inputs2[i].value)

                }
            }
            return s
        }
        function client() {
            const clients = parseInt(document.getElementById('numberClient').value)
            const tableBody = document.querySelector('tbody')
            tableBody.innerHTML = ''
            for (let i = 0; i < clients; i++) {
                const tr = document.createElement('tr')
                const td = document.createElement('td')
                const inp = document.createElement('input')
                inp.setAttribute('type', 'text')
                td.appendChild(inp)
                tr.appendChild(td)
                const td2 = document.createElement('td')
                const inp2 = document.createElement('input')
                inp2.setAttribute('type', 'number')
                td2.appendChild(inp2)
                tr.appendChild(td2)
                tableBody.appendChild(tr)
            }

        }
        function getTotal() {
            let totalSumma = 0
            const clients = document.getElementById('numberClient')
            const numberClient = parseInt(clients.value)
            let hotelRoom = getTotalSumOfRadioGroup('num')
            totalSumma += hotelRoom
            const food = getTotalSumOfCheckboxGrouo('food')
            totalSumma += food
            const different = getTotalSumOfCheckboxGrouo('different')
            totalSumma += different
            totalSumma *= numberClient
            document.getElementById('res').innerText = (`за ${numberClient} клієнтів = ` + totalSumma)
        }


        window.onload = function () {
            document.getElementById('numberClient').onchange = client
            document.getElementById('total').onclick = getTotal
        }

    </script>
</head>

<body>
    <!-- Задача 3. -->
    <h1>Бронювання готельного номера</h1>
    <div>
        <label>Кількість клієнтів
            <input type="number" id="numberClient">
        </label>
    </div>
    <div>
        <table border="2px">
            <thead>
                <tr>
                    <th>ПІБ</th>
                    <th>Рік народження</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>
    <hr>
    <div>
        <label>Стандарт<input type="radio" name="num" id="breakfast" value="1500"></label>
        <label>Люкс <input type="radio" name="num" id="lunch" value="2000"></label>
        <label>Напівлюкс <input type="radio" name="num" id="dinner" value="3000"></label>
    </div>
    <hr>
    <div>
        <label>Сніданок <input type="checkbox" name="food" id="breakfast" value="150"></label>
        <label>Обід <input type="checkbox" name="food" id="lunch" value="200"></label>
        <label>Вечеря <input type="checkbox" name="food" id="dinner" value="300"></label>
    </div>
    <hr>
    <div>
        <label>Масаж<input type="checkbox" name="different" id="breakfast" value="500"></label>
        <label>Сауна <input type="checkbox" name="food" id="different" value="500"></label>
        <label>Міні бар в номері<input type="checkbox" name="food" id="different" value="300"></label>
    </div>
    <hr>
    <div>
        <button id="total">Розрахувати вартість</button>
    </div>
    <div>
        Повна вартість:<span id="res"></span>
    </div>

</body>

</html>

