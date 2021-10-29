module.exports = class Point {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }

  equals(p) {
    return (this.x == p.x) && (this.y == p.y)
  }

  toString() {
    return `(${this.x}, ${this.y})`
  }

}
