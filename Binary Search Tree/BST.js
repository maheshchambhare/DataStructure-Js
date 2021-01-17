class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class bst {
  constructor() {
    this.root = null;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, data);
    }
  }
  insertNode(node, data) {
    let newNode = new Node(data);
    if (data < node.data) {
      if (node.left == null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, data);
      }
    } else {
      if (node.right == null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, data);
      }
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, val) {
    if (node === null) {
      return null;
    } else if (val < node.data) {
      if (node.left) {
        node.left = this.removeNode(node.left, val);
      } else if (node.data !== val) {
        console.log(
          "You Entered " + val + ", Which is not in Binary Search Tree"
        );
      }
      return node;
    } else if (val > node.data) {
      if (node.right) {
        node.right = this.removeNode(node.right, val);
      } else if (node.data !== val) {
        console.log(
          "You Entered " + val + ", Which is not in Binary Search Tree"
        );
      }
      return node;
    } else {
      if (node.left == null && node.right == null) {
        node = null;
        return node;
      } else if (node.left == null) {
        node = node.right;
        return node;
      } else if (node.right == null) {
        node = node.left;
        return node;
      }
      let temp = this.findMin(node.right);
      node.data = temp.data;

      node.right = this.removeNode(node.right, temp);
      return node;
    }
  }

  findMin(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMin(node.left);
    }
  }
  getRootNode() {
    return this.root;
  }

  inOrder() {
    if (this.root === null) {
      return null;
    }
    let result = new Array();
    function inOrderTraversal(node) {
      node.left && inOrderTraversal(node.left);
      result.push(node.data);
      node.right && inOrderTraversal(node.right);
    }
    inOrderTraversal(this.root);
    return result;
  }

  preOrder() {
    if (this.root == null) {
      return null;
    }
    let result = new Array();
    function preOrderTriversal(node) {
      result.push(node.data);
      node.left && preOrderTriversal(node.left);
      node.right && preOrderTriversal(node.right);
    }
    preOrderTriversal(this.root);
    return result;
  }
  postOrder() {
    if (this.root == null) {
      return null;
    }
    let result = new Array();
    function postOrderTriversal(node) {
      node.right && postOrderTriversal(node.right);
      node.left && postOrderTriversal(node.left);
      result.push(node.data);
    }
    postOrderTriversal(this.root);
    return result;
  }
  postalOrder() {
    if (this.root == null) {
      return null;
    }
    let result = new Array();
    function postalOrderTriversal(node) {
      node.left && postalOrderTriversal(node.left);
      node.right && postalOrderTriversal(node.right);
      result.push(node.data);
    }
    postalOrderTriversal(this.root);
    return result;
  }
  reverseOrder() {
    if (this.root == null) {
      return null;
    }
    let result = new Array();
    function reverseOrderTriversal(node) {
      node.right && reverseOrderTriversal(node.right);
      result.push(node.data);
      node.left && reverseOrderTriversal(node.left);
    }
    reverseOrderTriversal(this.root);
    return result;
  }
}

let Bst = new bst();
let root = Bst.getRootNode();
Bst.add(10);
Bst.add(7);
Bst.add(8);
Bst.add(5);
Bst.add(15);
Bst.add(16);
Bst.add(18);
Bst.add(3);
Bst.remove(10);
console.log(Bst.inOrder());
console.log(Bst.preOrder());
console.log(Bst.postalOrder());
console.log(Bst.postOrder());
console.log(Bst.reverseOrder());
console.log(Bst);
