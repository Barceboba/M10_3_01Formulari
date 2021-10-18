export default {
    name: 'Formulari',
    data() {
        return {

            nom: '',
            mobil: '',
            postal: '',
            correu: '',

            //Missatges error
            errorObligatori: 'Aquest camp és obligatori.',
            errorNom: 'El nom ha de tenir un mínim de 6 caràcters i un màxim de 13 caràcters.',
            errorNumeros: 'El nom no pot incloure números.',
            errorSolsNumeros: 'El camp només pot incloure números.',
            errorCorreu: 'Introduir correu electrònic vàlid.',
            errorPostal: 'El codi postal deu tenir cinc xifres.',
            errorMobil: 'Introduir un número de mòbil correcte.',

            //Array
            anom: [],
            amobil: [],
            apostal: [],
            acorreu: [],

            //Expresions regulars
            regExpMobil: / ?(\d{3})[- ]?(\d{2})[- ]?(\d)[- ]?(\d)[- ]?(\d{2})$/gm,
            regExpCorreu: /[\wñç._-]+@[\wñç._-]+(?:\.[\w]+)+/,
            regExpPostal: /(^\d{5}$)|(^\d{}-\d{4}$)/,


        }
    },

    methods: {
        Validar() {
            //Validació nom
            this.anom = [];
            if (!this.nom) {
                this.anom.push(this.errorObligatori);
            } if (this.nom.length < 6 || this.nom.length > 13) {
                this.anom.push(this.errorNom);
            } if (/[0-9]/.test(this.nom)) {
                this.anom.push(this.errorNumeros);
            }

            //Validació mobil
            this.amobil = [];
            if (!this.mobil) {
                this.amobil.push(this.errorObligatori);
                /* } else if (isNaN(this.mobil)) {
                    this.amobil.push(this.errorSolsNumeros); */
            } else if (!this.regExpMobil.test(this.mobil))
                this.amobil.push(this.errorMobil);

            //Validació Codi Postal
            this.apostal = [];
            if (!this.postal) {
                this.apostal.push(this.errorObligatori);
                /*  } if (isNaN(this.postal)) {
                     this.apostal.push(this.errorSolsNumeros); */
            } else if (!this.regExpPostal.test(this.postal))
                this.apostal.push(this.errorPostal);


            //Validació Correu electrònic
            this.acorreu = [];
            if (!this.correu) {
                this.acorreu.push(this.errorObligatori);
            } else if (!this.regExpCorreu.test(this.correu))
                this.acorreu.push(this.errorCorreu);
        }
    },
}




/* const formulari =document.getElementById('formulari');
const inputs = document.querySelectorAll('#formulari input');
const expresions = {
    nom: /^[a-zA-ZÀ-ÿ\s]{6,13}$/, // Nom de 6 a 13 todo pagado
    mobil: /^(0034|\+34)?(\d{ 3 })[- ] ? (\d{ 2 })[- ] ? (\d)[- ] ? (\d)[- ] ? (\d{ 2 }) $/, // Mòbil amb varis formats
    postal: /\b\d{5}\b/g, //Xifra de  5 nº's
    correu: /[\wñç._-]+@[\wñç._-]+(?:\.[\w]+)+/ // Correu amb ñ i ç
}

const camps = {
    nom: false,
    mobile: false,
    postal: false,
    correu: false
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
        camps[camp] = true;
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

    if (camps.nom && camps.mobil && camps.postal && camps.mail){
        formulari.reset();
        document.getElementById('formulari__missatge-exit').classList.add('formulari__missatge-exit-actiu');
        setTimeout(() => {
            document.getElementById('formulari__missatge-exit').classList.remove('formulari__missatge-exit-actiu');
        }, 5000);
        document.querySelectorAll('.formulari__grup-correcte').forEach((icona) => {
            icona.classList.remove('formulari__grup-correcte');
        });
    }else{
        document.getElementById('formulari__missatge').classList.add('formulari__missatge-actiu');
    }

}); */