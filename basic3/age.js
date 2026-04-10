function checkAge(age) {
  if (age <=18) {
    return "Too young";
  }
  return "Access granted";
}

age=checkAge(19)
console.log(age)