
const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//#

//create a variable for button
//create a variable for the color using color class

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

//create eventlistener for button
//inside function, create variable for hex color and set it equal to "#"
//create a for loop where i is less than 6 and incrementing by 1
//hex color variable += the hex variable [random number variable]
//set the text content = hex color variable
//use style property to change background to hex color

btn.addEventListener("click", (e) => {
    
    let hexColor = "#";
    
    for (let i = 0; i < 6; i += 1 ) {
        hexColor += hex[getRandomNumber()];
    }

    color.textContent = hexColor;
    document.body.style.background = hexColor;
});

//create function for random number using math.random and math.floor multiplied by hex length

const getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length)
}