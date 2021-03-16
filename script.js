//genero numero casuale
function randomNumbBtween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}

alert("ricordati i seguenti 5 numeri");

//genero i numeri random, li salvo in un array, li faccio vedere al giocatore
var numeriMemory = [];
    i = 0;

while (i < 5) {

    var numeroRandom = randomNumbBtween(1, 100);

    if (!numeriMemory.includes(numeroRandom)) {
        numeriMemory.push(numeroRandom);
        i++
    }

}

console.log(numeriMemory);

var inizioGame = "i numerida ricordare sono: " + numeriMemory[0] + " " + numeriMemory[1] + " " + numeriMemory[2] + " " + numeriMemory[3] + " " + numeriMemory[4]
alert(inizioGame);

//faccio il conto alla rovescia 
var time = document.getElementById("count_down");
var start = 10;

var countDown = setInterval(
    function(){

        start -= 1;
        if (start == 0) {
            clearInterval(countDown);
        }
        time.innerHTML = start

}, 1000);