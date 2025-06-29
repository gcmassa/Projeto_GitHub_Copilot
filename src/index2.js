// Detectar a bandeira do cartão
function detectarBandeira(numero) {
  numero = numero.toString();

  if (numero.startsWith('4')) return 'Visa';
  if (/^5[1-5]/.test(numero) || /^222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720/.test(numero)) return 'MasterCard';
  if (/^(4011|4312|4389|5067|6277)/.test(numero)) return 'Elo';
  if (/^3[47]/.test(numero)) return 'American Express';
  if (/^6011/.test(numero) || /^65/.test(numero) || /^64[4-9]/.test(numero)) return 'Discover';
  if (/^6062/.test(numero)) return 'Hipercard';

  return 'Desconhecida';
}

// Algoritmo de Luhn
function validarLuhn(numero) {
  let soma = 0;
  let invertido = numero.split('').reverse();

  for (let i = 0; i < invertido.length; i++) {
    let n = parseInt(invertido[i]);
    if (i % 2 !== 0) {
      n *= 2;
      if (n > 9) n -= 9;
    }
    soma += n;
  }

  return soma % 10 === 0;
}

// 🧪 Teste
const cartao = '4111222233334444'; // Visa fictício
console.log("Bandeira:", detectarBandeira(cartao));
console.log("Válido pelo Luhn?", validarLuhn(cartao));