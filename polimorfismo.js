class conta {
  constructor(saldo, id) {
    this.saldo = saldo;
    this.id = id;
  }

  depositar(valor) {
    this.saldo += valor;
    return `Você depositou R$${valor}, saldo atual: R$${this.saldo}`;  
  }

  sacar(valor) {
    if (this.saldo < valor) {
      return 'Saldo insuficiente';
    }
    else {
      this.saldo -= valor;
      return `Você sacou R$${valor}, saldo atual: R$${this.saldo}`;
    }
  }

  getSaldo() {
    return `Você possui R$${this.saldo} de saldo`;
  }
}

class ContaCorrente extends conta {
  constructor(saldo, id, limite) {
    super(saldo, id);
    this.limite = limite;
  }

  getLimite() {
    return this.limite;
  }

  setLimite(limite) {
    this.limite = limite;
  }

  sacar(valor) {
    if(this.saldo < valor) {
      return 'Saldo insuficiente';
    }
    else if( valor > this.limite){
      return 'Operação inválida pois excede os limites da conta';
    }
    else {
      this.saldo -= valor;
      return `Você sacou R$${valor}, saldo atual: R$${this.saldo}`;
    }
  }

  getSaldo() {
    return `Você possui R$${this.saldo} de saldo`;
  }

  depositar(valor) {
    this.saldo += valor;
    return `R$${valor} depositados, saldo atual = R$${this.saldo}`;
  }
}

// const conta1 = new conta(0,1);

// console.log(`Conta id: ${conta1.id}, saldo: ${conta1.saldo}`);

// console.log(conta1.depositar(100));

// console.log(conta1.sacar(300));

const contaCorrente1 = new ContaCorrente (0, 2, 500)

console.log(contaCorrente1.sacar(600));

console.log(contaCorrente1.depositar(2000));
console.log(contaCorrente1.getSaldo());


console.log(contaCorrente1.sacar(800));


