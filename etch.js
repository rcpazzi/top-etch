container = document.querySelector(".container")

const canvasHeight = container.clientWidth
gridForm = document.querySelector("#grid-form")

gridForm.addEventListener('submit', e => {
    e.preventDefault();

    let gridSize = document.querySelector("#grid-size").value
    generateGrid(gridSize)
})

function generateGrid(gridSize){
    let gridElementDimension = canvasHeight / gridSize
    container.replaceChildren()

    for (let i = 0; i < gridSize * gridSize; i++){
        
        const gridElement = document.createElement('div')
        gridElement.classList.add('grid')
        gridElement.id = `div${i}`

        gridElement.style.cssText = `
        display: flex;
        border-style: solid;
        border-color: grey;
        height: ${gridElementDimension}px;
        width: ${gridElementDimension}px;
        border-width: 1px;
        box-sizing: border-box
        `
        container.append(gridElement)
    }
}

container.addEventListener('mousemove', e => {
    if (e.target.classList.contains('grid')){
        e.target.style.backgroundColor = 'black'
    }
})