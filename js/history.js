document.getElementById('history').addEventListener('click', function(e){
    e.preventDefault();

    const historyTab  = document.getElementById('history');
    historyTab.classList.add("bg-[#B4F461]")
    const hide = document.getElementById('his-hid');
    hide.classList.remove('hidden');
    const hideCard = document.getElementById('card-hidden');
    hideCard.classList.add('hidden');

    // history title and time

    
});

document.getElementById('donation').addEventListener('click', function(e){
    e.preventDefault();

    const historyTab  = document.getElementById('donation');
    historyTab.classList.add("bg-[#B4F461]");
    const hide = document.getElementById('his-hid');
    hide.classList.add('hidden');
    hide.classList.remove('bg-[#B4F461]');
    const hideCard = document.getElementById('card-hidden');
    hideCard.classList.remove('hidden');
})