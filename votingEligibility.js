function checkVote(){
    let age = Number(document.getElementById("age").value);
    
    if(age >= 18){
        document.getElementById("result").value="eligible to vote";
    }else{
        document.getElementById("result").value="not eligible to vote";
    }
}