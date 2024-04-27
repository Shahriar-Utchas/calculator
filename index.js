const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        window.prompt("Error", "\n\nPlease check your input and try again.");
    }
}

function clearDisplay(){
    display.value ="";
}