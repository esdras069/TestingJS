describe('Set', () => {
  beforeAll(() => {
    console.log('befireALL');
  });
  afterAll(() => {
    console.log('After all 1');
  });
  beforeEach(() => {
    console.log('Before Each = Antes de cadda una');
  });
  afterEach(() => {
    console.log('After each = Despues de cada prueba');
  });

  test('Case 1', () => {
    expect(1 + 1).toBe(2);
    console.log('Este es el caso1');
  });
  test('Case 2', () => {
    expect(3 - 2).toBe(1);
    console.log('Este es el caso2');
  });

  describe('Describe 2', () => {
    test('Describe Case 1', () => {
      expect(1 + 1).toBe(2);
      console.log('Este es el caso1 dentro de otro describe');
    });
    test('Describe Case 2', () => {
      expect(3 - 2).toBe(1);
      console.log('Este es el caso1 dentro de otro describe');
    });
    beforeAll(() => {
      console.log('befireALL');
    });
    afterAll(() => {
      console.log('AfterAll');
    });
  });
});
