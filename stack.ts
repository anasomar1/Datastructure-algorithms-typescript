class StackArray {
  items: number[];
  constructor() {
    this.items = [];
  }
  insertAtEnd(element: number) {
    this.items.push(element);
  }
  removeAtEnd() {
    this.items.pop();
  }
  elementAtEnd() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  clear() {
    this.items = [];
  }
}

class StackObject {
  items: {};
  count: number;
  constructor() {
    this.count = 0;
    this.items = {};
  }
  insertAtEnd(element: number) {
    this.items[this.count] = element;
    this.count++;
  }
  removeAtEnd() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.count];
    delete this.items[this.count];
    this.count--;
    return result;
  }
  elementAtEnd() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }
  isEmpty() {
    return this.count === 0;
  }
  size() {
    return this.count;
  }
  clear() {
    this.items = {};
    this.count = 0;
  }
}
