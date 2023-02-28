const Person = require('./06_person');

describe('Test for Person', () => {
  let person;
  beforeEach(() => {
    person = new Person('jsue', 30, 1.75);
  });
  test('Should return down', () => {
    person.weight = 30;
    const imc = person.calcIMC();
    expect(imc).toBe('down');
  });
  test('Should return normal', () => {
    person.weight = 50;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
