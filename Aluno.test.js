const Aluno = require('./Aluno');

test('calcular a média', () => {
  const aluno = new Aluno('João', [7, 9]);
  expect(aluno.calcularMedia()).toBe(8);
});

test('retornar menção', () => {
  const aluno = new Aluno('Maria', [9, 9]);
  expect(aluno.obterMencao()).toBe('SS');
});

test('retorna "aprovad" quando a menção é SS', () => {
  const aluno = new Aluno('Carlos', [9, 9]);
  expect(aluno.statusAprovacao()).toBe('aprovad@');
});

test('retorna "reprovado" quando a menção é MI', () => {
  const aluno = new Aluno('Ana', [4, 5]);
  expect(aluno.statusAprovacao()).toBe('reprovad@');
});

test('lança erro quando a média é maior que 10', () => {
  const aluno = new Aluno('Pedro', [11, 10]);
  expect(() => aluno.calcularMedia()).toThrow('Média acima da máxima permitida!');
});