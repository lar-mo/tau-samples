def add():
    a = float(input("Enter a number. "))
    b = float(input("Enter another number. "))
    print(a + b)


def subtract():
    a = float(input("Enter a number. "))
    b = float(input("Enter another number. "))
    print(a - b)


def multiply():
    a = float(input("Enter a number. "))
    b = float(input("Enter another number. "))
    print(a * b)


def divide():
    a = float(input("Enter a number. "))
    b = float(input("Enter another number. "))
    print(a / b)


choice = input("Please type +, -, *, / ")
if choice == "+":
    add()
elif choice == "-":
    subtract()
elif choice == "*":
    multiply()
elif choice == "/":
    divide()
else:
    print("That is not one of the available choices.")
