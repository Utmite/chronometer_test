<template>
  <div class="home">
    <section class="logo flex justify-center items-center my-4">
      <img alt="timer logo" src="../assets/icon.png">
    </section>
    <HelloWorld msg="¡Bienvenido a Timer App!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
