# Магические методы - это внутренние методы классов
# и они обычно не вызываются явно
print(bool)
print(dir(bool))

# __doc__ показывает что делает функция str
print(bool.__doc__)

# помощь о каждом методе
my_list = []
print(help(list.__eq__))
print(help(my_list.__eq__))
