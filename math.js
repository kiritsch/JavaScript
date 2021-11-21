"use strict";

function getRandomInt(num) {
    return Math.floor(Math.random(num));
  }
  
  console.log(getRandomInt(7));

  if (num < 7){
      console.log("загаданное число больше");
  }

  if (num > 7){
    console.log("загаданное число меньше");
}

if (num > 7){
    console.log("Вы угадали");
} 

if (num = 0){
    console.log("выход из программы");
} 