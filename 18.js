const row = document.querySelector('.row');


const data = ['color', 'size', 'weight', 'type'];

data.forEach((item) => {
    const pill = document.createElement('span');
    pill.textContent = item;
    pill.style.background = 'gray';
    pill.style.padding = '10px';
    pill.style.color = 'white';
    pill.style.borderRadius = '20px';

    row.appendChild(pill);


})




