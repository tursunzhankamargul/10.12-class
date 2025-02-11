/*const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');

searchButton.addEventListener('click',()=> {
    searchInput.classList.toggle('highlight');
});
    

searchButton.addEventListener('dbclick',()=> {
    searchInput.classList.remove('shadow');
});

const text = document.getElementById('text');
const show = document.getElementById('show');

let isShown= false;

show.addEventListener('click',() => {
    text.classList.toggle('hide');
    isShown =!isShown;
    show.textContent= isShown? 'show less':'show more';
    
    

});*/
const body = document.body;
const switchMode =document.getElementById('switch');

switchMode.addEventListener('click',()=>{
    body.classList.toggle('dark');
});