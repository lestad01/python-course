# неизменяемые объекты
first_num = 10
second_num = first_num

print(id(first_num))  # 2147881910800
print(id(second_num))  # 2147881910800

second_num += 5
print(second_num)  # 15
print(first_num)  # 10


print(id(first_num))  # 2293144814096
print(id(second_num))  # 2293144814256


# Изменяемые объекты в памяти
my_list = [1, 2, 3]
print(id(my_list))
# 1573091634304

other_list = [1, 2, 3]
other_list.append(4)
# изменение изменяемых объектов
# не отражается на другом
print(other_list)
print(my_list)

print(id(other_list))
# 2727204802944

# print(id([1, 2, 3]))


# example 2

info = {
    'name': 'Bogdan',
    'is_instructor': True
}

info_copy = info
info['reviews_qty'] = 5
info_copy['reviews_qty'] = 100

print(info['reviews_qty'])
print(info_copy['reviews_qty'])

# --------------
my_info = {
    'name': 'Bogdan',
    'is_instructor': True
}
other_info = {
    'name': 'Bogdan',
    'is_instructor': True
}
other_info['rating'] = 5.0
print(my_info)
print(other_info)

# после копирования изменяемых
# объектов изменения
# отражаются на всех копиях
