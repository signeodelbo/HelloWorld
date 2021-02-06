function howdy(firstName){
    alert("Howdy " + firstName);
}
function evalNumber(){
    var inputValue = Number(prompt("Enter any five-digit number without commas"))
    if (isNaN(inputValue)) {
        alert(inputValue + " is not a number.")
    } else if (inputValue % 2 == 0) {
        alert(inputValue + " is an even number.")
    } else {
        alert(inputValue + " is an odd number.")
    }
}
