let userscore=0;
let compscore=0;
const msg = document.querySelector(".msg-container");
const choices = document.querySelectorAll(".choice");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
const showwinner =(userwin , userchoice,compchoice)=>{
    if(userwin)
       { 
        userscore++;
        userscorepara.innerText = userscore;
        console.log("You Win ");
    msg.innerText ="You Win!";
    msg.style.backgroundColor = "green";}

    else
   { 
    compscore++;
    compscorepara.innerText=compscore;
    console.log("you lose");
msg.innerText="You Lose!";
msg.style.backgroundColor = "red";}
}
const getcompchoice = () =>{
    const options = ["paper","scissor","rock"];
    const randomidx=Math.floor(Math.random()*3);
    return options[randomidx];
}
const playgame =(userchoice)=>{
    console.log("user choice =", userchoice);
    const compchoice = getcompchoice();
    console.log("computer choice =", compchoice);
    if(userchoice=== compchoice)
    {drawgame();}
    else
    {
        let userwin = true;
         
         if (userchoice === "paper")
           {userwin = compchoice === "scissor"?false:true;}
        else if(userchoice==="scissor")
        {userwin = compchoice === "rock"?false:true;}
        else
         {userwin = compchoice === "paper"?false:true;}
    showwinner(userwin,userchoice,compchoice);
    }
}
const drawgame = () =>{
    console.log("game was draw");
    msg.innerText="Game was draw, Play again"
    msg.style.backgroundColor = "blue";
}


choices.forEach((choice)=>{
choice.addEventListener("click",()=>{

const userchoice = choice.getAttribute("id")
playgame(userchoice);
});
});

