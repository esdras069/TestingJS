const {
  sum, minus, multiply, divide,
} = require('./02_math_test');

describe(('Test for math'), () => {
  describe('Test for SUM', () => {
    test('test sobre la suma 1 +3 = 4', () => {
      const response = sum(1, 3);
      expect(response).toBe(4);
    });
  });

  describe('test for Multiply', () => {
    test('test sobre la multiplicacion de 3 * 3  = 9', () => {
      const response = multiply(3, 3);
      expect(response).toBe(9);
    });
  });
  describe('Test for Resta', () => {
    test('test sobre la Resta de 2 - 2 = 0', () => {
      const response = minus(2, 2);
      expect(response).toBe(0);
    });
  });
  describe('Test for Divide', () => {
    test('test sobre la division de 4 / 2 = 2', () => {
      const response = divide(4, 2);
      expect(response).toBe(2);
      const responseTwo = divide(4, 4);
      expect(responseTwo).toBe(1);
      const responseThree = divide(4, 0);
      expect(responseThree).toBeNull();
    });
  });
});
