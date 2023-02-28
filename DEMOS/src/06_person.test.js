/* AAA
  Arrange / Given
  Act / when
  Asert / then
*/
const Person = require('./06_person');

describe('Test for Person', () => {
  let person;
  // Arrange
  beforeEach(() => {
    person = new Person('jsue', 30, 1.75);
  });
  test('Should return down', () => {
    // Arrange
    person.weight = 30;
    // Act
    const imc = person.calcIMC();
    // Assert
    expect(imc).toBe('down');
  });
  test('Should return normal', () => {
    person.weight = 50;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
