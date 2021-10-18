<template>
  <div>
    <h1>Formulari nivell 1</h1>
    <form @submit.prevent="Validar" novalidate="true">
      <!-- Grup nom -->

      <label for="fname">Faciliti el seu nom </label>
      <input type="text" id="fname" name="nom" v-model.trim="nom"><br>

      <span v-for="errorNom in anom" :key="errorNom.id"> {{ errorNom }}</span><br>
    <!--   <div class="formulari__grup" id="grup__usuari">
        <label for="nom" class="formulari__label">Faciliti el seu nom.</label>
        <div class="formulari__grup-input">
          <input
            type="text"
            class="formulari__input"
            name="nom"
            id="nom"
            placeholder="Sandokan"
          />
          <i class="formulari__validacio-estat fas fa-times-circle"></i>
        </div>
        <p class="formulari__input-error">
          El nom ha de tenir un mínim de 6 caràcters i un màxim de 13 caràcters.
        </p>
      </div> -->

      <!-- Grup mobil -->
      <label for="lmobil">Faciliti el seu mòbil </label>
      <input type="tel" id="lmobil" name="mobil" v-model.trim.number="mobil"><br>

      <span v-for="errorm in amobil" :key="errorm.id"> {{ errorm  }}</span><br> 
     <!--  <div class="formulari__grup" id="grup__mobil">
        <label for="mobil" class="formulari__label"
          >Faciliti el seu mòbil</label
        >
        <div class="formulari__grup-input">
          <input
            type="number"
            class="formulari__input"
            name="mobil"
            id="mobil"
            placeholder="123 456 789"
          />
          <i class="formulari__validacio-estat fas fa-times-circle"></i>
        </div>
        <p class="formulari__input-error">
          El número de telèfon mòbil introduït no és vàlid.
        </p>
      </div> -->

      <!-- Grup codi postal -->

      <label for="lpostal">Faciliti el seu codi postal </label>
      <input type="text" id="lpostal" name="lpostal" v-model.trim.number="postal"><br>

      <span v-for="errorCorreu in apostal" :key="errorCorreu.id"> {{ errorCorreu }}</span><br>
     <!--  <div class="formulari__grup" id="grup__postal">
        <label for="postal" class="formulari__label"
          >Faciliti el seu codi postal</label
        >
        <div class="formulari__grup-input">
          <input
            type="number"
            class="formulari__input"
            name="postal"
            id="postal"
            placeholder="12345"
          />
          <i class="formulari__validacio-estat fas fa-times-circle"></i>
        </div>
        <p class="formulari__input-error">
          El número de codi postal introduït no és vàlid.
        </p>
      </div> -->

      <!-- Grup correu electrònic -->

      <label for="lcorreu">Faciliti el seu correu electrònic </label>
      <input type="email" id="lcorreu" name="correu" v-model.trim="correu"><br>

      <span v-for="errorCorreu in acorreu" :key="errorCorreu.id"> {{ errorCorreu  }}</span><br>
     <!--  <div class="formulari__grup" id="grup__correu">
        <label for="correu" class="formulari__label"
          >Faciliti el seu correu electrònic</label
        >
        <div class="formulari__grup-input">
          <input
            type="email"
            class="formulari__input"
            name="correu"
            id="correu"
            placeholder="guaitatu@boina.info"
          />
          <i class="formulari__validacio-estat fas fa-times-circle"></i>
        </div>
        <p class="formulari__input-error">
          El correu electrònic introduït no és vàlid.
        </p>
      </div> -->

      <!-- <div class="formulari__missatge" id="formulari__missatge">
        <p>
          <i class="fas fa-exclamation-triangle"></i> <b> Erroni:</b> Omplir el
          formulari correctament, sis plau.
        </p>
      </div>

      <div class="formulari__grup formulari__grup-btn-enviar">
        <button type="submit" class="formulari__btn">Enviar</button>
        <p class="formulari__missatge-exit" id="formulari__missatge-exit">
          Formulari enviat correctament
        </p>
      </div> -->
      <input type="submit" value="Validar" class="boto">
    </form>
  </div>
</template>

<script src="./scripts/formulari.js">
/* export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
} */
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./styles/formulari.css">
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
