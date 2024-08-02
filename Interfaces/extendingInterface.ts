interface Interior {
  seats: number,
  auto: boolean,
}

interface Exterior {
  color: string,
  numOfDoors: number,
}

interface Car extends Interior, Exterior {
  model: string,
  year: number,
}

var car:Car = {
  model: "Vios",
  year: 2024,
  color: "Red",
  numOfDoors: 4,
  seats: 4,
  auto: true,
}
