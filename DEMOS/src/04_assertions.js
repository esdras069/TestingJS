// matchers

test('test obj', () => {
  const data = { name: 'Pedro' };
  data.lastName = 'Molina';
  expect(data).toEqual({ name: 'Pedro', lastName: 'Molina' });
});
