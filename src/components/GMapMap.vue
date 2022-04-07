<template>
  <GMapMap
      :center="{lat: 51.093048, lng: 6.842120}"
      :zoom="10"
      map-type-id="terrain"  >
  </GMapMap>
</template>

<script >
export default {
  name: 'App',
  data() {
    return {
    }
  }
}
</script>