class BankAccount {
  private accountNumber: string;
  protected balance: number;

  constructor(accountNumber: string, balance: number) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  public getAccountNumber() {
    return this.accountNumber;
  }

  public getBalance() {
    return this.balance;
  }
}

const bankAccount = new BankAccount('123456789', 1000);
console.log(bankAccount.getAccountNumber());
console.log(bankAccount.getBalance());
