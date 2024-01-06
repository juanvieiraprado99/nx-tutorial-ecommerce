import { soma } from './soma';

describe('soma', () => {
  it('1 + 1 deve ser igual a 2', () => {
    const valor = soma(1, 1);
    expect(valor).toBe(3);
  });

  it('2 + 2 não deve ser igual a 5', () => {
    const valor = soma(2, 2);
    expect(valor).not.toBe(5);
  });
});
