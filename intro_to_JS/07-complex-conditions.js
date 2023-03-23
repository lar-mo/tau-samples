// red
// 4 doors
// <$2000
const car = {
  carColor: 'red',
  numberOfDoors: 4,
  carPrice: 2000
}

if (car.carPrice < 2000 || (car.carColor === 'red' && car.numberOfDoors === 4)) {
  console.log("This is the one!");
} else {
  console.log("Let's keep looking!");
}
