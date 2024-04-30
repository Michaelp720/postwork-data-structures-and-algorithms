class Stack {
  constructor() {
    this.stack = [];
    // this is an arbitrary value to make testing easier
    // 1,024 would be way too high to test!
    this.limit = 10;
  }

  // add item to top of stack if not full
  // if full throw error
  push(item) {

    if (this.length === this.limit){
      throw new Error('Stack is full')
    }
    else {
      this.push(item)
    }
  }

  // remove item from top of stack and return it
  pop() {
    return this.pop()
  }

  // return item at top of stack without removing it
  peek() {
    return this[this.length -1]
  }

  // return true if stack is empty, otherwise false
  isEmpty() {
    if (this.length === 0){
      return true
    }

    return false
  }

  // return true if stack is full, otherwise false
  isFull() {
    if (this.length === this.limit){
      return true
    }

    return true
  }

  // return number of items in stack
  size() {
    return this.length
  }

  // return -1 if item not in stack, otherwise integer representing 
  // how far it is from the top
  search(target) {
    let position = -1
    for (let i = 1; i < this.length; i ++){
      if(this[this.length - i] === target){
        position = i
        return position
      }
    }
    return position
  }

  // print contents of stack: do not return the stack itself!
  print() {
    console.log(this)
  }
}

if (require.main === module) {
  // add your own tests in here
}

module.exports = Stack;
