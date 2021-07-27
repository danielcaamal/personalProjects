import random
import time

def burbuja(lista):
    n = len(lista)
    if n > 1:
        for i in range(n-1):                                       
            for j in range(n - i - 1):                             
                if lista[j] > lista[j+1]:
                    lista[j], lista[j+1] = lista[j+1], lista[j]
    return lista 

def seleccion(lista):
    n = len(lista)
    current_minimum = 0
    if n > 1:
        for i in range(0, n-1):
            current_minimum = i
            for j in range(i+1,n):
                if lista[j] < lista[current_minimum]:
                    current_minimum = j
            lista[i], lista[current_minimum] = lista[current_minimum], lista[i]
    return lista


def insercion(lista):
    n = len(lista)
    if n > 1:
        for i in range(1, n):
            for j in range(i,0,-1):
                if lista[j] < lista[j-1]:
                    lista[j], lista[j-1] = lista[j-1], lista[j]
                else:
                    break
    return lista


def mezcla(lista):
    if len(lista) > 1:
        medio = len(lista) // 2
        izquierda = lista[:medio]
        derecha = lista[medio:]
        print(f'{izquierda} {"*"*5} {derecha}')
        # Llamada recursiva en cada mitad
        mezcla(izquierda)
        mezcla(derecha)

        # Iteradores para recorrer ambas sublistas
        i = 0
        j = 0
        # Iterador para la lista principal
        k = 0

        while i < len(izquierda) and j < len(derecha):
            if izquierda[i] < derecha[j]:
                lista[k] = izquierda[i]
                i += 1
            else:
                lista[k] = derecha[j]
                j += 1
            
            k += 1
        
        while i < len(izquierda):
            lista[k] = izquierda[i]
            i += 1
            k += 1
        
        while j < len(derecha):
            lista[k] = derecha[j]
            j += 1
            k += 1
        print('Izquierda: ', izquierda,"\n" ,"---"*5)
        print('Derecha: ', derecha,"\n" ,"---"*5)
        print('Lista: ', lista,"\n" ,"***"*5)

    return lista


def getTime(function):
    def wrapper(array):
        comienzo = time.time()
        function(array)
        final = time.time()
        print(final - comienzo)
    return wrapper

@getTime
def b(array):
    print("\nOrdenamiento por burbuja:\n",burbuja(array))

@getTime
def s(array):
    print("\nOrdenamiento por selección:\n", seleccion(array))

@getTime
def i(array):
    print("\nOrdenamiento por inserción:\n", insercion(array))

@getTime
def m(array):
    print("\nOrdenamiento por mezcla:\n", mezcla(array))


def run():
    #tamaño de lista
    n = int(input("Tamaño de la lista: "))
    arr = list([random.randint(0,1000) for i in range(n)])
    print("Lista original:\n",arr)
    
    b(arr.copy())
    s(arr.copy())
    i(arr.copy())
    m(arr.copy())
    
    

if __name__ == "__main__":
    run()