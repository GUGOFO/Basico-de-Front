let dia = "e";

switch(dia){
    case 1:
        console.log("É segunda");
        break;
    case 2:
        console.log("É terça");
        break;
    case 3:
        console.log("É quarta");
        break;
    case 4:
        console.log("É quinta");
        break;
    case 5:
        console.log("É sexta");
        break;
    case 6:
        console.log("É sabado");
        break;
    case 7:
        console.log("É domingo");
        break;
    default:
        console.log(`${dia} infelizmente n é pizza :(`);
}

let nota = 94;
let mensao;

switch(true){
    case nota >= 90:
        mensao = "SS";
        break;
    case nota >= 70:
        mensao = "MS";
        break;
    case nota >= 50:
        mensao = "MM";
        break;
    case nota >= 30:
        mensao = "MI";
        break;
    case nota >= 1:
        mensao = "II";
        break;
    case nota >= 0:
        mensao = "SR";
        break;
    default:
        mensao = "Ta fumado? q nota é essa fio??";
}

console.log(mensao);