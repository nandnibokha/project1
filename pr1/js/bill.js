let product = "book";
let price = 100;
let total = 100;
let discount = 2 * total / 100;
let bill = total - discount;

document.querySelector('.product').innerHTML = "product :" + product;
document.querySelector('.price').innerHTML = "price :" + price;
document.querySelector('.total').innerHTML = "total :" + total;
document.querySelector('.discount').innerHTML = "discount :" + discount;
document.querySelector('.total-bill').innerHTML = "Your Bill :" + bill;

document.querySelector('.btn') .innerHTML = "Calculate"