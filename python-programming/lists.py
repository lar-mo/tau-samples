fruits = ["peaches", "pears", "apples"]
years = [3, '1990', 2.4, 987, '1984']
numbers = [5, 1928, 4, 17, 68, 2.55, 14.33]

# print(fruits, years)

# append - add item to list
# fruits.append("grapes")
# print(fruits)

# extend - concatenate two lists
# fruits.extend(years)
# print(fruits)

# remove - remove by exact match
# fruits.remove("apples")
# print(fruits)

# pop - remove by id - if no value, -1 is used
# fruits.pop(-2) #pears should be removed
# print(fruits)
# fruits.pop() #apples should be removed
# print(fruits)
# fruits.pop(len(fruits)-1) #apples should be removed
# print(fruits)

# sort - only with lists of like types
# print(numbers)
# numbers.sort()
# print(numbers)

# in - check membership
print("apple" in fruits) # False
print("apples" in fruits) # True
print(fruits.count("apples")) # 1
newlist = []
for i in range(1,4):
    fruits.append("apples")
fruits.extend(newlist)
print(fruits.count("apples")) # 4
print(fruits)
myset = set(fruits)
print(myset)
print(fruits.index("apples"))
