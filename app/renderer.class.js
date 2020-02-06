/** Renders content using DOM */
export class Renderer {
  constructor(rootClass) {
    this.root = document.querySelector(rootClass);
  }

  clear() {
    while (this.root.firstChild) {
      this.root.removeChild(this.root.firstChild);
    }
  }

  /** Appends first block with given numbers and operand between */
  appendFirstBlock(operand, number1, number2) {
    const newBlock = document.createElement('div');
    newBlock.className = 'block first';
    const operandBlock = document.createElement('div');
    operandBlock.className = 'operand';
    operandBlock.innerText = operand;
    const numberBlock1 = document.createElement('div');
    numberBlock1.className = 'number1';
    numberBlock1.innerText = number1;
    const numberBlock2 = document.createElement('div');
    numberBlock2.className = 'number2';
    numberBlock2.innerText = number2;
    newBlock.appendChild(numberBlock1);
    newBlock.appendChild(operandBlock);
    newBlock.appendChild(numberBlock2);
    this.root.appendChild(newBlock);
  }

  /** Appends next block with given number and operand */
  appendBlock(operand, number) {
    const newBlock = document.createElement('div');
    newBlock.className = 'block';
    const operandBlock = document.createElement('div');
    operandBlock.className = 'operand';
    operandBlock.innerText = operand;
    const numberBlock = document.createElement('div');
    numberBlock.className = 'number';
    numberBlock.innerText = number;
    newBlock.appendChild(operandBlock);
    newBlock.appendChild(numberBlock);
    this.root.appendChild(newBlock);
  }
}