function getCardBandeira(cardNumber) {
    const num = cardNumber.replace(/\D/g, '');

    // Visa: 13 or 16 digits, starts with 4
    if (/^4\d{12}(\d{3})?$/.test(num)) {
        return 'Visa';
    }
    // Visa 16 digits (explicit)
    if (/^4\d{15}$/.test(num)) {
        return 'Visa (16 dígitos)';
    }
    // MasterCard: 16 digits, starts with 51-55 or 2221-2720
    if (/^5[1-5]\d{14}$/.test(num) || /^2(2[2-9][1-9]|2[3-9]\d|[3-6]\d{2}|7[01]\d|720)\d{12}$/.test(num)) {
        return 'MasterCard';
    }
    // Elo: 16 digits, starts with 4011, 4312, 4389
    if (/^(4011|4312|4389)\d{12,15}$/.test(num)) {
        return 'Elo';
    }
    // American Express: 15 digits, starts with 34 or 37
    if (/^3[47]\d{13}$/.test(num)) {
        return 'American Express';
    }
    // Discover: 16 digits, starts with 6011, 65, or 644-649
    if (/^(6011\d{12}|65\d{14}|64[4-9]\d{13})$/.test(num)) {
        return 'Discover';
    }
    // Hipercard: 16 digits, starts with 6062
    if (/^6062\d{12,15}$/.test(num)) {
        return 'Hipercard';
    }
    return 'Desconhecida';
}

// Exemplos de uso:
console.log(getCardBandeira('4111111111111111')); // Visa (16 dígitos)
console.log(getCardBandeira('4011780000000000')); // Elo
console.log(getCardBandeira('340000000000009'));  // American Express
console.log(getCardBandeira('6011000000000004')); // Discover
console.log(getCardBandeira('6062825624254001')); // Hipercard
console.log(getCardBandeira('5500000000000004')); // MasterCard
