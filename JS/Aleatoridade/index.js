let num_aleatorio = Math.ceil(Math.random() * 6);
//ou
num_aleatorio = Math.floor(Math.random() * 6) + 1;

//num aleatorio entre 1 e 6

console.log(num_aleatorio);


const min = 1;
const max = 3;

num_aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(num_aleatorio);
