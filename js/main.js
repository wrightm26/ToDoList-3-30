let form = document.getElementById('toDoForm');
form.addEventListener('submit', handleFormSubmit);

async function handleFormSubmit(event){
    event.preventDefault(); // Prevent the event from making a new get request and refreshing page
    // console.log(event);
    let taskPhrase = event.target.taskPhrase.value;
    console.log(taskPhrase);

    let toDoList = await getToDoList(taskPhrase);
    console.log(toDoList);

    // Execute the buildCountryCard function with Country Info
    buildToDoListCard(toDoList);

    // Clear the input box at end
    event.target.taskPhrase.value = '';
}

async function getToDoList(taskPhrase){
    let response = await taskPhrase
    return response;
}


function buildToDoListCard(toDoTask) {
    let numList = document.createElement('ol');
    numList.className = 'list-group list-group-numbered';


    let listItem = document.createElement('li');
    listItem.innerHTML = toDoTask;
    listItem.className = 'list-group-item';
    numList.append(listItem);
    


    let col = document.createElement('div');
    col.append(numList);

    let toDoDisplay = document.getElementById('toDoDisplay');
    toDoDisplay.append(col);







}
