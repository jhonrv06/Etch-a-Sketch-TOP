const DIVCONTAINER = document.querySelector(".contenGame");
const BUTTONS = document.querySelectorAll(".buttons");
const COLOR = document.querySelector("#color");
const CAMBIARCOLOR = document.querySelector("#prueba");
let defaultColor = "rgba(54, 164, 197, 1)";
let selecColor;
let size = 20;


function promp(data){
     
    if (data == "erase"){
        defaultColor = "rgba(54, 164, 197, 1)";
        return size = size;
    }
    
    if(data == "rezize"){
        dataProm = prompt("Choose the board size");
            if(dataProm != null ){
                size = dataProm;
            }
        return size;
    }

    if(data == "ramdomColor"){
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
    //Se puede poner un parametro a esta funcion la cual cambien ald ar click
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

            //Al dibujar el nuevo div me debe devolver un tamaño
            drawGrid(promp(BUTTONNAME))
            console.log(BUTTONNAME)
            if(BUTTONNAME == "ramdomColor"){
                paintDiv("random");
                return
            }
            //Si es randm cambiar el parametro, cambiar el valor de la variable defalutl color, donde debo pone la funcion
            paintDiv(defaultColor);
         })
    });
}

function paintDiv(color){
   
    const DIVS = document.querySelectorAll(".divElement");

    DIVS.forEach(element =>{
        element.addEventListener("mouseenter", (e) =>{
           const BUTTONTARGET = e.target;

            
            if (color == "random"){
               
                BUTTONTARGET.style.backgroundColor = randomColor();
                console.log(color);
        
            }

            BUTTONTARGET.style.backgroundColor = color;

        
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


    