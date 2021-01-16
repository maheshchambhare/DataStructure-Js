import { Node } from "./node.js";

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // ! Adding element to link list
  add(element) {
    let node = new Node(element);

    if (this.head == null) {
      // ? if the linked list has no node then asign first node
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    return this.size++;
  }

  //  ! Insert Element At Index

  insertAtIndex(element, index) {
    if (index > 0 && index > this.size) {
      return -1;
    } else {
      let node = new Node(element);
      let curr;
      let val = 0;
      let prev = curr;
      curr = this.head;
      if (index == 0) {
        this.head = node;
        node.next = this.head;
      } else {
        while (val < index) {
          val++;
          prev = curr;
          curr = curr.next;
        }

        prev.next = node;
        node.next = curr;
      }
      return this.size++;
    }
  }

  // !  Remove element using index

  remove(index) {
    if (index < 0 && index < this.size) {
      return -1;
    } else {
      let curr = this.head;
      let prev;
      if (index == 0) {
        this.head = curr.next;
      } else {
        let val = 0;
        while (val < index) {
          val++;
          prev = curr;
          curr = curr.next;
        }
        prev.next = curr.next;
      }
      return this.size--;
    }
  }

  // ! Remove element using element

  removeEle(element) {
    let curr = this.head;
    let prev = null;
    while (curr != null) {
      if (curr.element === element) {
        if (prev == null) {
          this.head = curr.next;
        } else {
          prev.next = curr.next;
        }
      }
      prev = curr;
      curr = curr.next;
    }
    console.log("Element Not Found for romoval");
    return -1;
  }

  indexOf(element) {
    let curr = this.head;
    let count = 0;

    while (curr) {
      if (curr.element == element) {
        console.log("index of " + element + " is " + count);
        return count;
      }
      count++;
      curr = curr.next;
    }
    console.log(element + " Not Valid");

    return -1;
  }

  isEmpty() {
    return this.size === 0;
  }

  sizeOf() {
    return console.log("Size of Linked List is " + this.size);
  }

  print() {
    let str = "";
    let curr = this.head;

    while (curr) {
      str += curr.element + " ";
      curr = curr.next;
    }
    return console.log(str);
  }
}

let ll = new LinkedList();

ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
ll.insertAtIndex(15, 2);
ll.remove(2);
ll.removeEle(400);
ll.indexOf(10);
ll.sizeOf();
console.log(ll.isEmpty());
ll.print();
console.log(ll);

// ! Output

/* 
Element Not Found for romoval
linked-list.js:92 index of 10 is 4
linked-list.js:108 Size of Linked List is 5
linked-list.js:135 false
linked-list.js:119 50 40 30 20 10 
linked-list.js:137 
LinkedList {head: Node, size: 5}
head: Node
element: 50
next: Node
element: 40
next: Node
element: 30
next: Node
element: 20
next: Node
element: 10
next: null
*/
