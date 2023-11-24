# функция - блок кода
# который можно выполнять многократно
def sum(a, b):
    c = a + b
    print(c)


print(type(sum))

# каждая функция - это
# экземпляр класса function

# функция возвращает NONE
# если нет ключевого слова
# RETURN

# name = input("Enter your name: ")
# print(name)


# функция dir

# name = 'Alex'
# print(dir(name))
# print(name.upper())


# print(dir(__builtins__))

# функция input

# name = input("Enter your name: ")


# print(name.capitalize())


# самая короткая функция pass
def my_func():
    pass  # ключевое слово используется когда функция нужно не знаем для чего


print(my_func())


# передача неизменяемых объектов
# в функцию
def my_fn(a, b):
    a = a + 1
    c = a + b
    return c


num_one = 10
num_two = 2

res = my_fn(num_one, num_two)
print(res)
print(num_one)

# передача изменяемых объектов
# в функцию

# изменяем внешний объект


# def increace_person_age(person):
#    person['age'] += 1
#    return person


# person_one = {
#    'name': 'Bob',
#    'age': 22
# }

# increace_person_age(person_one)
# print(person_one['age'])

# внутри функции не рекомендуется изменять
# внешние объекты

# как избегать изменения
# внешних объектов в функции
def increace_person_age(person):
    person_copy = person.copy()
    person_copy['age'] += 1
    return person_copy


person_one = {
    'name': 'Bob',
    'age': 22
}

new_person = increace_person_age(person_one)
print(new_person['age'])
print(person_one['age'])


# Задачка
def merge_lists_to_dict(first_list, second_list):
    new_list = dict(zip(first_list, second_list))
    return new_list


print(merge_lists_to_dict([1, 2, 0, 11], [True, 'Charlie', '86', 'Alex']))
