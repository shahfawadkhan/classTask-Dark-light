
var btn = document.getElementById("btn");
var body = document.getElementsByTagName("body")[0];
btn.addEventListener('click' , changeColor);

function changeColor(){
    if(btn.value === "Night"){
        body.style.backgroundColor = "black";
        btn.value = "Day";
        btn.textContent = "Day";
        btn.style.color = "black";
        btn.style.backgroundColor = "white";

    }
    else{
        body.style.backgroundColor = "white";
        btn.value = "Night";
        btn.textContent = "Night";
        btn.style.backgroundColor = "black";
        btn.style.color = "white"; 
    }
}