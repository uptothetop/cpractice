/** Operands enumerator for the display. */
const OPERANDS = [
  '+',
  '-',
  '·',
  ':'
];

export class Counter {
  constructor(chainlen = 7) {
    this.min = 1;
    this.max = 100;
    this.maxdiv = 10;
    this.chainlen = chainlen;
  }

  /** Clears value and overall counting chain */
  clear() {
    this.value = 0;
    this.chain = [];
  }

  /** Inits new chain */
  init() {
    // Adds a random number
    this.calcChain(0, this.rnd(this.min, this.max));
  }

  /** Resets the chain and generates the new one */
  createChain() {
    this.value = -1;

    while (this.value < 0) {
      this.clear();
      this.init();
      this.generateChain();
    }
  }

  /** Generates chain */
  generateChain() {
    for (let i = 0; i < this.chainlen; i++) {
      this.addBlock();
    }
  }

  /** Adds new block to chain and calculates it */
  addBlock() {
    const operand = this.getOperand();
    // Determine the appropriate max
    const max = ([2, 3].includes(operand)) ? this.maxdiv : this.max;
    let number = this.rnd(this.min, max);

    // If we selected division, let's check that we 
    // will get an integer in result and we will not divide by zero
    if (operand === 3) {
      while (this.value % number !== 0) {
        number = this.rnd(this.min, max);
      }
    }
    
    if (operand === 2) {
      while (this.value - number < 0) {
        number = this.rnd(this.min, max);
      }
    }

    this.calcChain(operand, number);
  }

  /**
   * Calculates chain block and adds 
   * the result to the total value. 
   */
  calcChain(operand, number) {
    switch (operand) {
      case 0:
        this.value += number;
        break;
      case 1:
        this.value -= number;
        break;
      case 2:
        this.value *= number;
        break;
      default:
        this.value /= number;
    }
    this.chain.push([OPERANDS[operand], number]);
  }

  /** 
   * Gets random number from m to n
   * @param m number
   * @param n number
   * @return number
   */
  rnd(m, n) {
    return Math.floor(Math.random() * n + m);
  }

  /** 
   * Gets random operand
   * @returns number 
   */
  getOperand() {
    return this.rnd(0, OPERANDS.length);
  }
}