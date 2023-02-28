// matchers

test('test obj', () => {
  const data = { name: 'Pedro' };
  data.lastName = 'Molina';
  expect(data).toEqual({ name: 'Pedro', lastName: 'Molina' });
});

test('test obj', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('Booleans', () => {
  const data = null;
  expect(true).toBe(true);
  expect(false).toBe(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
  expect(data).not.toBeUndefined();
});

test('String', () => {
  expect('texto string').toMatch(/str/);
});

test('list / Arrays', () => {
  const Arreglo = [1, 2, 3];
  expect(Arreglo).toContain(3);
});
