function appendval(val) {
    let disp = document.getElementById('display');
    let lastChar = disp.value.slice(-1); // Get the last character

    // Allow first character to be only a number not an operator (except '-')
    if (disp.value === "" && "+x/*%".includes(val)) {
        return
    }
    // Prevent consecutive operators but allow negative sign after an operator
    if ("+-x/*%".includes(lastChar) && "+x/*%".includes(val)) {
        return
    }
    disp.value += val;
}

function clearAll(){
    document.getElementById('display').value =""
}

function backspace(){
    document.getElementById('display').value=document.getElementById('display').value.slice(0,-1);
}

function calc() {
    let disp = document.getElementById('display');
    let expression = disp.value.replace(/x/g, '*'); // Replace 'x' with '*'
   try{
    disp.value = eval(expression); 
   } 
   catch(error){
    disp.value = "Error"
   }
}