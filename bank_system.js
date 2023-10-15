class BankAccount {
    constructor() {
      this.saldo = 0;
    }
    updateSaldo() {
      const saldoElement = document.getElementById("saldo");
      if (saldoElement) {
        saldoElement.textContent = this.saldo;
      }
    }
    deposit(amount) {
        setTimeout(() => {
            if (!isNaN(amount) && amount >= 0) {
                this.saldo += amount;
                this.updateSaldo();
                alert(`Deposit sebesar Rp ${amount} berhasil dilakukan.`);
            } else {
                alert("Deposit gagal. Masukkan jumlah yang valid.");
            }
        }, 2000); // delay 2 detik
    }
    withdraw(amount) {
        setTimeout(() => {
            if (!isNaN(amount) && amount >= 0) {
                if (amount <= this.saldo) {
                    this.saldo -= amount;
                    this.updateSaldo();
                    alert(`Penarikan sebesar Rp ${amount} berhasil dilakukan.`);
                } else {
                    alert("Penarikan gagal. Saldo tidak mencukupi.");
                }
            } else {
                alert("Penarikan gagal. Masukkan jumlah yang valid.");
            }
        }, 2000); // Delayed by 2 detik
    }
}