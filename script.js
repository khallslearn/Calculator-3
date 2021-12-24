let result = document.getElementById("inputext");

let calculate=(number)=>{
result.value=result.value+number;
}


let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
       alert("Bad input") 
    }
}
let clr=()=>{
    result.value="0"
}

/*function clr(){
    result.value="0";
}*/

let del=()=>{
    result.value=result.value.slice(0.-1)
}