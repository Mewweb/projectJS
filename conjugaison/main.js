const input = document.querySelector("input");
const select = document.querySelector("select")
const button = document.querySelector("button");
const ul = document.querySelector("ul");
const verbsFirstGroup = {
    "cer": {
        3:"ç",
        "autre":"c"
    },
    "ger":{
        3:"ge",
        "autre":"g"
    },
    "peler":{
        3:"l",
        4:"l",
        "autre":"ll"
    },
    "eler":{
        3:"el",
        4:"el",
        "autre":"èl"
    },
    
    "cheter":{
        3:"chet",
        4:"chet",
        "autre":"chèt"
    },
    "eter":{
        3:"et",
        4:"et",
        "autre":"ett"
    },
    "uyer":{
        3:"uy",
        4:"uy",
        "autre":"ui"
    },
    "ayer":{
        "autre":"ay"
    }
}
const pronoms = {
    "je": "e",
    "tu": "es",
    "il/elle/iel/on" : "e",
    "nous":"ons",
    "vous":"ez",
    "ils,elles,iels":"ent"
}
button.addEventListener("click", function(e){
    ul.innerHTML ="";
    e.preventDefault();
    for(const element in verbsFirstGroup){
        let replace = new RegExp(element+"$", "g");
        if(input.value.search(replace) != -1){
            let i = 0;
            for(const pronom in pronoms){
                if(typeof verbsFirstGroup[element] == "string"){
                    ul.insertAdjacentHTML("beforeend", "<li>"+pronom+" : "+input.value.replace(replace, verbsFirstGroup[element]+pronoms[pronom])+"</li>");
                }else{
                    if(verbsFirstGroup[element][i] == undefined){
                        ul.insertAdjacentHTML("beforeend", "<li>"+pronom+" : "+input.value.replace(replace, verbsFirstGroup[element]["autre"]+pronoms[pronom])+"</li>");
                    }else{
                        ul.insertAdjacentHTML("beforeend", "<li>"+pronom+" : "+input.value.replace(replace, verbsFirstGroup[element][i]+pronoms[pronom])+"</li>");
                    }
                }
                i++;
            }
            break;
        }
    }
    if(!ul.querySelector("li")){
        console.log("ffj")
        let replace = new RegExp("er$", "g");
        for(const pronom in pronoms){
            ul.insertAdjacentHTML("beforeend", "<li>"+pronom+" : "+input.value.replace(replace,pronoms[pronom])+"</li>");
        }
   }
});