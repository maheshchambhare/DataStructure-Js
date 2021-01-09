class Stack {
  constructor() {
    this.item = [];
    this.count = 0;
  }

  // Add Elements to stack

  push(element) {
    this.item[this.count] = element;
    console.log(`${element} added to ${this.count}`);
    this.count += 1;
    return this.count - 1;
  }

  pop() {
    if (this.count === 0) return undefined;
    let deleteItem = this.item[this.count - 1];
    console.log(this.count);

    this.count -= 1;
    console.log(`${deleteItem} removed`);
    return deleteItem;
  }

  print() {
    let str = "";
    for (let i = 0; i < this.count; i++) {
      str += this.item[i] + " ";
    }
    return str;
  }
}

let stack = new Stack();

stack.push(100);
stack.push(200);
stack.push(500);
stack.push(400);
stack.push(800);
stack.pop();
console.log(stack.print());

console.log(stack);
