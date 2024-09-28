const button = document.querySelector("button")
const cont=document.querySelector(".container")

const grid= document.createElement("div")
const gridchild= document.createElement("div")

grid.setAttribute("class","boxes")
gridchild.setAttribute("class","gridchild")

// grid.style.width="30px"
// grid.style.height="30px"
let a;
let totalsize=700;

function creategrid(){
    grid.style.width= `${totalsize/a}px`
    grid.style.height= `${totalsize/a}px`;
    console.log(totalsize/a);
    for(let i=0; i<(a*a); i++){
        cont.appendChild(grid.cloneNode(true));
    }
    
    
    const allbox= document.querySelectorAll(".boxes")
    allbox.forEach(item=>{

        let bright = 100;

        item.addEventListener("mouseover", ()=>{        
            item.style.backgroundColor = `rgb(${randcol()},${randcol()},${randcol()})`
            item.style.filter = `brightness(${bright}%)`;
            bright = bright - 20;
        })

    })    
}



function randcol(){
    let col = Math.floor(Math.random()* 256)
    return col;
}

// for(let i=0; i<(16*16); i++){
//     cont.appendChild(grid.cloneNode(true));
// }

button.addEventListener("click", ()=>{
    
    cont.innerHTML = "";
    do{
        a = prompt("Enter the number of rowsxcols 1-100");
        
    }
    while(a<0 || a>100);
    
    creategrid()
    
})







