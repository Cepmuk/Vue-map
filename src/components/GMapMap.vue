<template>
  <GMapMap
    :center="{ lat: 54.444191474048964, lng: 17.991285087353855 }"
    :zoom="10"
    map-type-id="terrain"
  >
    <GMapMarker
      :key="index"
      v-for="(m, index) in mapPoints"
      :position="{ lat: m.lat, lng: m.long }"
      :clickable="true"
      :draggable="false"
      :title="m.title"
    />
  </GMapMap>
</template>

<script >
import mapPoints from "@/mapPoints.js";

export default {
  name: "App",
  data() {
    return {
      mapPoints,
    };
  },
};
</script>