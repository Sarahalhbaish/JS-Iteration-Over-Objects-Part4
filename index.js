const cars = [
    {
      "id": 401,
      "make": "Toyota",
      "model": "Camry",
      "year": 2021,
      "color": "Blue"
    },
    {
      "id": 402,
      "make": "Honda",
      "model": "Civic",
      "year": 2020,
      "color": "Silver"
    },
    {
      "id": 403,
      "make": "Ford",
      "model": "Mustang",
      "year": 2019,
      "color": "Red"
    },
    {
      "id": 404,
      "make": "Chevrolet",
      "model": "Tahoe",
      "year": 2022,
      "color": "Black"
    },
    {
      "id": 405,
      "make": "Nissan",
      "model": "Altima",
      "year": 2020,
      "color": "White"
    }
  ];

  
/* *********************************************************************************** */


/* ----------------- Q.1 ----------------- */
function getCarMake(car) {
    return car.make;
  }
//   console.log(getCarMake(cars[0]));

  
/* ----------------- Q.2 ----------------- */
function isCarColorMatching(car, color) {
    if (car.color === color)
        return  true;
    else return false;
  }
//   console.log(isCarColorMatching(cars[1], "Blue"));


/* ----------------- Q.3 ----------------- */
function addCar(cars, car) {
    cars.push(car);
    return cars;
  }
  
  const newCar = {
    "id": 406,
    "make": "Kia",
    "model": "Sorento",
    "year": 2021,
    "color": "Green"
  };
  
//   console.log(addCar(cars, newCar));


/* ----------------- Q.4 ----------------- */
function countCarsMadeInYear(cars, year) {
    let count = 0;
    cars.forEach(element => {
        if (element.year == year)
            count++;
    });
    return count;
  }
//   console.log(countCarsMadeInYear(cars, 2020));


/* ----------------- Q.5 ----------------- */
function removeCarById(cars, id) {
    const index = cars.findIndex(num => num.id === id);
    cars.splice(index,1);
    return cars;
}
//   console.log(removeCarById(cars, 404));
  

/* ----------------- Q.6 ----------------- */

function updateCarColor(cars, id, newColor) {
    const index = cars.findIndex(car => car.id == id);
    if (index != null){
        cars[index].color = newColor;
        return cars[index];
    }
    return "No Car Found";
}
  console.log(updateCarColor(cars, 401, "Yellow"));