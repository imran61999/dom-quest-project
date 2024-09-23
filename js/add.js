document.getElementById('donate-btn').addEventListener('click', function (e) {
    e.preventDefault();
    let donatefiled = document.getElementById('donate-in').value;
    let account = document.getElementById('account-tk').innerText;
    let donatevalue = document.getElementById('total-donat').innerText;

    // typeof(donatefiled) === "number") &&
    const donateTk = parseFloat(donatefiled);
    const accountBalance = parseFloat(account);
    const totalDonate = parseFloat(donatevalue);

    if (isNaN(donatefiled) || donatefiled > account || donatefiled <= 0) {
        alert('please enter valid amound');
    }

    else {
        let tk = account - donatefiled;
        document.getElementById('account-tk').innerText = tk;

        let donateNewTk = totalDonate + donateTk;
        document.getElementById('total-donat').innerText = donateNewTk;

        // history add
        let title = document.getElementById('donat-title').innerText;

        const historyf = document.createElement('div')
        historyf.className = "p-4 rounded-md border my-4";
        historyf.innerHTML = `<p> <span>${donatefiled}</span> Taka is ${title}</p>
        <p>${new Date().toLocaleTimeString()}</p>`

        document.getElementById('his-hid').appendChild(historyf);
        alert("successfuly donate");
    }


    let newTk = tk + donatevalue;
    document.getElementById('total-donat').innerText = newTk;
    // console.log(newTk);


})