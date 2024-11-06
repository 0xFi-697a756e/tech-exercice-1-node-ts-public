import { Vertex } from "./Vertex";
export class Graph {
  public vertices: { [key: number]: Vertex } = {};

  constructor(vertices: Array<Vertex>) {
    vertices.forEach((vertex) => {
      if (this.vertices[vertex.id]) {
        throw new Error(
          `Vertex with ID ${vertex.id} already exists in the graph.`
        );
      }
      this.vertices[vertex.id] = vertex;
    });
    for (let id in this.vertices) {
      this.vertices[id].neighbors.forEach((neighborId) => {
        if (!this.vertices[neighborId]) {
          throw new Error(
            `Vertex with ID ${neighborId} is pointed by Vertex ${id} but does not exist.`
          );
        }
      });
    }
  }

  static createGraphFromJson(jsonVertices: any[]): Graph {
    const vertices: Vertex[] = jsonVertices.map(
      (jsonVertex) => new Vertex(jsonVertex.id, jsonVertex.neighbors)
    );
    return new Graph(vertices);
  }
}
