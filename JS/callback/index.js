/* Suponha que essa funcção demora pra crl, vai darmerda
pq o oi vai ir dps de tchau

function oiiii(){
    setTimeout(function() {
        console.log("oiiii");
    }, 3000);
}

function tchauuuu(){
    console.log("tcahuu");
}

oiiii();
tchauuuu();

*/

//agora o jeito pra deixar tudo em ordem;

function oiiii(callback){
    console.log("oi");
    callback();
}

function tchauuuu(){
    console.log("tcahuu");
}

oiiii(tchauuuu);


