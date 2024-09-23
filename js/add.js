document.getElementById('donate-btn').addEventListener('click', function(e){
    e.preventDefault();
    let donatefiled = document.getElementById('donate-in').value;
    let account = document.getElementById('account-tk').innerText;
    let donatevalue = document.getElementById('total-donat').innerText;

    const donateTk = parseFloat(donatefiled);
    const accountBalance = parseFloat(account);
    const totalDonate = parseFloat(donatevalue);

if((donatefiled.Number === true) && (donatefiled > 0)){
    let tk = account - donatefiled; 
    document.getElementById('account-tk').innerText = tk;

    let donateNewTk = totalDonate + donateTk;
    document.getElementById('total-donat').innerText = donateNewTk;
}
else{
    alert('sorry wrong your value');
}
    

    // let newTk = tk + donatevalue;
    // document.getElementById('total-donat').innerText = newTk;
    // console.log(newTk);
    

})