// 1 richiamare l'elemento del dom
// 2 aggiungi griglia al click delgi elementi
// 3 cambia il colore al click delle celle



let grid = document.getElementById('grid');
const livello = document.getElementById('livello');
const play = document.getElementById('btn');
const cols = 10;


btn.addEventListener('click', function createGrid (){
    const choise = livello.value;
    let cols = 10;
    let cells = 10;
    let totalCells = cols * cells;


    if (livello.value == 'easy'){
        for (let i = 0; i < totalCells; i++){
            const cell = document.createElement('div');
            grid.appendChild(cell);
            cell.classList.add('cell-easy');
            cell.innerText = i + 1;
    
            cell.addEventListener('click', function () {
                cell.classList.toggle('clicked');
            }) 
        }
    }

    else if (livello.value == 'medium'){
        cols = 9;
        cells = 9;
        totalCells = cols * cells;

        for (let i = 0; i < totalCells; i++){
            const cell = document.createElement('div');
            grid.appendChild(cell);
            cell.classList.add('cell-medium');
            cell.innerText = i + 1;
    
            cell.addEventListener('click', function () {
                cell.classList.toggle('clicked');
            }) 
        }
    }

    else if (livello.value == 'hard') {

        cols = 7;
        cells = 7;
        totalCells = 49;

        for (let i = 0; i < totalCells; i++){
            const cell = document.createElement('div');
            grid.appendChild(cell);
            cell.classList.add('cell-hard');
            cell.innerText = i + 1;
    
            cell.addEventListener('click', function () {
                cell.classList.toggle('clicked');
            }) 
        }    
    }
})
