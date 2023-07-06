let description, descriptionValue, amount, amountValue, operator, operatorValue, addbtn;
let balance, incomeSum, expenseSum, additionInc, additionEx, balanceSum, total;

additionInc = 0;
additionEx = 0;
total = 0;
balanceSum = 0;
operatorValue = "";

operator = document.querySelector("#operator");
operator.addEventListener('input', operatorInput);

function operatorInput() {
  operatorValue = operator.value;
}

description = document.querySelector("#description");
description.addEventListener('input', function () {
  descriptionValue = description.value;
});

amount = document.querySelector("#amount");
amount.addEventListener('input', function () {
  amountValue = amount.value;
});

addbtn = document.querySelector("#add").addEventListener('click', addFunction);

function addFunction() {
  const parentDiv = document.createElement("div");
  parentDiv.classList.add("item");

  const p1 = document.createElement("p");
  p1.textContent = descriptionValue;

  const p2 = document.createElement("p");
  p2.textContent = `$${amountValue}`;

  const deleteBtn = document.createElement("button");
  deleteBtn.addEventListener("click", deleteEntry);
  deleteBtn.classList.add("delete-btn");
  

  if (operatorValue === "-") {
    deleteBtn.classList.add("expense-delete");
  }

  parentDiv.appendChild(p1);
  parentDiv.appendChild(p2);
  parentDiv.appendChild(deleteBtn);

  const income = document.querySelector("#income");
  const expense = document.querySelector("#expense");

  if (operatorValue === "+") {
    income.appendChild(parentDiv);
    updateIncome(parseInt(amountValue));
  } else {
    expense.appendChild(parentDiv);
    updateExpense(parseInt(amountValue));
  }

  description.value = "";
  amount.value = "";
  operator.value = null;

  saveEntryToLocalStorage(descriptionValue, amountValue, operatorValue);
  updateUI();
}

function deleteEntry() {
  const entryDiv = this.parentElement;
  const container = entryDiv.parentElement;
  container.removeChild(entryDiv);

  const description = entryDiv.querySelector("p:first-child").textContent;
  const amount = parseInt(entryDiv.querySelector("p:nth-child(2)").textContent.replace("$", ""));
  const operator = container.id === "income" ? "+" : "-";

  if (operator === "+") {
    updateIncome(-amount);
  } else {
    updateExpense(-amount);
  }

  deleteEntryFromLocalStorage(description, amount, operator);
  updateUI();
}

function updateIncome(amount) {
  additionInc += amount;
}

function updateExpense(amount) {
  additionEx += amount;
}

function updateUI() {
  balance = document.querySelector("#balance");
  incomeSum = document.querySelector("#incomeDisplay");
  expenseSum = document.querySelector("#expenseDisplay");

  if (balance && incomeSum && expenseSum) {
    incomeSum.textContent = `+$${additionInc}`;
    expenseSum.textContent = `-$${additionEx}`;
    balance.textContent = `$${additionInc - additionEx}`;
  }

  saveBalanceToLocalStorage(additionInc - additionEx);
  saveIncomeToLocalStorage(additionInc);
  saveExpenseToLocalStorage(additionEx);
}

function saveEntryToLocalStorage(description, amount, operator) {
  let entries = [];
  try {
    const entriesData = localStorage.getItem("entries");
    if (entriesData) {
      entries = JSON.parse(entriesData);
    }
  } catch (error) {
    console.error("Error parsing entries from local storage:", error);
  }

  const newEntry = {
    description: description,
    amount: amount,
    operator: operator

  };

  entries.push(newEntry);

  localStorage.setItem("entries", JSON.stringify(entries));
}

function deleteEntryFromLocalStorage(description, amount, operator) {
  let entries = [];
  try {
    const entriesData = localStorage.getItem("entries");
    if (entriesData) {
      entries = JSON.parse(entriesData);
    }
  } catch (error) {
    console.error("Error parsing entries from local storage:", error);
  }

  const entryIndex = entries.findIndex(entry => entry.description === description && entry.amount === amount && entry.operator === operator);
  if (entryIndex !== -1) {
    entries.splice(entryIndex, 1);
  }

  localStorage.setItem("entries", JSON.stringify(entries));
}

function saveBalanceToLocalStorage(balance) {
  localStorage.setItem("balance", JSON.stringify(balance));
}

function saveIncomeToLocalStorage(income) {
  localStorage.setItem("income", income);
}

function saveExpenseToLocalStorage(expense) {
  localStorage.setItem("expense", expense);
}

window.addEventListener('load', function () {
  
  let entries = [];
  try {
    const entriesData = localStorage.getItem("entries");
    if (entriesData) {
      entries = JSON.parse(entriesData);
      if (!Array.isArray(entries)) {
        entries = []; // If the retrieved data is not an array, initialize entries as an empty array
      }
    }
  } catch (error) {
    console.error("Error parsing entries from local storage:", error);
  }

  entries.forEach(function(entry) {
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("item");

    const p1 = document.createElement("p");
    p1.textContent = entry.description;

    const p2 = document.createElement("p");
    p2.textContent = `$${entry.amount}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.addEventListener("click", deleteEntry);

    if (entry.operator === "-") {
      deleteBtn.classList.add("expense-delete");
    }

    parentDiv.appendChild(p1);
    parentDiv.appendChild(p2);
    parentDiv.appendChild(deleteBtn);

    const container = entry.operator === "+" ? document.querySelector("#income") : document.querySelector("#expense");
    if (container) {
      container.appendChild(parentDiv);
    }
  });

  let balanceFromLocalStorage = 0;
  try {
    const balanceData = localStorage.getItem("balance");
    if (balanceData) {
      balanceFromLocalStorage = JSON.parse(balanceData);
    }
  } catch (error) {
    console.error("Error parsing balance from local storage:", error);
  }

  let incomeFromLocalStorage = 0;
  try {
    const incomeData = localStorage.getItem("income");
    if (incomeData) {
      incomeFromLocalStorage = parseFloat(incomeData);
    }
  } catch (error) {
    console.error("Error parsing income from local storage:", error);
  }

  let expenseFromLocalStorage = 0;
  try {
    const expenseData = localStorage.getItem("expense");
    if (expenseData) {
      expenseFromLocalStorage = parseFloat(expenseData);
    }
  } catch (error) {
    console.error("Error parsing expense from local storage:", error);
  }

  balance = document.querySelector("#balance");
  incomeSum = document.querySelector("#incomeDisplay");
  expenseSum = document.querySelector("#expenseDisplay");

  if (balance && incomeSum && expenseSum) {
    balance.textContent = `$${balanceFromLocalStorage}`;
    incomeSum.textContent = `+$${incomeFromLocalStorage}`;
    expenseSum.textContent = `-$${expenseFromLocalStorage}`;
  }

  additionInc = incomeFromLocalStorage;
  additionEx = expenseFromLocalStorage;
});
