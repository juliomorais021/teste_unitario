// cpf.js

function validarCPF(cpf) {
    // Remove caracteres não numéricos
    const cpfLimpo = cpf.replace(/[^\d]/g, '');
  
    // Verifica se o CPF possui 11 dígitos
    if (cpfLimpo.length !== 11) {
      return false;
    }
  
    // Verifica se todos os dígitos são iguais (caso comum de CPF inválido)
    if (/^(\d)\1+$/.test(cpfLimpo)) {
      return false;
    }
  
    // Calcula os dígitos verificadores
    const calcularDigito = (parteCpf) => {
      let soma = 0;
      for (let i = 0; i < parteCpf.length; i++) {
        soma += parseInt(parteCpf[i]) * (parteCpf.length + 1 - i);
      }
      const resto = soma % 11;
      return resto < 2 ? 0 : 11 - resto;
    };
  
    const digito1 = calcularDigito(cpfLimpo.slice(0, 9));
    const digito2 = calcularDigito(cpfLimpo.slice(0, 9) + digito1);
  
    // Verifica se os dígitos calculados correspondem aos dígitos reais do CPF
    if (parseInt(cpfLimpo[9]) !== digito1 || parseInt(cpfLimpo[10]) !== digito2) {
      return false;
    }
  
    // Se todas as verificações passaram, o CPF é considerado válido
    return true;
  }
  
  module.exports = validarCPF;
  