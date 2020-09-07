function numberFunction(number){
    let input=document.getElementById("input")
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
    let input=document.getElementById("input")
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
    let input_val=document.getElementById("input")
    let x=input_val.value
    if(x.length>0){
        x=x.substring(0,x.length-1)
        input_val.value=x
    }

}

let j=0
function brackets(){
let input=document.getElementById("input")

 let inputArr=Array.from(input.value).reverse()
 for(i=0;i<inputArr.length;i++){
     if(inputArr[i]==")"){
        input.value += "("
        break
     }
     else if(inputArr[i]=="("){
        input.value += ")"
        break
     }
 }

 if(j==0){
    input.value += "("
 }
 j=j+1
 console.log("right",i,inputArr)
}
let arrayHistory=[]
function myFunctionEql(){
    let input_val=document.getElementById("input").value
    let oneHistry=input_val
    let answer=Math.floor(+eval(input_val))
    document.getElementById('ans').value="=" + answer
    let histry=oneHistry+" = "+answer
    arrayHistory.push(histry)
    console.log(arrayHistory)
    var app=document.querySelector('#app');
app.innerHTML = '<ul>' + arrayHistory.map((arr)=>{
    return '<li>'+ arr +'</li>'
    console.log(arr)
}).join('')+'</ul>'
}

let trackEnter=document.getElementById("input")
trackEnter.addEventListener("keydown",function(event){
    if(event.keyCode==13){
        let input_val=document.getElementById("input").value
        let answer=Math.floor(+eval(input_val))
        document.getElementById('ans').value="=" + answer
    }
})
function onlyNumberKey(evt){
    let ASCIICode = (evt.which) ? evt.which : evt.keyCode 
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57 ) ) 
        return false; 
    return true; 
}
