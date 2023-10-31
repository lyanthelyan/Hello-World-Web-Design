lista = ['Oi', 'Tchau', 'Cabeça']

for i in lista:
    print(i, end=' ')
    if i == 'Tchau':
        print('Sai', end='')
        continue

    