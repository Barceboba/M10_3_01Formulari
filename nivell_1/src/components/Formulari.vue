<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h1>Formulari</h1>
        <form action="" class="formulari" id="formulari">
          <!-- Grup nom -->
          <div class="formulari__grup" id="grup__usuari">
            <label for="nom" class="formulari__label">Faciliti el seu nom.</label>
            <div class="formulari__grup-input">
              <input type="text" class="formulari__input" name="nom" id="nom" placeholder="Sandokan"/>
              <i class="formulari__validacio-estat fas fa-times-circle"></i>
            </div>
            <p class="formulari__input-error">El nom ha de tenir un mínim de 6 caràcters i un màxim de 13 caràcters.</p>
          </div>

          <!-- Grup mobil -->
          <div class="formulari__grup" id="grup__mobil">
            <label for="mobil" class="formulari__label">Faciliti el seu mòbil</label>
            <div class="formulari__grup-input">
              <input type="number" class="formulari__input" name="mobil" id="mobil" placeholder="123 456 789"/>
              <i class="formulari__validacio-estat fas fa-times-circle"></i>
            </div>
            <p class="formulari__input-error">El número de telèfon mòbil introduït no és vàlid.</p>
          </div>

          <!-- Grup codi postal -->
          <div class="formulari__grup" id="grup__postal">
            <label for="postal" class="formulari__label">Faciliti el seu codi postal</label>
            <div class="formulari__grup-input">
              <input type="number" class="formulari__input" name="postal" id="postal" placeholder="12345"/>
              <i class="formulari__validacio-estat fas fa-times-circle"></i>
            </div>
            <p class="formulari__input-error">El número de codi postal introduït no és vàlid.</p>
          </div>

          <!-- Grup correu electrònic -->
          <div class="formulari__grup" id="grup__correu">
            <label for="correu" class="formulari__label">Faciliti el seu correu electrònic</label>
            <div class="formulari__grup-input">
              <input type="email" class="formulari__input" name="correu" id="correu" placeholder="guaitatu@boina.info"/>
              <i class="formulari__validacio-estat fas fa-times-circle"></i>
            </div>
            <p class="formulari__input-error">El correu electrònic introduït no és vàlid.</p>
          </div>

          <div class="formulari__missatge" id="formulari__missatge">
           <p> <i class="fas fa-exclamation-triangle"></i> <b> Erroni:</b> Omplir el formulari correctament, sis plau.</p>
          </div>

        <div class="formulari__grup formulari__grup-btn-enviar">
        <button type="submit" class="formulari__btn">Enviar</button>
          <p class="formulari__missatge-exit" id="formulari__missatge-exit">Formulari enviat correctament</p>
       </div>

        </form>
      </div>
    </div>
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
