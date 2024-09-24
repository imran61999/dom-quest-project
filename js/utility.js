function donatefiled(){
    // tk nibe
    let donatefiled = document.getElementById("donate-in").value;
    const donateTk = parseFloat(donatefiled);
    return donateTk;

}
function account(){
    // nijer tk
    let account = document.getElementById('account-tk').innerText;
    const accountBalance = parseFloat(account);
    return accountBalance;

}
function totalDonate(){
    // donation a koto tk ace
    let donatevalue = document.getElementById('total-donat').innerText;
    const totalDonate = parseFloat(donatevalue);
    return totalDonate;

}
