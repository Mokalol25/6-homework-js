const name = prompt("Введьть ім'я");
const secondName = prompt("Введіть прізвище");
if (name.length > 4 && secondName.length > 5) {
    const sumOfLetters = name.length + secondName.length;
    console.log(`Сума літер імені та прізвища: ${sumOfLetters}`);
} else {
    console.log('ОЙ, неможливо виконати умову');
}