document.getElementById('history').addEventListener('click', function(e){
    e.preventDefault();

    const historyTab  = document.getElementById('history');
    historyTab.classList.add("bg-[#B4F461]")
    const hide = document.getElementById('his-hid')
    hide.classList.remove('hidden');
    const hideCard = document.getElementById('card-hidden')
    hideCard.classList.add('hidden');

    // history title and time

    let title = document.getElementById('donat-title').innerText;
    document.getElementById('h-title').innerText= title;
})