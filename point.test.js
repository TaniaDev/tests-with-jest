const Point = require('./point');

describe('Point', () => {
  describe('constructor', () => {
    test('Sets x', () => {
      const x = 3, y = 4

      const p = new Point(x, y)

      expect(p.x).toBe(x)
    });

    test('Sets y', () => {
      const x = 3, y = 4

      const p = new Point(x, y)

      expect(p.y).toBe(y)
    });
  })
  describe('toString', () => {
    test('Returns a string with the format (x, y)', () => {
      const p = new Point(2, 1)

      const result = p.toString()

      expect(result).toBe('(2, 1)')
    })
  })
})
