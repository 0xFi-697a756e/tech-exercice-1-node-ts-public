import { AssertionError } from "assert";
import { Graph } from "./Graph";

describe("Graph generation tests", function () {
  it("should generate a graph", function () {
    const jsonVertices = [
      { id: 1, neighbors: [2] },
      { id: 2, neighbors: [3] },
      { id: 3, neighbors: [4] },
      { id: 4, neighbors: [] },
    ];
    const graph = Graph.createGraphFromJson(jsonVertices);
    expect(Object.keys(graph.vertices).length).toEqual(jsonVertices.length);
  });
  it("should throw an error, as one of the neighborId does not exist", function () {
    const jsonVertices = [
      { id: 1, neighbors: [2] },
      { id: 2, neighbors: [5] }, // Neighbor with id 5 does not exist
      { id: 3, neighbors: [] },
    ];
    expect(() => {
      Graph.createGraphFromJson(jsonVertices);
    }).toThrowError(
      "Vertex with ID 5 is pointed by Vertex 2 but does not exist."
    );
  });
  it("should throw an error, as one of the neighborId does not exist", function () {
    const jsonVertices = [
      { id: 2, neighbors: [2] },
      { id: 2, neighbors: [3] }, // Vertex 2 already exist
      { id: 3, neighbors: [] },
    ];
    expect(() => {
      Graph.createGraphFromJson(jsonVertices);
    }).toThrowError("Vertex with ID 2 already exists in the graph.");
  });
});
