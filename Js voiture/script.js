const divVoiture = document.querySelector("#voiture");
let posX = 1;
let posY = 1;
const allPark = document.querySelectorAll(".park1, .park2, .park3, .park4");
const imgVoiture = divVoiture.querySelector("img");
const linkCss = document.querySelector("link");
document.addEventListener("keyup", function(e){
    console.log(e.key)
    if(e.key == "ArrowUp"){
        moveTop();
    }else if(e.key == "ArrowLeft"){
        moveLeft()
    }else if(e.key == "ArrowRight"){
        moveRight()
    }else{
        moveBottom()
    }
});
function moveTop(){
    if((posY != 9 && posY != 5) || (posY == 9 || posY == 5) &&( posX < 2 || posX > 4 && posX < 6 || posX > 8)){
        if(posY >= 2){
            posY -= 1;
            divVoiture.style.gridRow = posY;
        }
    }
}
function moveLeft(){
    if((posX != 9 && posX != 5) || (posX == 9 || posX == 5) &&( posY < 2 || posY > 4 && posY < 6 || posY > 8)){
        if(posX >= 2){
            posX -= 1;
            divVoiture.style.gridColumn = posX;
        }
    }
}
function moveBottom(){
    if((posY != 1 && posY != 5) || (posY == 1 || posY == 5) &&( posX < 2 || posX > 4 && posX < 6 || posX > 8)){
        if(posY < 9){
            posY += 1;
            divVoiture.style.gridRow = posY;
        }
    }
}
function moveRight(){
    if((posX != 1 && posX != 5) || (posX == 1 || posX == 5) &&( posY < 2 || posY > 4 && posY < 6 || posY > 8)){
        if(posX < 9){
            posX += 1;
            divVoiture.style.gridColumn = posX;
        }
    }
}
