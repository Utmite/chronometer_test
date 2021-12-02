<template>
  <div class="hello text-center font-bold text-3xl ">
    <h1>{{ msg }}</h1>
  </div>
  <div class="text-center">
    <p>
      Timer app es una aplicación moderna para controlar el tiempo en tu día a día
    </p>
    <h1 class="mt-5 font-semibold text-2xl">Nuestros objetivos son:</h1>
    <div class="text-center custom text-xl font-semibold">
      <ul>
        <li>Poder cronometrar tu tiempo de una manera perfecta.</li>
        <li>Crear cuentas regresivas de una manera intuitiva.</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
<style>
.custom {
  color: #42b983
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
