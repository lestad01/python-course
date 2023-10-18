# копирование списка
my_cars = ['BMV', 'Mercedes']

# копирование по ссылке
# не желательный метод копирования
copied_cars = my_cars

copied_cars.append('Ford')

print(copied_cars)


print(id(my_cars) == id(copied_cars))


# верный метод копирования
# 1 вариант [:] - создает новый объект
new_copied_cars = my_cars[:]
new_copied_cars.append('Audi')

print(id(my_cars) == id(new_copied_cars))


# 2 вариант метод списков copy
another_copied_cars = my_cars.copy()
another_copied_cars.append('Folkswagen')

print(id(my_cars) == id(another_copied_cars))
