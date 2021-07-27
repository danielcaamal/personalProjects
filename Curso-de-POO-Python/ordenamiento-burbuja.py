import random

def ordenamiento_burbuja(lista):
    n = len(lista) #O(1)
    for i in range(n): #O(n)
        for j in range(0, n - i - 1): #O(n-1) => O(n)
            if lista[j] > lista[j+1]:
                lista[j], lista[j+1] = lista[j+1], lista[j]
    return lista #O(1)
# O(1) + O(n)*O(n-1) + O(1) => O(n)*O(n-1) => O(n)*O(n) => O(n**2)

def run():
    tamano_de_lista = int(input("De qué tamaño es la lista? "))
    lista = [random.randint(0,100) for i in range(tamano_de_lista)]
    print(lista)

    lista_ordenada = ordenamiento_burbuja(lista)
    print(lista_ordenada)

if __name__ == "__main__":
    run()