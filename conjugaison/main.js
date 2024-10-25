const input = document.querySelector("input");
const select = document.querySelector("select")
const button = document.querySelector("button");
const ul = document.querySelector("ul");
const verbsFirstGroup = {
    "guer": "gu",
    "ayer": "ay",
    "oyer": {
        3:"oy",
        4:"oy",
        "autre":"oi"
    },
    "uyer": "ui",
    "eyer": "ey",
    "eler": {
        3:"el",
        4:"el",
        "autre":"ell"
    },
    "ter":"t",
    "tter":"tt"
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
    e.preventDefault();
    for(const element in verbsFirstGroup){
        let replace = new RegExp(element+"$", "g");
        console.log(element)
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
});