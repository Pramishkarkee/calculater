var inputValue=0
var c=""
var valueCon=""
i=0
var reasult=0
function myFunction(x){
    // console.log("pass value from function",x)
    var x1=x
    // console.log(typeof(x1))
    y=x1.toString()
        
    i++
    
    if(x=="+" || x=="-" || x=="x"  || x=="%"){
        // alert("this is operator")
        var duplicationCheck=c.charAt(c.length-1)
        if(duplicationCheck.toString()==y){
            alert("please dosent enter same operator")
        }
        else{
            if(x=="+"){
                var value1=parseInt(valueCon)
                reasult=reasult+value1
                
                console.log("+operator reasult",valueCon)
                valueCon=""
            }
            else if(x=="-"){
                var value1=parseInt(c)
                reasult=reasult-value1
            }
            else if(x=="x"){
                var value1=parseInt(c)
                reasult=reasult*value1
            }
            else if(x=="%"){
                var value1=parseInt(c)
                reasult=reasult/value1
            }
            
            c=c.concat(y)
            num=c
            document.getElementById("inputval").value =num
        }
        
    }
    else{
        c=c.concat(y)
        num=y
        
        if(i>1){
            
            num=c
            console.log("x",num,i)
        }
        
        document.getElementById("inputval").value =num
    }
    var con=c
    var checkOperator=c.charAt(c.length-1)
    console.log("opeartor",checkOperator)
    if(checkOperator=="+" || checkOperator=="-" || checkOperator=="x"  || checkOperator=="%"){
        valueCon=c.slice(0,-1)
        console.log("operation value",valueCon)
    }
    
}
document.getElementById("inputval").value = inputValue;

function clearFn(){
    var allval=document.getElementById("inputval").value
    var newVal=allval.slice(0,-1)
    document.getElementById("inputval").value =newVal
}
var inputlisten=document.getElementById("inputval")
inputlisten.addEventListener("keydown",function(event){
    console.log("key word",event.keyCode)
    
    if(event.keyCode==46){
        var allval=document.getElementById("inputval").value
        var newVal=allval.slice(0,-1)
        document.getElementById("inputval").value =newVal
    }
    if(event.which < 60 || event.which > 105 ){
        console.log("no")
    }
    else{
        event.preventDefault();
    }
    if(event.keyCode==13){
        var allval=document.getElementById("inputval").value
        console.log("inputvalue",allval)
    }
    


})
function myFunctionEql(){
    var allval=document.getElementById("inputval").value
    console.log("inputvalue",allval,reasult)
}