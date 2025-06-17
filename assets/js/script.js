const endpointUrl = 'https://lanciweb.github.io/demo/api/pictures/';
const rowEl = document.querySelector('.row');

fetch(endpointUrl)
.then(res => res.json())
.then(data => {
    console.log(data);
    const photoMarkup = `
    
    `
})
