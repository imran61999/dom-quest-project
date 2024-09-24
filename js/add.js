document.getElementById('donate-btn').addEventListener('click', function (e) {
    e.preventDefault();

    if (isNaN(donatefiled()) || donatefiled() > account() || donatefiled() <= 0) {
        alert('please enter valid amound');
    }

    else {

        let tk = account() - donatefiled();
        document.getElementById('account-tk').innerText = tk;

        let donateNewTk = totalDonate() + donatefiled();
        document.getElementById('total-donat').innerText = donateNewTk;

        // history add
        let title = document.getElementById('donat-title').innerText;
        const historyf = document.createElement('div')
        historyf.className = "p-4 rounded-md border my-4";
        historyf.innerHTML = `<p> <span>${donatefiled()}</span> Taka is ${title}</p>
        <p>${new Date().toLocaleTimeString()}</p>`

    }



})