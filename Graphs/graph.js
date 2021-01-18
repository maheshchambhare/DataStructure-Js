class Graph {
  constructor() {
    this.city = new Map();
  }

  add(node) {
    this.city.set(node, []);
  }

  addEdge(source, destination) {
    this.city.get(source).push(destination);
    this.city.get(destination).push(source);
  }
  accessFromIndex(index) {
    const arr = this.city;
    let arra = [...arr];
    console.log(arra[index]);
  }

  removeNode(node) {
    return this.city.delete(node);
  }

  checkValue(node) {
    return this.city.has(node);
  }
}

let g = new Graph();

g.add("surat");
g.add("malkapur");
g.add("bhusaval");
g.add("mumbai");
g.add("pune");
g.add("akola");
g.addEdge("surat", "malkapur");
g.addEdge("surat", "bhusaval");
g.addEdge("surat", "akola");
g.addEdge("mumbai", "malkapur");
g.addEdge("pune", "malkapur");
g.addEdge("akola", "pune");
console.log(g);
g.accessFromIndex(0);
g.removeNode("bhusaval");
console.log(g);
console.log(g.checkValue("surat"));
