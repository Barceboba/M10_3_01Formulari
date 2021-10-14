export default {
    name: 'Formulari',
    props: {
        msg: String
    }
}

const formulari =document.getElementById('formulari');
const inputs = document.querySelectorAll('#formulari input');
const expresions = {
    nom: /^[a-zA-ZÀ-ÿ\s]{6,13}$/, // Nom de 6 a 13 todo pagado
    mobil: /^(0034|\+34)?(\d{ 3 })[- ] ? (\d{ 2 })[- ] ? (\d)[- ] ? (\d)[- ] ? (\d{ 2 }) $/, // Mòbil amb varis formats
    postal: /\b\d{5}\b/g, //Xifra de  5 nº's
    mail: /[\wñç._-]+@[\wñç._-]+(?:\.[\w]+)+/ // Correu amb ñ i ç
}
const validaFormulari = (e) => {
    switch (e.target.name) {
        case "nom":
           validaCamps(expresions.nom, e.target, 'nom');
        break;

        case "mobil":
            validaCamps(expresions.mobil, e.target, 'mobil');
            break;

        case "postal":
            validaCamps(expresions.postal, e.target, 'postal');
            break;
            
        case "correu":
            validaCamps(expresions.correu, e.target, 'correu');
            break;
            
    } 
}

const validaCamps = (expresio, input, camp) => {
    if (expresio.test(input.value)) {

        document.getElementById(`grup__${camp}`).classList.remove('formulari__grup-incorrecte');
        document.getElementById(`grup__${camp}`).classList.add('formulari__grup-correcte');
        document.querySelector(`#grup__${camp} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grup__${camp} i`).classList.add('fa-check-circle');
        document.querySelector(`grup__${camp} .formulari__input-error`).classList.remove('formulari__input-error-actiu');
    } else {
        document.getElementById(`grup__${camp}`).classList.add('formulari__grup-incorrecte');
        document.getElementById(`grup__${camp}`).classList.remove('formulari__grup-correcte');
        document.querySelector(`#grup__${camp} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grup__${camp} i`).classList.add('fa-times-circle');
        document.querySelector(`grup__${camp} .formulari__input-error`).classList.add('formulari__input-error-actiu');

    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validaFormulari);
    input.addEventListener('blur', validaFormulari);
});
formulari.addEventListener('submit', (e) => {
    e.preventDefault();
});