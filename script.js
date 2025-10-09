const DIVCONTAINER = document.querySelector(".contenGame");
const BUTTONS = document.querySelectorAll(".buttons");


let size = 20;

function promp(data){
    if(data == "rezize"){
        size = prompt("Choose the board size");
        return size;
    }
}

function deleteDivs(){
    const DIVS = document.querySelectorAll(".divElement");

    DIVS.forEach(element => {
        element.remove();
        console.log("Div eliminado");
    });

    return
}

function accionButtons(){
    BUTTONS.forEach(element => {
        element.addEventListener("click", (e)=>{

            deleteDivs();

            const BUTTONTARGET = e.target;
            const BUTTONNAME = BUTTONTARGET.name;

            drawGrid(promp(BUTTONNAME))
   
         })
    });
}

function paintDiv(){
    const DIVS = document.querySelectorAll(".divElement");

    DIVS.forEach(element =>{
        element.addEventListener("mouseenter", (e) =>{
            const BUTTONTARGET = e.target;

            BUTTONTARGET.classList.add("divElementColor");

            console.log( "El div actual es " + BUTTONTARGET);
        });
    });
}

function drawGrid (numberDivs){

    const DIVSIZE = (700 / numberDivs) - 3;
    document.documentElement.style.setProperty("--numberSquares", `${DIVSIZE}px` );

    for(let i = 0; i < numberDivs*numberDivs; i++){
        const DIVELEMENT = document.createElement("div");
        DIVELEMENT.classList.add("divElement")
        DIVCONTAINER.appendChild(DIVELEMENT);
        console.log("div creado")
    }

    paintDiv()
 
}



drawGrid(size)
accionButtons()
