const db = require('./mySQL')

function getBankRoll() {

    const sqlQuery = "SELECT * FROM rolls"

    let rolls = db.execute(sqlQuery, (err, result) => {
    if (err) {
        console.log(err)
    } else {
        return result;
    }
})

    console.log("rool at the end of function: " + rool)
}
const rolls = getBankRoll();
console.log(rolls)
// const BankRoll = getBankRoll();

// const bankrollAlert = {
//     10: ["we not making it yo", "come on bra, push", "try a bit harder yo"]
// }

// let maxAlertsForCurrentBankRoll = bankrollAlert[BankRoll].length;

// document.body.onload = function () {
//     // alert(bankrollAlert[BankRoll][Math.random() * (maxAlertsForCurrentBankRoll)])
//     let randomNumb = Math.floor(Math.random() * (maxAlertsForCurrentBankRoll + 1));
//     alert(bankrollAlert[BankRoll][randomNumb])
// }