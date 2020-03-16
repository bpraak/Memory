var marray = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', '+', '?', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', '+', '?'];
var tiles_flipped = 0;
var flipped_value = [];
var flipped_value_id = [];
var shuffled_array = [];

function shuffle(array) {
    var copy = [], n = array.length, i;

    // While there remain elements to shuffle…
    while (n) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * array.length);

        // If not already shuffled, move it to the new array.
        if (i in array) {
            copy.push(array[i]);
            delete array[i];
            n--;
        }
    }

    return copy;
}


 function newGame() {
    shuffled_array = shuffle(marray);
    var insert = '';
    for (var i=0;i<shuffled_array.length;i++){
         insert += '<div id="tile_' + i + '" onclick="flip_tile(this,\'' + shuffled_array[i] + '\')"></div>';
     }
     document.getElementById('memory').innerHTML = insert;
 }

 function flip_tile(){
     
 }

