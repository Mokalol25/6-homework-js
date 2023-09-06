const x1 = 10;
const x2 = 30;
const number = 45;

if (number < x1) {
    console.log(`Число ${number} знаходиться перед x1.`);
} else if (number > x2) {
    console.log(`Число ${number} знаходиться після x2.`);
} else if (number >= x1 && number <= x2) {
    console.log(`Число ${number} знаходиться від x1 перед x2 включно.`);
} else {
    console.log(`Число ${number} знаходиться перед x1 або після x2.`);
}