const oi = function(){
    console.log("oii");
}

oi();

setTimeout(oi,3000); //demora x segundos paraenviar

setTimeout(function(){
    console.log("nada aqui chefe")
}, 5000); //esse tempo é desde o começo da pagina, ent n continua dps do anterior 3 seg

//isso oq fizemos foi basicamente passar uma função diretamente para a entrada, foda

