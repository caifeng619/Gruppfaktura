const printFaktura=document.querySelector("#printFaktura");
const fakturaContent=document.querySelector(".faktura");
printFaktura.addEventListener("click",()=>{window.print(fakturaContent)});