"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  if (a == 0) {
     return "Ошибка, а = 0 недопустимое значение";
  }
  
  let D = Math.pow(b,2) - (4*a*c);
  
  if (D < 0) {
     return arr; 
  }

 else if (D == 0) {
    arr[0] = -b / (2 * a);
 }

  else if (D > 0) {
    arr[0] = (-b + Math.sqrt(D))/ (2 * a);
    arr[1] = (-b - Math.sqrt(D))/ (2 * a);
    }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
