const input = document.querySelector("input");
const pResultat = document.querySelector("p span")
const allBtnNbr = document.querySelectorAll(".divNumber button, .divOperation button");
const dlBtn = document.querySelector(".dlBtn");
const opBtn = document.querySelectorAll(".divOperation button")
const dlAllBtn = document.querySelector(".dlAllBtn");
let nbr1 = 0;
let nbr2 = 0;
let op = "";
let nbrClc = 0;
dlBtn.addEventListener("click", function(){
    input.value = input.value.replace(/[\d]*$/, "")
    nbr2 = 0;
})
function clearCalcul(){
    input.value = "";
    nbr1 = 0;
    if(opBtn[0].disabled){
        opBtn.forEach(element =>{
            element.disabled = false;
        });
    }
    nbr2 = 0;
    pResultat.innerText = "0";
    op = "";
    nbrClc = 0
}
dlAllBtn.addEventListener("click", clearCalcul); 
for(let i = 0; i < allBtnNbr.length; i++){
    allBtnNbr[i].addEventListener('click', function(e){
        input.value += allBtnNbr[i].innerText;
        if(isNaN(Number(allBtnNbr[i].innerText))){
            if(nbrClc == 3){
                nbrClc = 1;
                if(op == "+"){
                    nbr1 += nbr2;
                }else if(op == "-"){
                    nbr1 -= nbr2;
                }else if(op == "*"){
                    nbr1 *= nbr2
                }else{
                    nbr1 /= nbr2;
                }
                if(isNaN(nbr1) || !isFinite(nbr1)){
                    clearCalcul();
                    document.querySelector(".errorP").style.animationName = ""
                    document.querySelector(".errorP").style.animationName = "animError"
                }
            }
            if(allBtnNbr[i].innerText == "="){
                pResultat.innerText = nbr1;
                nbr1 = 0;
                nbrClc = 0;
                nbr2 = 0;
                op = "";
                input.value = ""
            }
            else if(nbrClc == 1){
                op = input.value.match(/.*([+-\/*])/)[1];
                nbrClc++;
                opBtn.forEach(element =>{
                    element.disabled = true;
                });
            }
        }else{
            if(opBtn[0].disabled){
                opBtn.forEach(element =>{
                    element.disabled = false;
                });
            }
            if(nbrClc % 2 == 0){
                nbrClc++;
            }
            if(nbrClc == 1){
                nbr1 = input.value.match(/(?:[\d]+[*\/+-])(\d+)[^*\/+-]*$/);
                if(nbr1 == null){
                    nbr1 = Number(input.value);
                }else{
                    nbr1 = Number(nbr1[1]);
                }
            }else if(nbrClc == 3){
                nbr2 = Number(input.value.match(/[0-9]*$/));
            }
        }
    });
}