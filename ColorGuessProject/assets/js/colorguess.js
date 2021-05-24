var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setUpModeButtons();
    setUpSquares();
    reset();
};

function setUpModeButtons() {
    for(var i = 0 ; i < modeButtons.length ; ++i) { 
        modeButtons[i].addEventListener("click", function() { 
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy") { 
                numOfSquares = 3;
            }
            else { 
                numOfSquares = 6;
            }
            reset();
        });
    };
}

function setUpSquares() { 
    for(var i = 0 ; i < squares.length ; ++i) { 
        //add click listeners to squares
        squares[i].addEventListener("click", function() { 
            //grab the color and compare to pickedColor

            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) { 
                messageDisplay.textContent = "Correct";
                changeColors(clickedColor);
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play Again?";
            }
            else { 
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        })
    };  
}

function reset() { 
    colors = generateRandomColors(numOfSquares);
    //pick new random colors
    pickedColor = pickColor();
    //change color of squares
    for(var i = 0 ; i < squares.length ; ++i) { 
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else { 
            squares[i].style.display = "none";
        }
    }
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change h1 background to #232323
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
};

resetButton.addEventListener("click", function() { 
    reset();
});

function changeColors(color) { 
    //loop through all squares and change color
    for(var i = 0 ; i < squares.length ; ++i) { 
        squares[i].style.backgroundColor = color;   
    }
};

function pickColor() { 
    //pick a color from colors array
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
;}

function generateRandomColors(num) { 
    //make array
    var arr = [];
    //add num random colors
    for(var i = 0 ; i < num ; ++i) { 
        //get random color and push into array
        arr.push(randomColor()); 
    }
    //return 
    return arr;
};

function randomColor() { 
    //choose a random color
    //pick red from 0-255
    var r  = Math.floor(Math.random() * 256);
    //pick green from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick blue from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
