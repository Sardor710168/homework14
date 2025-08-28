class BankAccount {
  constructor(ownerName, accountNumber, balance = 0) {
    this.ownerName = ownerName;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`${this.ownerName} hisobiga ${amount} so‘m qo‘shildi. Yangi balans: ${this.balance} so‘m`);
    } else {
      console.log("Xato: Depozit summasi musbat bo‘lishi kerak.");
    }
  }

  withdraw(amount) {
    if (amount <= 0) {
      console.log("Xato: Yechib olish summasi musbat bo‘lishi kerak.");
    } else if (amount > this.balance) {
      console.log("Xato: Hisobda yetarli mablag‘ mavjud emas.");
    } else {
      this.balance -= amount;
      console.log(`${this.ownerName} hisobidan ${amount} so‘m yechildi. Yangi balans: ${this.balance} so‘m`);
    }
  }

  showBalance() {
    console.log(`${this.ownerName} hisobida hozir: ${this.balance} so‘m mavjud.`);
  }
}

const user1 = new BankAccount("Ali Valiyev", "ACC123");
const user2 = new BankAccount("Laylo Karimova", "ACC456", 50000);

user1.showBalance();
user1.deposit(100000);
user1.withdraw(30000);
user1.showBalance();

console.log("------------");

user2.showBalance();
user2.deposit(25000);
user2.withdraw(80000);
user2.showBalance();
