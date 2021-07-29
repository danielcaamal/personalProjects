import random

def binary_search(array,target,low, high):
    if low > high:
        return False
    
    mid = ( low + high ) // 2
    
    if array[mid] == target:
        return True

    elif array[mid] < target:
        return binary_search(array, target, mid + 1, high)
    
    else:
        return binary_search(array, target, low, mid - 1)


def run():
    list1 = [random.randint(0,100) for i in range(10)]
    list1.sort()
    print(list1)
    
    found = binary_search(list1, int(input("Qué valor te gustaría encontrar? ")),0, len(list1)-1)
    print(found)

if __name__ == "__main__":
    run()