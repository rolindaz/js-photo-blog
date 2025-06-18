const endpointUrl = 'https://lanciweb.github.io/demo/api/pictures/';
const rowEl = document.querySelector('.row');
const overlayEl = document.getElementById('overlay');
const closeMarkEl = document.getElementById('close-mark');
// prendo l'elemento della DOM di cui voglio modificare l'origine, cioè la foto contenuta nella modale
const modalImgEl = document.getElementById('modal-img');

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
        pinEl.classList.add = 'pin';
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
        // quando una foto viene cliccata, dobbiamo fare in modo che sia proprio quella foto a essere mostrata all’interno dell’overlay.
        photoEl.addEventListener('click', ()=>{
            overlayEl.classList.remove('d-none');
            modalImgEl.src = obj.url;
            modalImgEl.alt = obj.title;
        });
        closeMarkEl.addEventListener('click', ()=>{
            overlayEl.classList.add('d-none');
        });
    });
});


