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

