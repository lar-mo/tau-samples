const cookie = {
  name: "Chocolate Chip",
  isGlutenFree: false,
  eatCookie: function () {
    console.log("I am eating " + this.name);
  }
  // "+Yummy": true
}; // object literal

// cookie.name = "Chip Chocolate";
// cookie.isGlutenFree = true;
// console.log(cookie["+Yummy"]);
// console.log(cookie+Yummy); // error
// console.log(cookie);

class Cookie {
  constructor(name, isGlutenFree) {
    this.name = name;
    this.isGlutenFree = isGlutenFree;
  }

  eatCookie() { // class method
    console.log("I am eating " + this.name);
  }
} // first letter is capital
const myCookie = new Cookie("Iced Oatmeal", false);

// console.log(myCookie.name);
// console.log(myCookie["name"]);
cookie.eatCookie();
myCookie.eatCookie();
