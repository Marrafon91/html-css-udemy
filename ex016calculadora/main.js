function criaCalculadora() {
  return {
    display: document.querySelector(".display"),
    btnClear: document.querySelector(".btn-clear"),
    novaConta: false,

    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter() {
      this.display.addEventListener("keydown", (e) => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if (!conta && conta !== 0) {
          alert("Conta inválida");
          return;
        }

        this.display.value = String(conta);
        this.novaConta = true; 
      } catch (e) {
        alert("Conta inválida");
      }
    },

    clearDisplay() {
      this.display.value = "";
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    cliqueBotoes() {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.btnParaDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (el.classList.contains("btn-del")) {
          this.apagaUm();
        }

        if (el.classList.contains("btn-eq")) {
          this.realizaConta();
        }
      });
    },

    btnParaDisplay(valor) {
      if (valor === "x") valor = "*";
      if (valor === "÷") valor = "/";

      if (this.novaConta) {
        this.display.value = "";
        this.novaConta = false;
      }

      this.display.value += valor;
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
