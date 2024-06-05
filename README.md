# 🏦 Bankist App

Bankist is a simple web-based banking application that allows users to manage their accounts by viewing their balance, transaction history, making transfers, requesting loans, and closing accounts. The app demonstrates fundamental concepts of JavaScript, DOM manipulation, and event handling in a front-end web application.

## ✨ Features

- **🔑 Login System:** Users can log in using their unique username and PIN.
- **💰 View Balance:** Users can view their current account balance.
- **📊 Transaction History:** Displays a list of all movements (deposits and withdrawals) with sorting functionality.
- **💸 Money Transfer:** Users can transfer money to other accounts within the app.
- **🏦 Loan Requests:** Users can request loans if certain conditions are met.
- **🗑️ Close Account:** Users can delete their accounts after confirming their identity.
- **📈 Summary Display:** Shows the total deposits, withdrawals, and interest earned.

## 🛠️ Technologies Used

  ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

- **📝 HTML:** For structuring the web page.
- **🎨 CSS:** For styling the application.
- **💻 JavaScript:** For adding interactivity and functionality.

## 🔗Preview
https://github.com/Thaina-Oliveira/Simon-Game/assets/138075601/66e345da-a9cb-416e-baea-b00c41b73772

## 🔍 Methods and Techniques

- **JavaScript Array Methods:**
  - `forEach`: Used to iterate over the accounts array to create usernames and calculate balances.
  - `map`: Used for creating new arrays based on transformations.
  - `filter`: Used to filter transactions (e.g., deposits or withdrawals).
  - `reduce`: Used to calculate totals (e.g., balance, summary amounts).
  - `find`: Used to find specific accounts based on conditions.
  - `findIndex`: Used to find the index of an account for deletion.
  - `some`: Used to check conditions within arrays (e.g., loan eligibility).
  - `sort`: Used to sort transactions.

- **Event Handling:**
  - `addEventListener`: Used for handling user interactions like clicks on buttons for login, transfers, loans, closing accounts, and sorting transactions.

- **DOM Manipulation:**
  - `querySelector`: Used to select HTML elements.
  - `textContent`: Used to update the text content of HTML elements.
  - `insertAdjacentHTML`: Used to insert HTML content within the document.
  - `style.opacity`: Used to show or hide the application UI.

- **Form Handling:**
  - `preventDefault`: Used to prevent default form submission behavior.
  - Input validation and clearing input fields after actions.

## 📝 How to Use

1. **🔐 Login:**
   - Use the username (first letter of each part of the owner's name, in lowercase, concatenated) and the corresponding PIN to log in. For example, for Jonas Schmedtmann, the username is `js` and the PIN is `1111`.

2. **📋 View Transactions and Balance:**
   - After logging in, the user can view their transaction history and current balance.

3. **💸 Make Transfers:**
   - Enter the username of the recipient and the amount to transfer money to another account.

4. **💳 Request Loans:**
   - Enter the loan amount. A loan is approved if the account has had a deposit of at least 10% of the requested loan amount.

5. **🗑️ Close Account:**
   - Enter the username and PIN to delete the account.

6. **🔄 Sort Transactions:**
   - Click the sort button to toggle the sorting of transactions by amount.

## 📊 Example Data

- **Account 1:**
  - Owner: Jonas Schmedtmann
  - Movements: [200, 450, -400, 3000, -650, -130, 70, 1300]
  - Interest Rate: 1.2%
  - Username: 'js'
  - PIN: 1111

- **Account 2:**
  - Owner: Jessica Davis
  - Movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30]
  - Interest Rate: 1.5%
  - Username: 'jd'
  - PIN: 2222

- **Account 3:**
  - Owner: Steven Thomas Williams
  - Movements: [200, -200, 340, -300, -20, 50, 400, -460]
  - Interest Rate: 0.7%
  - username: 'stw'
  - PIN: 3333


- **Account 4:**
  - Owner: Sarah Smith
  - Movements: [430, 1000, 700, 50, 90]
  - Interest Rate: 1.0%
  - username: 'ss'
  - PIN: 4444

##  📝License
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
