def user_info(name, age, city):
	'''This functions prints name, age, city
	from an argument provided to the function.
	'''

	print("{} is {} years old, from {}.".format(name, age, city))

#user_info("Larry", 51, "Portland")
#user_info(34, "New York") # TypeError: user_info() missing 1 required positional argument: 'city'

def user_info2(name, age=19, city="Seattle"):
	print("{} is {} years old, from {}.".format(name, age, city))

#user_info2("Micah")
#user_info2("Micah", age=55, city="Eugene")

def application(fname, lname, email, company, *args, **kwargs):
	print("{} {} works at {}. Her email is {}. Salary is {}, and hire date was {}".format(fname, lname, company, email, args[0], kwargs["hire_date"]))
	# print("{} {} works at {}. Her email is {}.".format(fname, lname, company, email))

application(
	"Rob",
	"Smith",
	"user@email.com",
	"Vandalay Industries",
	65000,
	hire_date="Sept 2020"
)
