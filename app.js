function getBtn(num){
   var result2 = document.getElementById("result2")
       result2.value += num;
}

function clearResult(){
    var result2 = document.getElementById("result2");
    result2.value = "";
}

function getResult(){
    var result2 = document.getElementById("result2");
    result2.value = eval(result2.value);
}

function backspace(){
    var result2 = document.getElementById("result2");
    result2.value =
    result2.value.slice (0, -1)
}
