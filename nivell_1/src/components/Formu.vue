    <template>
    <div class='container'>
        <h1>Formulari</h1>
        <form name="formulari" id="formulari" v-on:submit.prevent="processar()">

        <p>
        Nom: <input type="text" name="nom" placeholder="Sandokan" class="form-control" v-model="formilari.nom" autocomplete="off"/>
        </p>
        <div v-if="submited && !$formulari.nom.required">El camp 'Nom' és obligatori</div>
    

        <p>
        Mòbil: <input type="text" name="mobil" placeholder="Sandokan" class="form-control" v-model="formilari.mobil" autocomplete="off"/>
        </p>
        <div v-if="submited && !$formulari.mobil.required">El camp 'Mòbil' és obligatori</div>

        <p>
        Codi postal: <input type="text" name="postal" placeholder="Sandokan" class="form-control" v-model="formilari.postal" autocomplete="off"/>
        </p>
        <div v-if="submited && !$formulari.postal.required">El camp 'Codi postal:' és obligatori</div>

        <p>
        Correu electrònic: <input type="text" name="correu" placeholder="Sandokan" class="form-control" v-model="formilari.correu" autocomplete="off"/>
        </p>
        <div v-if="submited && !$formulari.correu.required">El camp 'Correu electrònic:' és obligatori</div>

        <p>
            <input
      type="submit"
      value="Enviar"
      title="Enviar"
     >
    </p>

         </form>
    </div>
     </template>
    
    <script src="./scripts/formu.js">
</script>
    
    <style>
</style>