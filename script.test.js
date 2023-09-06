const ship = require('./script')

test(`Ship class should have length, 
      number of hit received, sunk or not`, () => {
   expect(new Ship(4, 0, false)).toBe({
    length: 4,
    hitsReceived: 0,
    isSunk: false,
   })
})