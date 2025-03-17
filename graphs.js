class Graph {
  constructor() {
    this.adjacencyList = {
      A: ["B", "C"],
      B: ["A", "D"],
      C: ["A", "E"],
      D: ["B", "E"],
      E: ["C", "D"],
    };
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
    return true;
  }
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return false; // If vertex doesn't exist, return false

    // Remove the vertex from all adjacency lists
    for (let neighbor of this.adjacencyList[vertex]) {
      this.adjacencyList[neighbor] = this.adjacencyList[neighbor].filter(
        (v) => v !== vertex
      );
    }

    // Remove the vertex itself
    delete this.adjacencyList[vertex];

    return true;
  }

  addEdge(v1, v2) {
    // Ensure both vertices exist before adding an edge
    if (!this.adjacencyList[v1]) this.addVertex(v1);
    if (!this.adjacencyList[v2]) this.addVertex(v2);

    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
    return true;
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      (vertex) => vertex !== v2
    );
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      (vertex) => vertex !== v1
    );
  }
}

// Create graph instance
const g = new Graph();
g.addEdge("A", "Z");
g.addEdge("A", "Y");
g.addEdge("B", "T");

console.log("Before Removing Vertex:");
console.log(g);

g.removeVertex("A"); // Removes "A" and all its connections

console.log("After Removing Vertex A:");
console.log(g);
