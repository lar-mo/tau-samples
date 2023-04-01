# __init__.py
# sets attributes for an object at obj creation

# self variable
# instance of a class

class Person:
    def __init__(self, fname, lname, health, status):
        "initialize attributes to be used in/available for all\
        class methods in this class, and for class objects created \
        by this class."

        self.fname = fname
        self.lname = lname
        self.health = health
        self.status = status

    def introduce(self):
        "All people introduce themselves."
        print("Hello, my name is {} {}.".format(self.fname, self.lname))

    def emote(self):
        if emotion == 1:
            print("{} is happy today".format(self.fname))
        elif emotion == 2:
            print("{} is sad today".format(self.fname))

    def status_change(self):
        if self.health == 100:
            print("{} is totally healthy.".format(self.fname))
        elif self.health >= 76:
            print("{} is a little tired today.".format(self.fname))
        elif self.health >= 50:
            print("{} feels unwell.".format(self.fname))
        elif self.health >= 40:
            print("{} goes to the doctor.".format(self.fname))
        else:
            print("{} is unconscious.".format(self.fname))

Larry = Person("Larry", "Smith", 96, status=True)
Moe = Person("Moe", "Smith", 75, status=False)
Curly = Person("Curly", "Smith", 40, status=True)

print("is {} my friend? {}".format(Larry.fname, Larry.status))
print("is {} my friend? {}".format(Moe.fname, Moe.status))

Larry.introduce()
Moe.introduce()
Curly.introduce()

Larry.status_change()
Moe.status_change()
Curly.status_change()

Larry.emote()
Moe.emote()
Curly.emote()
