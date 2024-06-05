let userscore=0;
let comscore=0;
let choices=document.querySelectorAll(".choice");
let pcom=document.querySelector("#computerscore");
let puser=document.querySelector("#userscore");
let msg=document.querySelector("#msg");

const generatecom=()=>{
    const option=["rock","paper","scissor"];
    let i=Math.floor(Math.random()*3);
    return option[i];
}
const drawgame=()=>{
    msg.innerText='Draw Game! Play Again';
    msg.style.backgroundColor='#596a02';
}

const playgame=(userchoice)=>{
            const comchoice=generatecom();
           if(userchoice===comchoice)
            {
                drawgame();  
            }
           else {
                let userwin=true;
               if(userchoice==='rock')
                {
                    userwin=comchoice==="paper"?false:true;
                }
                else if(userchoice==='paper')
                    {
                        userwin=comchoice==="scissor"?false:true;
                    }
                    else
                    {
                        userwin=comchoice==='rock'?false:true;
                    }
                    if(userwin)
                        {
                            userscore++;
                            msg.innerText=`You Win! Your ${userchoice} beats ${comchoice}`;
                            msg.style.backgroundColor='green';
                        }
                        else{
                            comscore++;
                            msg.innerText=`You lose! Computer ${comchoice} beats ${userchoice}`;
                            msg.style.backgroundColor='red';
                        }
                        pcom.innerText=comscore;
                        puser.innerText=userscore;
            }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",(i)=>{
        const user=choice.getAttribute("id");
        playgame(user);
    })
})
