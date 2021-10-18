<!--<template>
<div>
    <FormulateForm class="login-form" v-model="formValues">
    <h2 class="form-title">Formulari</h2>

    <FormulateInput
      name="nom"
      type="text"
      label="Your name"
      placeholder="Your name"
      validation="required"
    />

    <FormulateInput
      name="mobil"
      type="number"
      label="Your name"
      placeholder="Your name"
      validation="required"
    />

    <FormulateInput
      name="codiPostal"
      type="text"
      label="Your name"
      placeholder="Your name"
      validation="required"
    />

    <FormulateInput
      name="name"
      type="text"
      label="Your name"
      placeholder="Your name"
      validation="required"
    />

    <FormulateInput
      name="email"
      type="email"
      label="Email address"
      placeholder="Email address"
      validation="required|email"
    />
</div>
</template> -->
<template>
  <FormulateForm class="login-form" v-model="formValues">
    <h2 class="form-title">Formulari Nivell U</h2>

    <FormulateInput
      name="nom"
      type="text"
      label="El vostre nom"
      placeholder="Pepito  Palote"
      validation="required|min:6|max:13"
    />
    <FormulateInput
      name="mobil"
      type="text"
      label="Número de mòbil"
      placeholder="Número de mòbil"
      validation="required|number"
      
    />
    <FormulateInput
      name="postal"
      type="text"
      label="Codi postal"
      placeholder="Codi postal"
      validation="required|number"
    />
    <FormulateInput
      name="email"
      type="email"
      label="Adreça electrònica"
      placeholder="Email address"
      validation="required|email"
    />
   
    <FormulateInput type="submit" label="Enviar" />
    <pre class="code" v-text="formValues" />
  </FormulateForm>
</template>



<script src="./scripts/formularis.js"></script>

<style src="./styles/formularis.css">
</style>
