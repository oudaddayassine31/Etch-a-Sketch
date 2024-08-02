const container=document.querySelector("div.container")
for (let i=1 ; i<=16 ; i++) {
    let div = document.createElement("div");
    container.appendChild(div);
}
for (const div of document.querySelectorAll("div.container div")){
    div.addEventListener("mouseover" , ()=>{
        div.style.backgroundColor="blue";
    })
    div.addEventListener("mouseout",()=>{
        div.style.backgroundColor="";
    })
}
console.log(typeof(document.querySelectorAll("div.container div")))