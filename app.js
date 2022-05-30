//getting the HTML Item that I want
let searchBtn = document.getElementsByClassName('search-icon')[0];
let searchBar = document.getElementsByClassName('search-icon')[1];
let overflow = document.getElementById('body');

function search() {
    searchBtn.classList.toggle('search-toggle');
    searchBar.classList.toggle('search-toggle');
    overflow.classList.toggle('not-overlay');
}

searchBtn.addEventListener('click', search);
