def detectar_bandeira(numero):
    numero = str(numero)
    prefixos = {
        'Visa': lambda n: n.startswith('4'),
        'MasterCard': lambda n: 51 <= int(n[:2]) <= 55 or 2221 <= int(n[:4]) <= 2720,
        'Elo': lambda n: n.startswith(('4011', '4312', '4389', '5067', '6277')),
        'American Express': lambda n: n.startswith(('34', '37')),
        'Discover': lambda n: n.startswith('6011') or n.startswith('65') or 644 <= int(n[:3]) <= 649,
        'Hipercard': lambda n: n.startswith('6062'),
    }
    for bandeira, regra in prefixos.items():
        try:
            if regra(numero):
                return bandeira
        except:
            continue
    return 'Desconhecida'

def validar_luhn(numero):
    numero = [int(d) for d in str(numero)][::-1]
    total = 0
    for i, d in enumerate(numero):
        if i % 2 == 1:
            d *= 2
            if d > 9:
                d -= 9
        total += d
    return total % 10 == 0

# 🧪 Testando
cartao = '4111222233334444'  # Visa
print("Bandeira:", detectar_bandeira(cartao))
print("Válido pelo Luhn?", validar_luhn(cartao))