// Select all from the document using querySelectAll
var keys = document.querySelectorAll('#calculator span');
// Define Operators
var operators = ['+', '-', 'x', '÷', '^'];
//set decimal flag for use later
var decimalAdded = false;

//loop through all keys
for(var i = 0; i < keys.length; i++) {
    //add onclick event to the keys
    keys[i].onclick = function(e) {
        //get input and button values
        var input = document.querySelector('.screen');
        var inputVal = input.innerHTML;
        var btnVal = this.innerHTML;

        //if clear key is pressed, erase everything
        if(btnVal == 'C') {
            input.innerHTML = '';
            decimalAdded = false;
        }
        //if eval key is pressed, calculate and display result
        else if(btnVal == '=') {
            var equation = inputVal; //append equation to variable
            var lastChar = equation[equation.length -1] //target the end of the eval string

            //use regex to replace all instances of operators
            equation = equation.replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/g, '\*\*');

            //use regex to remove decimals from the end of equation
            if(operators.indexOf(lastChar) > -1 || lastChar == '.')
                equation = equation.replace(/.$/, '');

            //use javascript eval func to get result

            if(equation)
                input.innerHTML = eval(equation);
            decimalAdded = false;
        }
        //JS Checks

        //no two operators should be added consecutively
        else if(operators.indexOf(btnVal) > -1) {
            //get last char from equation
            var lastChar = inputVal[inputVal.length -1];

            //only add operator if input is not empty
            if(inputVal != '' && operators.indexOf(lastChar) == -1)
                input.innerHTML += btnVal;
            //allow minus operator if string is empty
            else if(inputVal == '' && btnVal == '-')
                input.innerHTML += btnVal;

            //replace last operator with new operator
            if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
                input.innerHTML = inputVal.replace(/.$/, btnVal);
            }
            decimalAdded = false;
        }
        //allow decimal point input
        else if(btnVal == '.') {
            if(!decimalAdded) {
                input.innerHTML += btnVal;
                decimalAdded = true;
            }
        }

        //if any other key is pressed, append it after decimal
        else {
            input.innerHTML += btnVal;
        }
        //prevent page jumps
        e.preventDefault();
    }
}

//adding keyboard input function
document.onkeydown = function(event) {

    var key_press = String.fromCharCode(event.keyCode);
    var key_code = event.keyCode;
    var input = document.querySelector('.screen');
    var inputVal = input.innerHTML;
    var btnVal = this.innerHTML;
    var lastChar = inputVal[inputVal.length -1];
    var equation = inputVal;

    //using regex to replace all instances of operators
    equation = equation.replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/g, '\*\*');

    //target each keypress and update input screen
    if(key_press==1) {
        input.innerHTML += key_press;
    }
    if(key_press==2) {
        input.innerHTML += key_press; 
    }
    if(key_press==3 || key_code == 32) {
        input.innerHTML += key_press; 
    }
    if(key_press==4) {
        input.innerHTML += key_press; 
    }
    if(key_press==5) {
        input.innerHTML += key_press; 
    }
    if(key_press==6 && event.shiftKey == false) {
        input.innerHTML += key_press; 
    }
    if(key_press==7) {
        input.innerHTML += key_press; 
    }
    if(key_press==8 && event.shiftKey == false) {
        input.innerHTML += key_press; 
    }
    if(key_press==9) {
        input.innerHTML += key_press; 
    }
    if(key_press==0) {
        input.innerHTML += key_press;
    }
    
    // Capture operators and prevent from adding two consecutive operators
    
    if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 187 && event.shiftKey) || (key_code == 107) || (key_code == 61 && event.shiftKey)) {
        document.querySelector('.screen').innerHTML += '+';
    }
    if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 189 && event.shiftKey) || (inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 107)) {
        document.querySelector('.screen').innerHTML += '-';
    }
    if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 56 && event.shiftKey) || (inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 106)) {
        document.querySelector('.screen').innerHTML += 'x';
    }
    if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 191) || (inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 111)) {
        document.querySelector('.screen').innerHTML += '÷';
    }
    if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 54 && event.shiftKey)) {
        document.querySelector('.screen').innerHTML += '^';
    }
    if(key_code==13 || key_code==187 && event.shiftKey == false) {
        input.innerHTML = eval(equation);
        //reset decimal added flag
        decimalAdded =false;
    }
    if(key_code==8 || key_code==46) {
            input.innerHTML = '';
            decimalAdded = false;
    }
}