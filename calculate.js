function numberFunction(number){
    var input=document.getElementById("input")
    switch(number){
        case 1:
            input.value+="1"
            break;
        case 2:
            input.value+="2"
            break;
        case 3:
            input.value+="3"
            break;    
        case 4:
            input.value+="4"
            break;
        case 5:
            input.value+="5"
            break;
        case 6:
            input.value+="6"
            break;  
        case 7:
            input.value+="7"
            break;    
        case 8:
            input.value+="8"
            break;
        case 9:
            input.value+="9"
            break;
        case 0:
            input.value+="0"
            break;  
    }
    console.log(number)

}

function operand(ope){
    var input=document.getElementById("input")
    switch(ope){
        case '+':
            input.value+="+"
            break;
        case '-':
            input.value+="-"
            break;
        case '*':
            input.value+="*"
            break;
        case '/':
            input.value+="/"
            break;
    }
}
function clearFunction(){
    document.getElementById("input").value=''
    document.getElementById("ans").value=''
}
 
function cutFunction(){
    var input_val=document.getElementById("input")
    var x=input_val.value
    if(x.length>0){
        x=x.substring(0,x.length-1)
        input_val.value=x
    }

}

var i=0
function brackets(){
var input=document.getElementById("input")
console.log("i",i)
 if(i ==0){
    input.value += "("
    i+=1
 }
 else if(i==1){
    input.value+= ")"
    i-=1
 }
}
function myFunctionEql(){
    var input_val=document.getElementById("input").value
    var answer=Math.floor(+eval(input_val))
    document.getElementById('ans').value="=" + answer
}

var trackEnter=document.getElementById("input")
trackEnter.addEventListener("keydown",function(event){
    if(event.keyCode==13){
        var input_val=document.getElementById("input").value
        var answer=Math.floor(+eval(input_val))
        document.getElementById('ans').value="=" + answer
    }
})