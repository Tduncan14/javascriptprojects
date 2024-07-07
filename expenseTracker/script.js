
const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');



const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'))



// const dummyTransactions = [
//     { id: 1, text: 'Flower', amount: -20 },
//     { id: 2, text: 'Salary', amount: 300 },
//     { id: 3, text: 'Book', amount: -10 },
//     { id: 4, text: 'Camera', amount: 150 }
// ]

let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : []



// add transaction




function addTransaction(e) {
    e.preventDefault()

    if (text.value.trim() === '' || amount.value.trim() === '') {
        alert('Please add text and amount')

    }

    else {
        const transaction = {

            id: generateId(),
            text: text.value,
            amount: Number(amount.value)
        }


        transactions.push(transaction)

        addTransactionDOM(transaction)

        updateValues()

        updateLocalStorage()

        text.value = '';

        amount.value = ''
    }




}

// generate random id

function generateId() {
    return Math.floor(Math.random() * 1000000000)
}




//  Add transactions to DOM list


function addTransactionDOM(transaction) {
    //   Get sign

    const sign = transaction.amount < 0 ? '-' : '+'


    const item = document.createElement('li')
    const button = document.createElement('btn');


    button.classList.add('delete-btn')
    button.innerHTML = 'X'
    // <button class="delete-btn" onClick="removeTransaction(${transaction.id})> X </button>

    button.addEventListener('click', function () {
        removeTransaction(transaction.id);
    });


    // add class based on value
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus')


    item.innerHTML = `${transaction.text}   <span>${sign} ${Math.abs(transaction.amount)}</span>`
    item.appendChild(button)



    list.appendChild(item);


}


// update the balance and expence



function updateValues() {
    const amounts = transactions.map(transaction => transaction.amount)

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)


    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2)


    const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2)


    console.log(total, 'total', income)
    console.log(expense)


    balance.innerText = `$${total}`;
    money_plus.innerText = `$${income}`
    money_plus.classList.add('plus')
    money_minus.innerText = `$${expense}`

}


// removes transaticon by id


function removeTransaction(id) {
    console.log('hello')
    transactions = transactions.filter(trans => trans.id !== id)

    updateLocalStorage()
    init()
}


// init app



function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions))
}



function init() {
    list.innerHTML = ''

    transactions.forEach(addTransactionDOM)
    updateValues()
}


init()


form.addEventListener('submit', addTransaction)