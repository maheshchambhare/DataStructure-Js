function queu() {
  let collection = [];
  this.print = function () {
    console.log(collection);
  };

  this.enqueue = (element) => {
    collection.push(element);
  };
  this.dequeue = () => {
    return collection.shift();
  };
  this.front = () => {
    return collection[0];
  };
  this.empty = () => {
    if (collection.length === 0) return "Empty";
    else return `Queu is not empty , queu length = ${collection.length}`;
  };
}

var q = new queu();

q.enqueue("d"); // the first item entered queu
q.enqueue("a");
q.enqueue(2);
q.enqueue(5);
q.print();
q.dequeue(); //the first item removed from queu
q.print();
console.log(q.front());
console.log(q.empty());

// Priority Queu

function priorityQueu() {
  let collection = [];
  this.print = function () {
    console.log(collection);
  };

  this.enqueue = (element) => {
    if (collection.length === 0) {
      collection.push(element);
    } else {
      var added = false;
      for (var i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          //checking priorities
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };
  this.dequeue = () => {
    return collection.shift();
  };
  this.front = () => {
    return collection[0];
  };
  this.empty = () => {
    if (collection.length === 0) return "Empty";
    else return `Queu is not empty , queu length = ${collection.length}`;
  };
}

var pQ = new priorityQueu();

pQ.enqueue(["d", 3]); // the first item entered queu
pQ.enqueue(["a", 1]);
pQ.enqueue([2, 6]);
pQ.enqueue([5, 2]);
pQ.print();
pQ.dequeue(); //the first item removed from queu
pQ.print();
console.log(pQ.front());
console.log(pQ.empty());
