const num1 = Math.ceil(Math.random()*100)

const num2=Math.ceil(Math.random()*10);
const ques=document.getElementById("ques");

const form=document.getElementById("form");

const input= document.getElementById("input");
const scores=document.getElementById("score");

let score =JSON.parse(localStorage.getItem("score"));
if(!score)
{score =0;
}

scores.innerText=`score: ${score}`


ques.innerText = `what is ${num1} multiply by ${num2}? `;

const ca=num1*num2;

form.addEventListener("submit", ()=>{
    const userans=+input.value;
    if(userans === ca){
        score++;
        updateLocalStorage();
    }else{
        score--;
        updateLocalStorage();
    }
});
function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}