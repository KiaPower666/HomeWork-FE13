// Создать функцию «переключатель» toggleMe(), которая при вызове чередует возвращаемые булевы значения (true, false).

function getToggleMe() {
  let last = true;
  return function () {
    last = !last;
    return last;
  };
}

let toggleMe = getToggleMe();
console.log(toggleMe());
console.log(toggleMe());
console.log(toggleMe());
console.log(toggleMe());

//   Создать функцию counter(), которая способна считать количество своих вызовов (возвращает число).
//    Если передать в эту функцию число как аргумент, то она должна возвращать счетчик начиная с этого числа.

function counter() {
  let count = 0;
  return function (num) {
    if (typeof num === "number") {
      count = num;
    }
    count++;
    return count;
  };
}

const count = counter();

console.log(count());
console.log(count());
console.log(count(6));
console.log(count());
console.log(count(11));
console.log(count());
console.log(count());
console.log(count());

// Создать функцию classNameEditor(), задача которой "управлять" css-классами.
// Функция должна принимать строку с названием css-класса и булево значние.
// Если булево значение true, то функция должна добавлять переданный css-класс, если false, то найти и удалить значение из css-класса.
// Функция всегда должна возвращать текущее значение css-класса.

function getclassNameEditor() {
  const div = document.createElement("div");
   return function (nameCSS, changes) {
    if (changes === true) {
          div.classList.add(nameCSS);
        } else {
          div.classList.remove(nameCSS);
        }
        console.log(div.outerHTML);
        console.log(div.classList.contains(nameCSS));
   }

}

const classNameEditor = getclassNameEditor();

classNameEditor();
classNameEditor("test", true)
classNameEditor("test", true)
classNameEditor("smth", true)
classNameEditor("test", false)
classNameEditor("test", false)


// Callbacks

// Создать функцию checkLogin, которая принимает 4 параметра. 1 параметр - это логин, введенный пользователем,
//  2 – правильный логин, 3 – callback, который вызовется если логин верный, 4 – callback, который вызовется если логин ложный.

// function checkLogin(login, correctLogin, callback, notCallback) {
//   if (login === correctLogin) {
//     callback();
//   } else {
//     notCallback()
//   }
// }

// const сorrectlogin = () => {
//   console.log('Верный логин');
// }

// const uncorrectLogin = () => {
//   console.log('Не верный логин');
// }

// checkLogin(prompt(), 'User', сorrectlogin, uncorrectLogin)

// Написать функцию которая принимает массив строк (имена) и два колбэка.
//  Функция добавляет к каждому элементу массива фамилию "Smith" после чего передает получившийся массив в первый колбэк.
//  Когда первый колбэк отработает, возвращеное им значение нужно передать во второй колбэк.
// 1ый колбэк: это функция которая принимает массив строк, добавляет к каждой строке "Mr. " и возвращает получившийся массив.
//  2ой колбэк: функция которая принимает массив строк и выводит через alert() каждый элемент массива.

const arrayOfNames = ["Jane", "Alex", "Valerchik", "Sacha", "Anna"];
let lastName = [];

function NameArray(arr, callback, callback2) {
    return lastName = arr.map((item) => {
      return item + " Smith";
  });
}

const stringtAdder = lastName.map((item) => {
  return "Mr." + item;
});

const arrayOutput = () => {
  for (const key in stringtAdder) {
    if (Object.hasOwnProperty.call(stringtAdder, key)) {
      alert(stringtAdder[key]);
    }
  }
};

const result = NameArray(arrayOfNames, stringtAdder, arrayOutput())
// const result = NameArray(arrayOfNames, stringtAdder, arrayOutput())


// новый массив через константу

// console.log(stringtAdder, arrayOutput());

// Arrays

// Дан массив [1,1,1,4,4,5,1,6,6,74,74,74,3].
//  Написать функцию, которая вернет массив только из тех чисел, которые повторялись в исходном.

// const arr = [1, 1, 1, 4, 4, 5, 1, 6, 6, 74, 74, 74, 3];
// let uniq = 0;
// const uniqSet = new Set();
// function searchForDuplicates(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < i; j++)
//       if (arr[j] === arr[i]) {
//         uniqSet.add(arr[i]);
//         uniq = Array.from(uniqSet);
//       }
//   }
// }
// searchForDuplicates(arr);
// console.log(uniq);

// Cоздать случайный двумерный массив (вложенные массивы разной длины) из 8 элементов.
//  Обработать массив reduce() и вернуть тот массив сумма элементов которого наибольшая.

const array = [
  [5, 3],
  [10, 16, 25, 42],
  [1, 2, 3, 4, 5],
  [151, 2, 84, 4, 69],
  [99, 111, 22, 166],
  [18, 36, 48, 64, 25, 56, 1, 15, 3],
  [10, 20, 30, 40, 50],
  [0, 6, 12, 18, 24, 46, 15, 5],
];

const calculator = (sum, value) => sum + value;

const maxArr = array.reduce((otvetArr, curentArr)  =>{
  const maxOtvetArr = otvetArr.reduce(calculator,0)
  const maxCurentArr = curentArr.reduce(calculator,0)

  return maxOtvetArr > maxCurentArr ? otvetArr : curentArr
})

console.log(maxArr);

// Дан случайный массив чисел. С помощью метода .filter() отфильтруйте массив так,
//  чтобы в новый массив вошли только четные двухзначные числа из исходного.

let arrayNew = [1, 23, 43, 34, 10, 19, 4, 5, 9, 88, 74];

const filteredArray = arrayNew.filter((item) => {
  if (item > 9 && item % 2 === 0) {
    return true;
  } else {
    return false;
  }
});
console.log(filteredArray);

// Дан массив объектов:
// Игроки должны быть сгруппированы по командам в соответствующие поля объекта fbPlayersByTeams.
//  Под {} в примере имеется ввиду полный объект игрока (такая запись сделана для упрощенного понимания примера)

const fbTeam = [
  {
    playerName: "Messi",
    team: "Barcelona",
  },
  {
    playerName: "Suarez",
    team: "Barcelona",
  },
  {
    playerName: "Ronaldo",
    team: "Juventus",
  },
  {
    playerName: "Buffon",
    team: "Juventus",
  },
  {
    playerName: "Valerchik",
    team: "Vedrich97",
  },
  {
    playerName: "Gonsalo",
    team: "Juventus",
  },
  {
    playerName: "Pedro",
    team: "Chelsea",
  },
  {
    playerName: "Zuma",
    team: "Chelsea",
  },
  {
    playerName: "Rico",
    team: "PSG",
  },
];


const fbPlayersByTeams = fbTeam.reduce((accumulator, currentValue) =>{
  if (!accumulator[currentValue.team]) {
    accumulator[currentValue.team] = [];
  }
  accumulator[currentValue.team].push(currentValue)
  return accumulator;
}, {})

console.log(fbPlayersByTeams);