class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Bst {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  findMin() {
    let currenVal = this.root;
    while (currenVal.left !== null) {
      currenVal = currenVal.left;
    }
    return currenVal.data;
  }
  findMax() {
    let currenVal = this.root;
    while (currenVal.right !== null) {
      currenVal = currenVal.right;
    }
    return currenVal.data;
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  isPresent(data) {
    let current = this.root;
    while (current) {
      if (current.data === data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
}

const bst = new Bst();

bst.add(10);
bst.add(11);
bst.add(1);
bst.add(15);
bst.add(2);
bst.add(20);
bst.add(30);
bst.add(3);
bst.add(8);
console.log(bst.find(8));
console.log(bst.isPresent(3));
console.log(bst.findMin());
console.log(bst.findMax());
console.log(bst);
