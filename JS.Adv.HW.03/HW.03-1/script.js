// Завдання 1.

// Напишіть функцію яка приймає одне число. 
// При першому виклику, вона його запам'ятовує, при другому - сумує з попереднім і так далі. 
// Для виконання цього завдання використайте замикання. 
// Наприклад:
// sum(3) = 3
// sum(5) = 8
// sum(228) = 236

function f() {
    let n = 0;
    function inner(x) {
        n += x;
        console.log(`sum(${x}) =`, n);
    }
    return inner
}

let sum = f();
sum(3);
sum(5);
sum(228);
