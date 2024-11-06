import { AssertionError } from "assert";
import { Graph } from "./Graph";
import { ShortestPathAlgo } from "./ShortestPathAlgo";

describe("Shortest path tests", function () {
  it("should find a vanilla path", function () {
    const jsonVertices = [
      { id: 1, neighbors: [2] },
      { id: 2, neighbors: [3] },
      { id: 3, neighbors: [4] },
      { id: 4, neighbors: [] },
    ];
    const graph = Graph.createGraphFromJson(jsonVertices);
    expect(ShortestPathAlgo.solve(1, 4, graph)).toEqual([1, 2, 3, 4]);
  });
  it("should find a less vanilla path", function () {
    const jsonVertices = [
      { id: 1, neighbors: [2] },
      { id: 2, neighbors: [3, 4, 5] },
      { id: 3, neighbors: [4] },
      { id: 4, neighbors: [5] },
      { id: 5, neighbors: [] },
    ];
    const graph = Graph.createGraphFromJson(jsonVertices);
    expect(ShortestPathAlgo.solve(1, 4, graph)).toEqual([1, 2, 4]);
  });
  it("should find a cool path", function () {
    const jsonVertices = [
      { id: 1, neighbors: [2] },
      { id: 2, neighbors: [3, 6, 8] },
      { id: 3, neighbors: [10, 9] },
      { id: 4, neighbors: [3, 5] },
      { id: 5, neighbors: [6, 10] },
      { id: 6, neighbors: [2, 7, 11] },
      { id: 7, neighbors: [4, 5] },
      { id: 8, neighbors: [3] },
      { id: 9, neighbors: [4] },
      { id: 10, neighbors: [6] },
      { id: 11, neighbors: [7] },
    ];
    const graph = Graph.createGraphFromJson(jsonVertices);
    expect(ShortestPathAlgo.solve(1, 7, graph)).toEqual([1, 2, 6, 7]);
  });
});
