import { Node } from "./node.js";

class LinkList {
  //! Iniatializing the Linked-List

  constructor() {
    this.head = null;
    this.size = 0;
  }

  //   ! Adding Element in linked-list

  add(data) {
    let node = new Node(data);

    let current;

    //? when linked list is empty then make new node head

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }
  // ! Add element at Index
  addAtIndex(data, index) {
    let node = new Node(data);
    let curr, prev;

    curr = this.head;

    //   ? When Index  zero

    if (index == 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let val = 0;
      while (val < index) {
        val++;
        prev = curr;
        curr = curr.next;
      }
      node.next = curr;
      prev.next = node;
    }
    this.size++;
  }

  //   ! Remove element from index
  remove(index) {
    // ? if index is invalid
    if (index > 0 && index > this.size) {
      console.log("Enter Valid Index for removing element");
      return -1;
    } else {
      let curr;
      let prev;
      let val = 0;

      curr = this.head;
      prev = curr;
      if (index === 0) {
        this.head = curr.next;
      } else {
        // ? Looping through link list for getting the index no
        while (val < index) {
          val++;
          prev = curr;
          curr = curr.next;
        }

        prev.next = curr.next;
      }
      this.size--;
      return curr.element;
    }
  }
}

let LL = new LinkList();

LL.add(10);
LL.add(20);
LL.add(30);
LL.add(40);
LL.add(50);
LL.addAtIndex(55, 5);
LL.addAtIndex(1, 0);
LL.remove(10);
console.log(LL);
