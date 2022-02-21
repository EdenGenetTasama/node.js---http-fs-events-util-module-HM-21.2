//1

const OnlyDoubleNum = () => {
  for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
};

// OnlyDoubleNum();

////////////////////////////////////////////

//2:

const OnlyDoubleInArray = () => {
  const arrayOfNumbers = [];
  for (let i = 0; arrayOfNumbers.length < 16; i++) {
    const randomNumber = Math.floor(Math.random() * 11);
    if (randomNumber % 2 == 0) {
      arrayOfNumbers.push(randomNumber);
    }
  }
  console.log(arrayOfNumbers);
};

// OnlyDoubleInArray();

//////////////////////////////////////////////////////

//4:
const fs = require("fs");

let children = {
  name: "childrenOne",
  age: 4,
  isOnClass: true,
};

// fs.writeFile('child.txt' , JSON.stringify(children), ()=>{{}} )

//////////////////////////////////////////////////////////

//5

const arrayOfObjchildrens = [
  {
    name: "childrenOne",
    age: 4,
    isOnClass: true,
  },
  {
    name: "childrenTwo",
    age: 6,
    isOnClass: false,
  },
  {
    name: "childrenThree",
    age: 9,
    isOnClass: true,
  },
  {
    name: "childrenFour",
    age: 2,
    isOnClass: false,
  },
];

// fs.writeFile('arrayOfChildrens.json' ,JSON.stringify(arrayOfObjchildrens), ()=>{})

///////////////////////////////////////////////
//7:

const Only7Divide = () => {
  const arrayOf100 = [];
  for (let i = 0; arrayOf100.length < 100; i++) {
    const randomNumbers = Math.floor(Math.random() * 101);
    if (randomNumbers % 7 == 0) {
      arrayOf100.push(randomNumbers);
    }
  }

  fs.writeFile("DividedInto7.txt", arrayOf100.toString(), () => {});
};

// Only7Divide();

////////////////////////////////////////////
//8:

const DividedInto7Json = () => {
  const arrayOf100 = [];
  for (let i = 0; arrayOf100.length < 100; i++) {
    const randomNumbers = Math.floor(Math.random() * 101);
    if (randomNumbers % 7 == 0) {
      arrayOf100.push(randomNumbers);
    }
  }
  fs.writeFile('DividedInto7.json' , JSON.stringify(arrayOf100) , ()=>{})
};


// DividedInto7Json();


////////////////////////////////////////////////
//9:
