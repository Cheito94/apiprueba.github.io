const formElement = document.getElementById("guardarInfo");

formElement.addEventListener("submit", (event)=> {
    event.preventDefault();
    let descripcionInfo = document.getElementById("descripcionInfo").value;
    let precioInfo = document.getElementById("precioInfo").value;
    let info = { descripcionInfo: descripcionInfo, precioInfo: precioInfo};
    let infoJson = JSON.stringify(info);
    
    //Enviar los datos al Backend y guardarlos
    fetch('http://localhost:3001/informaciones', {
        method : 'Post',
        body: infoJson
    })
})

fetch('http://localhost:3001/informaciones').then(x => x.json()).then(console.log)