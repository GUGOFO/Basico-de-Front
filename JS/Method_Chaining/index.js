//Maneira Burra
/*
    let usarname = window.prompt("Coloque seu nome aq");

    usarname = usarname.trim();
    let letter = usarname.charAt(0);
    letter = letter.toUpperCase();

    let extraChars = usarname.slice(1);
    extraChars = extraChars.toLowerCase();
    usarname = letter + extraChars;

    console.log(usarname);
 */

//manira foda

let usarname = window.prompt("Coloque seu nome aq");

usarname = usarname.trim().charAt(0).toUpperCase() + usarname.trim().slice(1).toLowerCase();
console.log(usarname);

//Paia pq fica extremamente n legivel, eu faria assim:

let primeira_letra = usarname.trim().charAt(0).toUpperCase();
let resto_do_usarneme = usarname.trim().slice(1).toLowerCase();

usarname = primeira_letra + resto_do_usarneme;