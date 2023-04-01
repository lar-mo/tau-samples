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

class Enemy(Person):
    def __init__(self, weapon, fname, lname, health, status):
        super().__init__(fname, lname, health, status)
        self.weapon = weapon

    def introduce(self):
        print("You are my mortal enemy!!!")

    def hurt(self, other):
        "some description"
        if self.weapon == "rock":
            other.health -= 10
        elif self.weapon == "stick":
            other.health -= 5
        print(other.health)

    def insult(self, other):
        if other.health <= 80:
            print("{}, you are tired and weak".format(other.fname))

    def steal(self, other):
        print("ha ha ha, {}, I have your stuff!".format(other.fname))
        if other.status == True:
            other.status = False

Alex = Enemy('rock', 'Alex', 'Van Halen', 75, status = False)
# Alex.hurt(Larry)

# Alex.insult(Moe)

# Alex.steal(Curly)

# Larry.steal(Alex)

Larry.introduce()
Alex.introduce()
