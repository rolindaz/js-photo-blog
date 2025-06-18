const endpointUrl = 'https://lanciweb.github.io/demo/api/pictures/';
const rowEl = document.querySelector('.row');
// prendo l'elemento della DOM che voglio che ricompaia, cioè l'overlay
const overlayEl = document.getElementById('overlay');

fetch(endpointUrl)
.then(res => res.json())
.then(data => {
    console.log(data);
    data.forEach((obj)=>{
        const {
            title,
            date,
            url
        } = data;
        // creazione elementi della DOM
        const colEl = document.createElement('div');
        colEl.classList.add('col-12', 'col-md-6', 'col-lg-4');
        console.log(colEl);
        const cardEl = document.createElement('div');
        cardEl.classList.add('card');
        console.log(cardEl);
        const pinEl = document.createElement('img');
        pinEl.src = "./assets/img/pin.svg";
        pinEl.alt = 'Pin';
        pinEl.id = 'pin';
        console.log(pinEl);
        const cardHeadEl = document.createElement('div');
        cardHeadEl.classList.add('card-head');
        console.log(cardHeadEl);
        const photoEl = document.createElement('img');
        photoEl.src = obj.url;
        photoEl.alt = obj.title;
        console.log(photoEl);
        const cardBodyEl = document.createElement('div');
        cardBodyEl.classList.add('card-body');
        console.log(cardBodyEl);
        const photoTitle = document.createElement('span');
        photoTitle.textContent = obj.title;
        console.log(photoTitle);
        const photoDate = document.createElement('span');
        photoDate.textContent = obj.date;
        console.log(photoDate);
        rowEl.appendChild(colEl);
        console.log(rowEl);
        colEl.appendChild(cardEl);
        cardEl.appendChild(pinEl);
        cardEl.appendChild(cardHeadEl);
        cardEl.appendChild(cardBodyEl)
        cardHeadEl.appendChild(photoEl);
        cardBodyEl.appendChild(photoTitle);
        cardBodyEl.appendChild(photoDate);
        // facciamo sì che cliccando una qualunque foto, l’overlay ricompaia.
        photoEl.addEventListener('click', ()=>{
            overlayEl.classList.remove('d-none');
        });
    });
});



// devo associare un add event listener alle foto così da assegnare un display block (tramite una classe) al div dell'overlay


