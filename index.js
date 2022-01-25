let fillField = document.querySelector(".fill-field");
let container = document.querySelector(".container");
let numberOfCells= document.querySelector('input');
let cells = document.querySelectorAll(".cell");
let clearField = document.querySelector('.clear-field');

fillField.addEventListener('click', (event)=>{
if(numberOfCells.value<=99&&numberOfCells.value>0){
  for(let i = 0; i<(numberOfCells.value**2);i++){
    let cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell);
  }
  fillField.disabled=true;
}else{
  fillField.disabled=false;
  alert("number should be less than 100");
}
  container.style.gridTemplateColumns = `repeat(${numberOfCells.value},1fr)`;
  container.style.gridTemplateRows = `repeat(${numberOfCells.value},1fr)`;
cells = document.querySelectorAll(".cell");
for(let i = 0; i<cells.length;i++){
  cells[i].addEventListener('click', (event)=>{
      cells[i].classList.toggle("toggle-cell");
  });
}

});

clearField.addEventListener('click',(event)=>{
  while(container.firstChild)
  container.removeChild(container.firstChild);
  fillField.disabled=false;
});
