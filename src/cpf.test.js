const validarCPF = require('./cpf');
// cpf.test.js


test('CPF válido deve retornar true', () => {
  expect(validarCPF('123.456.789-09')).toBe(true);
});

test('CPF inválido (tamanho diferente de 11 dígitos) deve retornar false', () => {
  expect(validarCPF('123.456.789')).toBe(false);
});

test('CPF inválido (todos os dígitos iguais) deve retornar false', () => {
  expect(validarCPF('111.111.111-11')).toBe(false);
});

test('CPF inválido (dígitos verificadores incorretos) deve retornar false', () => {
  expect(validarCPF('123.456.789-01')).toBe(false);
});
