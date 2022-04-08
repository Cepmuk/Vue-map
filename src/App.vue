<script setup>
//import { RouterLink, RouterView } from 'vue-router'
import GMapMap from "@/components/GMapMap.vue";
</script>

<template>
  <div>
    <h1>MAP</h1>
    <div>
      <GMapMap class="map" />
    </div>
  </div>
</template>

<style>
#app {
  margin:0px;
  max-width: 1280px;
}

.map {
  width: 100vw;
  height: 100vh;
}
</style>
