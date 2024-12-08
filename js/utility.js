// get value form input

function inputToValue(id){
    return Number(document.getElementById(id).value)
}

// get number form element
function elementToNumber(id){
    return Number(document.getElementById(id).innerText)
}
function elementToText(id){
    return document.getElementById(id).innerText;
}

// update to history
function updateOnHistory(donationAmount, donateTitle){
    const div = document.createElement('div');
    div.classList.add('border-2', 'rounded-2xl', 'space-y-5', 'p-8')
    div.innerHTML = `
    <p class="text-xl font-bold">${donationAmount} Taka is ${donateTitle} </p>
    <p class = "font-light">Date : ${new Date()} </p>
    `
    const historyContainer = document.getElementById('history-container');
    document.getElementById('history-container').insertBefore(div, historyContainer.lastChild)
}

// btn color swipe
function btnColorSwipe(clickedID, changedID) {

    document.getElementById(changedID).classList.remove('bg-btn_color');
    document.getElementById(changedID).classList.add('text-light_color4', 'bg-transparent');
    document.getElementById(clickedID).classList.remove('bg-transparent');
    document.getElementById(changedID).classList.add('bg-btn_color');
}

function historyBtnClick(cardID, historyID){
    document.getElementById(cardID).classList.add('hidden');
    document.getElementById(historyID).classList.remove('hidden'); 
}
