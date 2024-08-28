let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let restart = document.querySelector('#start-btn');
let msgContainer= document.querySelector(".msg-container");
let msg= document.querySelector('#msg')
 

let turn0 = true;
let count =0;
const winsPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const reset = ()=>{
     turn0 = true;
     boxenabled();
     msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0)
         {
            box.innerText = "O";
            turn0= false;
        }
        else
        {
            box.innerText = "X";
            turn0= true
        }
        count++;
        console.log(count)
        box.disabled= true;// ek baar value daal dne k baad dubara se uspe click krne se value change na ho
        checkwinner();

        //code for draw
        if(count === 9){
            showDraw();
             //console.log("match is draw");
        }
    });
});
const showDraw =()=>{
    msg.innerText= "Match is draw"
    msgContainer.classList.remove("hide");
}

const boxdisabled= ()=>{
    for(let box of boxes){
        box.disabled =true;
    }
}
const boxenabled= ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText= "";
    }
}
const showWinner =(winner)=>{
   msg.innerText = `congratulation.. winner is ${winner}`;
   msgContainer.classList.remove("hide");
   boxdisabled();
}

const checkwinner=()=>{
    for(let pattern of winsPattern){
        let pos1= boxes[pattern[0]].innerText;
        let pos2= boxes[pattern[1]].innerText;
        let pos3= boxes[pattern[2]].innerText;
         

        if(pos1 !="" && pos2 != "" && pos3!= ""){
            if(pos1 === pos2 && pos2===pos3){
                showWinner(pos1);
            }
        }
    }
};
restart.addEventListener("click",reset);
resetBtn.addEventListener("click",reset);


 