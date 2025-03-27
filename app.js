function sortear () {
    let quantidade = document.getElementById('quantidade').value; 
    let de = document.getElementById('de').value;
    let ate = document.getElementById('ate').value;

    let numeroSorteado = Math.floor(Math.random() * (ate - de + 1)) + de;
}