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

  describe('equals', () => {
    test('Returns if it equals other point', () => {
      const p1 = new Point(1, 2)
      const p2 = new Point(1, 2)

      const result = p1.equals(p2)

      expect(result).toBe(true)
    })

    test('Returns if it different from other point', () => {
      const p1 = new Point(4, 7)
      const p2 = new Point(1, 2)

      const result = p1.equals(p2)

      expect(result).toBe(false)
    })
  })

  describe('toString', () => {
    test('Returns a string with the format (x, y)', () => {
      const p = new Point(2, 1)

      const result = p.toString()

      expect(result).toBe('(2, 1)')
    })
  })
})
