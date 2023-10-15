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
  
    Deposit() {
      const addBalance = () => {
        var tambahan = parseFloat(prompt("Masukkan jumlah saldo yang ingin ditambahkan: "));
        if (!isNaN(tambahan) && tambahan >= 1000) {
          this.saldo += tambahan;
          this.updateSaldo();
          var lanjutkan = window.confirm(`Sisa saldo anda sekarang adalah: ${this.saldo}. Apakah ingin menambahkan? Klik "Cancel" jika tidak ingin lanjut.`);
          if (!lanjutkan) {
            return;
          }
          setTimeout(addBalance, 1000); // Menunda operasi tambah saldo selama 0 detik (asynchronous).
        } else if (isNaN(tambahan)) {
          alert("Input tidak valid. Masukkan angka yang valid.");
          setTimeout(addBalance, 1000); // Menunda operasi tambah saldo selama 0 detik (asynchronous).
        } else if (tambahan <= 0) {
          alert("Masukkan lebih dari 0");
          setTimeout(addBalance, 1000); // Menunda operasi tambah saldo selama 0 detik (asynchronous).
        }
      };
  
      addBalance();
    }
  
    Witdraw() {
      const deductBalance = () => {
        var pengurangan = parseFloat(prompt("Masukkan jumlah saldo yang ingin dikurangkan: "));
        if (!isNaN(pengurangan)) {
          if (pengurangan <= this.saldo) {
            this.saldo -= pengurangan;
            this.updateSaldo();
            var lanjutkan = window.confirm(`Sisa saldo anda sekarang adalah: ${this.saldo}. Apakah ingin mengurangkan? Klik "Cancel" jika tidak ingin lanjut.`);
            if (!lanjutkan) {
              return;
            }
            setTimeout(deductBalance, 1000); // Menunda operasi kurangi saldo selama 0 detik (asynchronous).
          } else {
            alert("Jumlah yang ingin Anda kurangkan melebihi saldo yang tersedia.");
            setTimeout(deductBalance, 1000); // Menunda operasi kurangi saldo selama 0 detik (asynchronous).
          }
        } else {
          alert("Input tidak valid. Masukkan angka yang valid.");
          setTimeout(deductBalance, 1000); // Menunda operasi kurangi saldo selama 0 detik (asynchronous).
        }
      };
  
      deductBalance();
    }
  }
  
  const bankAccount = new BankAccount();
  bankAccount.updateSaldo();