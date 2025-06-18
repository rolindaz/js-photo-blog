const endpointUrl = 'https://lanciweb.github.io/demo/api/pictures/';
const rowEl = document.querySelector('.row');
const overlayEl = document.getElementById('overlay');
const closeMarkEl = document.getElementById('close-mark');
const modalImgEl = document.getElementById('modal-img');


fetch(endpointUrl)
.then(res => res.json())
.then(data => {
    console.log(data);
    let rowElHTML = ''
    data.forEach((obj)=>{
        const {
            title,
            date,
            url
        } = data;
        const photoMarkup = `
        <div class="col-12 col-md-6 col-lg-4">
        <div class="card">
        <img class="pin" src="./assets/img/pin.svg" alt="Pin">
        <div class="card-head">
        <img class="photo" src="${obj.url}" alt="${obj.title}">
        </div>
        <div class="card-body">
        <span>
        ${obj.title}
        </span>
        <span>
        ${obj.date}
        </span>
        </div>
        </div>
        </div>
        `;
        
        rowElHTML += photoMarkup;
    });
    rowEl.insertAdjacentHTML('beforeend', rowElHTML);

    
    const photoEl = document.querySelectorAll('.photo')
    console.log(photoEl);
    photoEl.forEach((img)=>{
        img.addEventListener('click', ()=>{
            console.log(img.src);
            modalImgEl.src = img.src;
            overlayEl.classList.remove('d-none');
        });
    });
});

closeMarkEl.addEventListener('click', ()=>{
    overlayEl.classList.add('d-none');
});