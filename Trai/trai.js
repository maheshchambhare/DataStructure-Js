class Trai {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let node = this.root;
    for (let c of word) {
      if (node[c] == null) node[c] = {};
      node = node[c];
    }
    node.isWord = true;
  }

  traverse(word) {
    let node = this.root;
    for (let c of word) {
      node = node[c];
      if (node[c] === null) return null;
    }
    return node;
  }

  search(word) {
    const node = this.traverse(word);
    return node != null && node.isWord === true;
  }
}

let trai = new Trai();

trai.insert("hello");
trai.insert("hklo");
trai.insert("hetlo");
trai.insert("hel");
trai.insert("fel");
trai.insert("gel");
trai.insert("deel");
trai.insert("feeeelo");
console.log(trai.traverse("fel"));
console.log(trai.search("hello"));
console.log(trai);
