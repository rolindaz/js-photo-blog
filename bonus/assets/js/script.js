const endpointUrl = 'https://lanciweb.github.io/demo/api/pictures/';
const rowEl = document.querySelector('.row');

fetch(endpointUrl)
.then(res => res.json())
.then(data => {
    console.log(data);
    let rowElHTML;
    data.forEach(obj => {
        const {
            title,
            date,
            url
        } = data;
        const photoMarkup = `
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card">
                            <img id="pin" src="./assets/img/pin.svg" alt="Pin">
                            <div class="card-head">
                                <img src=${obj.url} alt="${obj.title}">
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
});