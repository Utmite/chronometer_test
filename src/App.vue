<template>
  <div id="nav fixed">
    <NavBar 
      :nameApp="'TIMER APP'"
    ></NavBar>

  </div>
  <div class="container">
      <router-view/>
  </div>
</template>
<script>

import NavBar from "./components/NavBar.vue" 

export default {
  components: {
    NavBar
  }
}
</script>
