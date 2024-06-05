'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

////////////////////////////////////////////////////

const displayMovements = function (movements, sort = false) {
  const sortingMovements = sort
    ? movements.slice().sort((a, b) => a - b)
    : movements;

  // emptying the container movements to start adding new elements
  containerMovements.innerHTML = '';

  sortingMovements.forEach(function (mov, i) {
    // using the ternery operator to change between deposits and withdrawls
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
  <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}€</div>
  </div>`;

    // adding the html after the tag has opened, entao sempre que o loop se realizar irá adicionar o elemento no topo
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// printing the balance in the website
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance} €`;
};

// Displaying the summary
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} €`;

  const withdrawals = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(withdrawals)} €`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest} €`;
};

// computing usernames
const createUsernames = function (accs) {
  // in each loop a new username is added to the object
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

// updating UI
const updateUI = function (acc) {
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // // Display summary
  calcDisplaySummary(acc);
};

// event handlers
// login and pin

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // when clicked the e.preventDefault will prevent form from submmiting
  e.preventDefault();

  // checking to find a username like the one inserted
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  // checcking if the pin is correct
  // if correct, it should display a welcome message
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('LOGIN');

    // Display UI message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    // Display movements, it will chage accodording to the account's owner info

    //clear input field
    inputLoginUsername.value = inputLoginPin.value = '';

    // removing focus
    inputLoginPin.blur();

    // displayMovements(currentAccount.movements);

    // // Display balance
    // calcDisplayBalance(currentAccount);

    // // Display summary
    // calcDisplaySummary(currentAccount);

    // update ui
    updateUI(currentAccount);
  }
});

// Transfering money from one account to another
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault(); //this prevent the default behaviour of forms

  const amount = Number(inputTransferAmount.value);
  // using the accounts. find to find the account we will transfer the money to
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  // cleaning the inputs in the tranfers section
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    // adding a new movement to the list
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);
    updateUI(currentAccount);
  }
});

// request a loan section
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  // some requiments to check for the loan approval
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // add movements
    currentAccount.movements.push(amount);

    // update ui
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

// deleting the account using the Index Finder
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  // checking if the current user is the same as the user deleting the account
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    // deleting the account from the accounts
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username //this part of the statement returns either true or false, then the find index will return the index of the first element in the array that matched this condition
    );
    console.log(index); //output: 0 as the first element in the array, when you log into the stevn's account it shows the number 2, as the third element in the array

    // delete account
    accounts.splice(index, 1); //this part will delete the curent account. The number 1 in accounts.splice(index, 1) represents the number of elements to remove from the accounts array, starting at the position specified by index.
    // when you try to  log in nothing happends and on the console it shows undefinied and on the accounts array the current account was successfully deleted

    //hide UI
    containerApp.style.opacity = 0;
  }

  // clearing the inputs in the close account section
  inputCloseUsername.value = inputClosePin.value = '';
});

// variable to preserve the sorted state throughout the clicks
let sorted = false;
// will change according the !sorted parameter in the displayMovements function, if the sorted is currently false when the button is clicked it will turn to true, if not, will turn to false.

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
