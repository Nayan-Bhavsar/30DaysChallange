const form = document.getElementById("transactionForm");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const typeInput = document.getElementById("type");
const transactionList = document.getElementById("transactionList");
const errorMsg = document.getElementById("errorMsg");

const balanceEl = document.getElementById("balance");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");

let transactions = [];

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const description = descriptionInput.value.trim();
    const amount = Number(amountInput.value);
    const type = typeInput.value;

    if (description === "" || amount <= 0) {
        errorMsg.innerText = "Please enter valid description and amount";
        return;
    }

    errorMsg.innerText = "";

    const transaction = {
        description,
        amount,
        type
    };

    transactions.push(transaction);
    displayTransactions();
    updateSummary();

    descriptionInput.value = "";
    amountInput.value = "";
});

function displayTransactions() {
    transactionList.innerHTML = "";

    if (transactions.length === 0) {
        transactionList.innerHTML = `<p class="empty">No transactions added yet</p>`;
        return;
    }

    transactions.forEach((transaction, index) => {
        const li = document.createElement("li");
        li.classList.add(transaction.type);

        li.innerHTML = `
            ${transaction.description} - ₹${transaction.amount}
            <span class="delete" onclick="deleteTransaction(${index})">✖</span>
        `;

        transactionList.appendChild(li);
    });
}

function deleteTransaction(index) {
    transactions.splice(index, 1);
    displayTransactions();
    updateSummary();
}

function updateSummary() {
    let income = 0;
    let expense = 0;

    transactions.forEach(transaction => {
        if (transaction.type === "income") {
            income += transaction.amount;
        } else {
            expense += transaction.amount;
        }
    });

    balanceEl.innerText = `₹${income - expense}`;
    incomeEl.innerText = `₹${income}`;
    expenseEl.innerText = `₹${expense}`;
}