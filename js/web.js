// Donate Noakhali  button clicked
document.getElementById('donate-1-btn').addEventListener('click', function(){
  
    const check = document.getElementById('donate-1-input').value;
    const totalBalanceCheck = document.getElementById('total-balance').innerText;
    if (check === '' || isNaN(check) || check <= 0) {
        alert('Please enter a correct Number');
        return;
    }
    else if(Number(totalBalanceCheck) < Number(check)){
        alert('You do not have enough balance');
        return;
    }
    

    const card1DonationAmount = inputToValue('donate-1-input');
    const totalBalance = elementToNumber('total-balance');
    const card1TotalDonation = elementToNumber('donate-1-total-donation');
    const card1title = elementToText('donate-1-title');

    // display the value to card specific amount
    document.getElementById('donate-1-total-donation').innerText = card1TotalDonation + card1DonationAmount;

    // minus from main balance
    document.getElementById('total-balance').innerText = totalBalance - card1DonationAmount;

    // update it on history
    updateOnHistory(card1DonationAmount, card1title);
    document.getElementById('my_modal_1').classList.remove('hidden');

    // reset the input
    document.getElementById('donate-1-input').value = "";

    // show modal
    const modal = document.getElementById('my_modal_1');
    modal.showModal();
})

// Donate feni button clicked
document.getElementById('donate-2-btn').addEventListener('click', function(){
   
    const check = document.getElementById('donate-2-input').value;
    const totalBalanceCheck = document.getElementById('total-balance').innerText;
    if (check === '' || isNaN(check) || check <= 0) {
        alert('Please enter a correct Number');
        return;
    }
    else if(Number(totalBalanceCheck) < Number(check)){
        alert('You do not have enough balance');
        return;
    }
    
    // data read
    const card2DonationAmount = inputToValue('donate-2-input');
    const card2TotalDonation = elementToNumber('donate-2-total-donation');
    const card2title = elementToText('donate-2-title');
    const totalBalance = elementToNumber('total-balance');

    // display the value to card specific amount
    document.getElementById('donate-2-total-donation').innerText = card2TotalDonation + card2DonationAmount;

    // minus from main balance
    document.getElementById('total-balance').innerText = totalBalance - card2DonationAmount;

    // update it on history
    updateOnHistory(card2DonationAmount, card2title);

     // reset the input
     document.getElementById('donate-2-input').value = "";

    // show modal
    const modal = document.getElementById('my_modal_2');
    modal.showModal();
})

// Donate quota movement button clicked
document.getElementById('donate-3-btn').addEventListener('click', function(){
  
    const check = document.getElementById('donate-3-input').value;
    const totalBalanceCheck = document.getElementById('total-balance').innerText;
    if (check === '' || isNaN(check) || check <= 0) {
        alert('Please enter a correct Number');
        return;
    }
    else if(Number(totalBalanceCheck) < Number(check)){
        alert('You do not have enough balance');
        return;
    }

    // data read
    const card3DonationAmount = inputToValue('donate-3-input');
    const card3TotalDonation = elementToNumber('donate-3-total-donation');
    const card3title = elementToText('donate-3-title');
    const totalBalance = elementToNumber('total-balance');

    // display the value to card specific amount
    document.getElementById('donate-3-total-donation').innerText = card3TotalDonation + card3DonationAmount;
    
    // minus from main balance
    document.getElementById('total-balance').innerText = totalBalance - card3DonationAmount;

    // update it on history
    updateOnHistory(card3DonationAmount, card3title);

     // reset the input
     document.getElementById('donate-3-input').value = "";

    // show modal
    const modal = document.getElementById('my_modal_3');
    modal.showModal();
    
})

// history btn clicked
document.getElementById('history-btn').addEventListener('click', function(){
    historyBtnClick('card-container', 'history-container')
    btnColorSwipe('history-btn', 'donation-btn');
    document.getElementById('footer').classList.add('hidden');
})

// donation btn clicked
document.getElementById('donation-btn').addEventListener('click', function(){
    historyBtnClick('history-container', 'card-container');
    btnColorSwipe('donation-btn', 'history-btn');
    document.getElementById('footer').classList.remove('hidden');
})
