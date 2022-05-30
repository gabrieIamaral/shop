//getting the HTML Item that I want
let searchBtn = document.getElementsByClassName('search-icon')[0];
let searchBar = document.getElementsByClassName('search-icon')[1];
let overflow = document.getElementById('body');
let cartBtn = document.getElementsByClassName('cart-icon')[0];
let cart = document.getElementsByClassName('cart-icon')[1];
let closeBtn = document.getElementsByClassName('cart-icon')[2];

function search() {
    searchBtn.classList.toggle('search-toggle');
    searchBar.classList.toggle('search-toggle');
    overflow.classList.toggle('not-overlay');
}

function cartProducts() {
    cartBtn.classList.toggle('cart-active');
    cart.classList.toggle('cart-active');
    overflow.classList.toggle('not-overlay');
}

function closeCart() {
    closeBtn.classList.toggle('cart-close');
    cartBtn.classList.toggle('cart-active');
    cart.classList.toggle('cart-active');
    overflow.classList.toggle('not-overlay');
}

searchBtn.addEventListener('click', search);
cartBtn.addEventListener('click', cartProducts);
closeBtn.addEventListener('click', closeCart);