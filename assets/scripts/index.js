let result = document.getElementById('inputext');

// get numbers and operators from input field
let calculate = (number)=>{
    result.value += number
}

let Result = ()=>{
    try{

        result.value = eval(result.value)// the eval() js funtion takes A String value that contains valid JavaScript code. Evaluates JavaScript code and executes it.
    }
    catch(err){
        alert('Invalid input')
    }
}

function clr(){
    result.value= " "
}

function del(){
    result.value=result.value.slice(0,-1);
}
