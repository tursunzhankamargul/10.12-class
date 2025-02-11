//localStorage.setItem('name', 'Kamar'); //Мәлімет сақтау үшін

// const name = localStorage.getItem('name');// Мәліметті оқу үшін
// console.log(name);

// localStorage.removeItem('name');// Мәліметті жою үшін

// localStorage.clear();// Барлық мәліметтерді жою үшін*/




function saveData() {
    const data = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    localStorage.setItem('Kamar', data);
    localStorage.setItem('22', age);
    alert('Мәліметтер сақталды');
}

function loadData() {
    const name = localStorage.getItem('Kamar');
    const age = localStorage.getItem('22');

    if (name && age) {
        alert(`${name} , ${age}` );
    }
    else {
        alert('Мәліметтер жоқ');
    }
}
function removeData() {
    localStorage.clear();
}


