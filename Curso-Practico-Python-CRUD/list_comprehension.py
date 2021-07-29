list1 = list(range(100))
pares = [i for i in list1 if i%2 == 0]

list9 = [0, 1 ,3, 5, 7, 9]
list10 = [0, 1, 1]

def list_in_list(list1, list2):
    return True if len(set(list2).intersection(set(list1))) == len(set(list1)) else False

print(list_in_list(list10, list9))

student_uid = [1, 2, 3]
students = ['Juan', 'José', 'Larsen']

students_with_uid = {uid: student for uid, student in zip(student_uid, students)}
print(students_with_uid)

import random

random_numbers = [random.randint(1,3) for i in range(10)]
print(random_numbers)

#non_repeated = {number for number in random_numbers}
non_repeated = set(random_numbers)
print(non_repeated)