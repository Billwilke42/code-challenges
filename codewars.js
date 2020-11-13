// Multiples of 3 or 5

function solution(number){
  let value = 0;
  for (var i = (number - 1); i > 0; i--) {
    if(i % 5 === 0) {
      value += i
    } else if(i % 3 === 0) {
      value += i
    } 
  }
  return value
}

// Who likes it?

function likes(names) {
  // TODO
  if (names.length === 0) return "no one likes this";
  else if (names.length === 1) return `${names[0]} likes this`;
  else if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
  else if (names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  else if (names.length > 3){
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

// Multiplication Table

multiplicationTable = function(size) {
  let incrementer = 1
  let counter = 1;
  let arr = [];
  let arr2 = []
  for (var i = 1; i <= size * size; i++) {
   if (incrementer <= size * size) {
     arr.push(incrementer)
     incrementer = incrementer + counter
     if (arr.length === size) {
       arr2.push(arr)
       arr = []
       counter++
       incrementer = counter
     }
   }
  }
  return arr2
}

//Stray numbers 

function stray(numbers) {
  let arr1=[]
  let arr2=[]
  for(var i = 0; i < numbers.length; i++) {
    if(i === 0) {
      arr1.push(numbers[i])
    } else if (i > 0 && arr1.includes(numbers[i])) {
      arr1.push(numbers[i])
    } else {
      arr2.push(numbers[i])
    }
  }
  if(arr2.length === 1) {
    return arr2[0]
  } else {
    return arr1[0]
  }
}

// Reverse Words

function reverseWords(str) {
  let arr = str.split(' ');
  
  return arr.map(word => {
    return word.split('').reverse().join('');
  }).join(' ');
}

