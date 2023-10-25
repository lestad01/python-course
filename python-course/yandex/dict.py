# словарь набор данных с типом ключ:значение
my_motorbike = {
    'brand': 'Ducati',
    'price': 25000,
    'engine_vol': 1.2
}
# порядок элементов в словаре не имеет значения
# индексо у элементов в словаре нет
other_motorbike = {
    'engine_vol': 1.2,
    'price': 25000,
    'brand': 'Ducati',
}
print(id(my_motorbike) == id(other_motorbike))
print(my_motorbike == other_motorbike)

my_motorbike['price'] = 6000
print(my_motorbike)

print(other_motorbike['brand'])
# print(other_motorbike[brand])
my_motorbike['is_new_key'] = True
print(my_motorbike)

del my_motorbike['is_new_key']
print(my_motorbike)
