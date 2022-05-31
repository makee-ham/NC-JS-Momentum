const age = parseInt(prompt("How old are you?"));
// parseInt: string을 int로 변환

if (isNaN(age) || age < 0) {
    console.log("Please write a real positive number.")
} else if (age < 18) {
    console.log("You are too young to drink.")
} else if (age >= 18 && age <= 50) {
    console.log("You can drink.")
} else if (age > 50 && age <= 80) {
    console.log("How about exercising?")
} else {
    console.log("You can do whatever you want.")
}
// NaN: Not a Number
// isNaN: true - 숫자가 아님, false - 숫자임