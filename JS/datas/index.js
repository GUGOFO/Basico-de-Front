const data = new Date();

console.log(data);

//Tambem podemos mandar coisas especificas para o objeto de data

// Date(ano, mes, dia, hora, minuto, segundo, milesimo)
const dataDeNascimneto = new Date(2006, 4, 17, 12, 32, 21, 0);
console.log(dataDeNascimneto);

const inicioDeTudo = new Date(0); //Voce pode aumentar o tempo desde de 1969, troque o zero
console.log(inicioDeTudo);

//voce tambem pode extrair dados especificos

const ano = data.getFullYear();
console.log(ano);

console.log(data.getDate()) //existe varias, so procura

//Voce tambem pode colocar os dias para algum que voce queira
data.setFullYear(1)
console.log(data) //Da pra mudar tudo, n ovu fazer por preguiça pura <3


//Tambem da pra fazer matematica com datas

const data1 = new Date(2026, 2, 5);
const data2 = new Date();

console.log(data1);
console.log(data2);

if(data1 > data2){
    console.log("VOCE TA NO FUTURO MEU")
}