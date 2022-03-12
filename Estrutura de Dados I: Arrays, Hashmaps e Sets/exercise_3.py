estudantes = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
lista1_entregues = ['a', 'd', 'g', 'c']
lista2_entregues = ['c', 'a', 'f']

set_estudantes = set(estudantes)
set_lista1_entregues = set(lista1_entregues)
set_lista2_entregues = set(lista2_entregues)

print(set_estudantes.difference(set_lista1_entregues))
print(set_lista1_entregues.intersection(set_lista2_entregues))
print(set_lista1_entregues.union(set_lista2_entregues))
print(set_estudantes.difference(set_lista1_entregues.union(set_lista2_entregues)))