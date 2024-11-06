export class Vertex {
  public id: number;
  public neighbors: Array<number>;

  constructor(id: number, neighbors: Array<number>) {
    this.id = id;
    this.neighbors = neighbors;
  }
}
