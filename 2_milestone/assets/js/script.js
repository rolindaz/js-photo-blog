const endpointUrl = 'https://lanciweb.github.io/demo/api/pictures/';
const rowEl = document.querySelector('.row');

fetch(endpointUrl)
.then(res => res.json())
.then(data => {
    console.log(data);
    const photoMarkup = `
                <div class="col-12 col-6 col-4">
                    <div class="card">
                        <img id="pin" src="./assets/img/pin.svg" alt="Pin">
                        <div class="card-head">
                        </div>
                        <div class="card-body">
                            <span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </span>
                            <span>
                                lorem
                            </span>
                        </div>
                    </div>
                </div>
    `
})
