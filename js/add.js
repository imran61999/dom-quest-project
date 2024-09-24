// document.getElementById('donate-btn').addEventListener('click', function (e) {
//     e.preventDefault();

//     if (isNaN(inputField('donate-in')) || inputField('donate-in') > textField('account-tk') || inputField('donate-in') <= 0) {
//         alert('please enter valid amound');
//     }
//     else {
//         let tk =  textField('account-tk') - inputField('donate-in');
//         document.getElementById('account-tk').innerText = tk;
//         let donateNewTk = textField('total-donat') + inputField('donate-in');
//         document.getElementById('total-donat').innerText = donateNewTk;

//         // history add
//         history('donat-title');
//     }
// })

// document.getElementById('donat-two').addEventListener('click', function (e) {
//     e.preventDefault();

//     if (isNaN(inputField('input-two')) || inputField('input-two') > textField('account-tk') || inputField('input-two') <= 0) {
//         alert('please enter valid amound');
//     }
//     else {
//         let tk =  textField('account-tk') - inputField('input-two');
//         document.getElementById('account-tk').innerText = tk;
//         let donateNewTk = textField('donatFiled') + inputField('input-two');
//         document.getElementById('donatFiled').innerText = donateNewTk;

//         // history add
//         history('donat-title'); 
//     }
// })
// // third card
// document.getElementById('donat-three').addEventListener('click', function (e) {
//     e.preventDefault();

//     if (isNaN(inputField('input-three')) || inputField('input-three') > textField('account-tk') || inputField('input-three') <= 0) {
//         alert('please enter valid amound');
//     }
//     else {
//         let tk =  textField('account-tk') - inputField('input-three');
//         document.getElementById('account-tk').innerText = tk;
        
//         let donateNewTk = textField('donate-tk') + inputField('input-three');
//         document.getElementById('donate-tk').innerText = donateNewTk;

//     }
// })