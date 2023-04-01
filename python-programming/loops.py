# fruits = ["apple", "orange", "pear"]
# for fruit in fruits:
#     if fruit == "pear":
#         article = "a"
#     else:
#         article = "an"
#     print("Would you like {} {}".format(article, fruit))

fruits = ['apple', 'orange', 'pears', 'cherries', 'grapes']


# for fruit in fruits:
    # print("Would yo like {}".format(fruit))


# for i in range(len(fruits)):
#     print("Would yo like {}".format(fruits[i]))


# temp = 37
# while temp > 32:
#     print("the water is not frozen")
#     temp -= 1
# print("water becomes ice at 32 degrees Fahrenheit")

# temp_f = 40
# while temp_f > 32:
#     print("water becomes ice at {} degrees Fahrenheit".format(temp_f))
#     temp_f -= 1

#while controls
# break - go to next
# continue - skips current, on to next
# pass - skips any with this (testing?)

# temp_f = 40
# while temp_f > 32:
#     print("water becomes ice at {} degrees Fahrenheit".format(temp_f))
#     temp_f -= 1
#     if temp_f == 34:
#         break

# temp_f = 40
# while temp_f > 32:
#     temp_f -= 1
#     if temp_f == 37:
#         print("skipping 37")
#         continue
#     print("water becomes ice at {} degrees Fahrenheit".format(temp_f))

for i in range(1,11):
    if i == 7:
        # print("skipping 7")
        continue
    print("1. The number is {}".format(i))

for number in range(1,11):
    if number == 3:
        # print("skipping 3")
        pass
    else:
        print("2. The number is {}.".format(number))
