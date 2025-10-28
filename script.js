const DIVCONTAINER = document.querySelector(".contenGame");
const BUTTONS = document.querySelectorAll(".buttons");
const COLOR = document.querySelector("#color");
const CAMBIARCOLOR = document.querySelector("#prueba");
let defaultColor = "rgba(61, 62, 63)";
let selecColor;
let size = 20;
let procedure = 0.10;
let opacityy = 1;

function promp(data){
     
    if (data == "erase"){
        opacityy = 1;
        defaultColor = "rgba(61, 62, 63)";
        return size = size;
        
    }
    
    if(data == "rezize"){
        dataProm = prompt("Choose the board size");
        if(dataProm > 100){
            alert("Enter a number less than 100");
            return size
        }

        if(dataProm != null ){
            size = dataProm;
            opacityy = 1;
            return size;
        } 
    }

    if(data == "ramdomColor"){
        return size;
    }

    if(data == "progressive"){
        opacityy = 0.10;
         return size;
    }
}

function changeColor(){
    
    COLOR.addEventListener("input", ()=>{
        
        paintDiv(selecColor);
        selecColor = COLOR.value;

    })

    return selecColor;
}

function randomNumber(){
    const RANDOM = Math.random();
    const MULTIPLIED = RANDOM * 226;
    const ROUNDED = Math.floor(MULTIPLIED)

    return ROUNDED;
}

function randomColor(){
    let randomN1 = randomNumber()
    let randomN2 = randomNumber()
    let randomN3 = randomNumber()

    const mesage = `rgba(${randomN1}, ${randomN2}, ${randomN3}, 1)`
    
    return mesage;

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
            console.log(BUTTONNAME)
            if(BUTTONNAME == "ramdomColor"){
                paintDiv("random");
                return
            }
           
            paintDiv(defaultColor);
         })
    });
}

function paintDiv(color){
    const DIVS = document.querySelectorAll(".divElement");
    

    DIVS.forEach(element =>{
        element.addEventListener("mouseenter", (e) =>{
            const DIVELEMENT = e.target;
            const STYLE = window.getComputedStyle(DIVELEMENT);

            const ROUND = Math.round(procedure * 100) / 100;

            console.log(STYLE.backgroundColor)

            let DIVOPACITY = parseFloat(STYLE.opacity);
            let DIVBACGROUNDCOLOR = STYLE.backgroundColor;

            if (color == "random"){
                DIVELEMENT.style.backgroundColor = randomColor();
            }

            if (DIVOPACITY == 1 && DIVBACGROUNDCOLOR == "rgba(0, 0, 0, 0)" ){
                    DIVELEMENT.style.opacity = opacityy;
            }

            DIVELEMENT.style.opacity = parseFloat(STYLE.opacity) + 0.10;

            DIVELEMENT.style.backgroundColor = color;
            
            console.log(STYLE.opacity);

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

}

drawGrid(size)
paintDiv(defaultColor);
accionButtons()
changeColor()


    