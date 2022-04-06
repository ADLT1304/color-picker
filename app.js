//create a variable called colors in an array with green, red, rgb(133,122,200), #f15025
//use const variable
$(document).ready(function (){
    const colors = ["green", "red", "rgb(133,122,200)", "#f15025"];
    const btn = $(':button');
    const color = $('.color')

    btn.on('click', function(event) {
        const randomNumber = getRandomNumber();
        $('body').css('background-color', colors[randomNumber]);
    })
    function getRandomNumber() {
        return Math.floor(Math.random() * colors.length)
    }
})

//create variable for the button using 'btn' id and color using color class
//create onclick eventlistener for the btn
//inside the eventlistener create variable called for a random number
//set variable equal to a function for a random number
//set the style property of the background equal to colors [random number variable]
//set the textContent of color equal to colors[random number variable]

// btn.addEventListener("click", (e) => {
        
//     const randomNumber = getRandomNumber();

//     document.body.style.background = colors[randomNumber];

// });

// //create getRandomNumber function
// //return a whole number using math.floor and math.random multiplied by colors.length

// function getRandomNumber() {
//     return Math.floor(Math.random() * colors.length)
// }




