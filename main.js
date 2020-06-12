let table = ["walcz!", "przemyśl to jeszcze"];

const input = document.querySelector("input");
const addButton = document.querySelector(".add");
const resButton = document.querySelector(".clean");
const shoButton = document.querySelector(".showAdvice");
const baner = document.querySelector("h2");
const btnOptions = document.querySelector(".showOptions");

dodaj = (e) =>{
    
    e.preventDefault();
    
    table.push(input.value);
    
    console.log(table);
    
    input.value = "";
}

reset = (e) =>{
    
    e.preventDefault();
    
    table = [];
    
    console.log(table);
    
}

advice = () =>{
    
    let advise = table[Math.floor(Math.random() * table.length)];
    
    baner.textContent = "";
    
    baner.textContent = "Komputerze kochany, pokaż co mam zrobić z tym o czym myślę..." +advise;
    
    console.log(advise);
    
}

showOptions = () =>{
    
    alert(table);
    
}

addButton.addEventListener("click", dodaj);

resButton.addEventListener("click", reset);

shoButton.addEventListener("click", advice);

btnOptions.addEventListener("click", showOptions);