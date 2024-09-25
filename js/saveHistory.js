function saveHistory(id1,id2,title){
    const donation = document.getElementById(id1);
    const amount = donation.value;
    const amountTk = parseInt(amount)
    
    if(amountTk>0){
        const balanceField = document.getElementById('account-tk');
    const balanceTk = balanceField.innerText;
    const balanceTkInt = parseInt(balanceTk);
    if(amountTk<=balanceTkInt){
        const totalDonateDisplay = document.getElementById(id2)
        const totalDonateDisplayAmount =totalDonateDisplay.innerText;
        const totalDonateDisplayAmountInt =parseInt(totalDonateDisplayAmount);
        const total = amountTk+totalDonateDisplayAmountInt;
        totalDonateDisplay.innerText =total;
    
        
        if(balanceTkInt>0){
            const balance = balanceTkInt-amountTk
        balanceField.innerText=balance;
    
        const historyContainer = document.getElementById('history-sec')
        const div = document.createElement('div');
        div.classList= "border p-4 rounded-xl mt-4"
        div.innerHTML=`<p> <span>${amountTk}</span> Taka is ${title}</p>
                <p>${new Date().toLocaleTimeString()}</p>`
        historyContainer.appendChild(div)
        my_modal_1.showModal()
        }
        else{
            alert("Balance already Finished")
        }
    }else{
        alert("Insufficient balance")
    }
   
    }
    else{
        alert('Please Enter a valid number')
    }
    
}

function showHistory(){
    // const history = document.getElementById('history-sec')
    // history.classList.remove('hidden')
    const historyTab  = document.getElementById('history');
    historyTab.classList.add("bg-[#B4F461]");

    const hide = document.getElementById('history-sec');
    hide.classList.remove('hidden');

    const hideCard = document.getElementById('card-hidden');
    hideCard.classList.add('hidden');

    const donationButton = document.getElementById('donation');
    donationButton.classList.remove('bg-[#B4F461]')

}
function showDonation(){
    
    const historyTab  = document.getElementById('history');
    historyTab.classList.remove("bg-[#B4F461]");

    const hide = document.getElementById('history-sec');
    hide.classList.add('hidden');

    const hideCard = document.getElementById('card-hidden');
    hideCard.classList.remove('hidden');

    const donationButton = document.getElementById('donation');
    donationButton.classList.add('bg-[#B4F461]')

}
