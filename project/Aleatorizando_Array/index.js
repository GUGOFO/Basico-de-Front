//Fisher-Yates algoritimo

const cartas = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
shuffle(cartas);

console.log(cartas);

function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const aleatorio = Math.floor(Math.random() * (i + 1));

        [array[i], array[aleatorio]] = [array[aleatorio],array[i]];
    }
}