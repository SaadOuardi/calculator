


// create function => take value from button clicked then display it in input

function display(button){
    let VALUE = button.value;
    console.log(VALUE);
    document.getElementById('result').value += VALUE;
    
}

function calculateResult(){
    let result = document.getElementById('result').value;
    let calculatedResult = eval(result);
    console.log(`the result = ${calculatedResult}`)
    document.getElementById('result').value = calculatedResult;

}


function clearInput(){
    document.getElementById('result').value = '';
}

function deleteData(){
    let data = document.getElementById('result').value;
    let newData = data.slice(0, -1);
    document.getElementById('result').value = newData;
}








// document.getElementById('parahraph').innerHTML = "<strong><i>Saad</i></strong> <img src='/IMG/Meta.webp'> "

// var nodemailer = require('nodemailer');
// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'saadouardi21@gmail.com',
//         pass: 'extgqmdyzljxrgyx'
//     }
// });

// let script = "<img src='/IMG/Meta.webp'>/br Hello ${to} thanks for purchase";
// var mailOptions = {
//     from: 'saadouardi21@gmail.com',
//     to: 'lex666ia@gmail.com',
//     subject: 'Thanks for your purchase',
//     text: script
//     };

// transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
// });