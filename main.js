//Need to track actual dollar input tag
//Need to track dollar input value
//Need to output converted euro value into euro input tag
const dollarInput= document.getElementById("dollars");
console.log(dollarInput);

dollarInput.addEventListener('input', convertToEuros);

function convertToEuros(){
    //take the actual dollar input value
    const dollarValue= document.getElementById("dollars").value;
    //multiply it by 0.85 for euros
    let euroValue= dollarValue*0.85;
    //set value of the euros input tag to this converted value
    document.getElementById("euros").value= euroValue;

}