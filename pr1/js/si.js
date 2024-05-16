let amount = 12000;
let rate = 0.5;
let year = 5;
let si = amount * (1 + (rate * year));
let interest = si - amount;

document.querySelector('.amount').innerHTML = "amount :" + amount;
document.querySelector('.rate').innerHTML = "rate :" + rate;
document.querySelector('.year').innerHTML = "year :" + year;
document.querySelector('.total-interest').innerHTML = "Your Total Interest :" +interest;

document.querySelector('.btn') .innerHTML = "Calculate"