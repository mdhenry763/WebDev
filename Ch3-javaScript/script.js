var shape = document.getElementById("shape");

function generateShape() {

    //Randomize: Position, shape, colour, size
    //Get the time from colour change

    //Random Colour: Just add a hash
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    function getRandomColor() {

        var letters = '0123456789ABCDEF'.split('');

        var color = '#';

        for (var i = 0; i < 6; i++) {

            color += letters[Math.floor(Math.random() * 16)];

        }

        return color;

    }

    console.log("#" + randomColor);

    //Random position:
    var randomTop = Math.floor((Math.random() * 601));
    var randomLeft = Math.floor((Math.random() * 801));
    console.log("Top: " + randomTop);
    console.log("Left: " + randomLeft);

    //Random size:

    var randomWidth = Math.floor((Math.random() * 401) + 200);
    var randomHeight = Math.floor((Math.random() * 201) + 200);
    console.log("Width: " + randomWidth);
    console.log("Height: " + randomHeight);

    document.getElementById("shape").style.position = "relative";
    document.getElementById("shape").style.backgroundColor = "#" + randomColor.toString();
    document.getElementById("shape").style.left = randomLeft.toString() + "px";
    document.getElementById("shape").style.top = randomTop.toString() + "px";
    document.getElementById("shape").style.width = randomWidth.toString() + "px";
    document.getElementById("shape").style.height = randomHeight.toString() + "px";

    if (Math.random() > 0.5) {

        shape.style.borderRadius = "50%";

    } else {

        shape.style.borderRadius = "0";

    }

}

generateShape();
var counter = 0;


var startTime, endTime;

function start() {
    startTime = new Date();
};

start();

function end() {
    endTime = new Date();
    var timeDiff = endTime - startTime; //in ms
    // strip the ms
    timeDiff /= 1000;

    // get seconds 
    var seconds = timeDiff;
    console.log(seconds + " seconds");
    document.getElementById("time").innerHTML = "Your time: " + seconds.toString() + " seconds";
}


shape.onclick = function () {

    if (counter < 6) {
        end();
        generateShape();
        start();
        counter++;
    } else {

        alert("Reload page to play again");

    }


}

