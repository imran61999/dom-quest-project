// document.getElementById('history').addEventListener('click', function(e){
//     e.preventDefault();

//     const historyTab  = document.getElementById('history');
//     historyTab.classList.add("bg-[#B4F461]");

//     const hide = document.getElementById('history-sec');
//     hide.classList.remove('hidden');

//     const hideCard = document.getElementById('card-hidden');
//     hideCard.classList.add('hidden');

//     // history title and time
//     // history('donat-title' , 'input-three');
//     let title = document.getElementById('donat-title').innerText;
//     const history = document.createElement('div');
//     history.className = "p-4 rounded-md border my-4";
//     // inputField('donate-in')
//     history.innerHTML = `<p> <span>${inputField('donate-in')}</span> Taka is ${title}</p>
//         <p>${new Date().toLocaleTimeString()}</p>`

//     document.getElementById('history-sec').appendChild(history);

    
// });

// document.getElementById('donation').addEventListener('click', function(e){
//     e.preventDefault();

//     const historyTab  = document.getElementById('donation');
//     historyTab.classList.add("bg-[#B4F461]");

//     const hide = document.getElementById('history-sec');
//     hide.classList.add('hidden');
//     hide.classList.remove('bg-[#B4F461]');
//     const hideCard = document.getElementById('card-hidden');
//     hideCard.classList.remove('hidden');
// })