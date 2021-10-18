
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

export default {
    name: 'Formu',
    setup() {
        return {
            v$: useVuelidate()
        }



    }
}

data() 
    return {

        submited: false,
        nom: null,
        mobil: null,
        postal: null,
        correu: null
    }




validations() 
    return {
        nom: { required, minLength },
        mobil: { required },
        postal: { required },
        correu: { required, email }

    }
