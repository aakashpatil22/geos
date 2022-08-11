<template>
  <div id="app">
    <h1>Caffeinate me!</h1>
    <h2>Click to see all Starbucks within 1km (0.6 miles)</h2>
    <p>A serverless geo-search demo - Questions? Ask James <a href="https://twitter.com/jbesw/">@jbesw</a></p>
    <GmapMap
      :center="center"
      :zoom="14"
      map-type-id="roadmap"
      style="width: 100%; height: 700px"
      @click="updateCenter"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"        
      />
      <GmapCircle
      :center="center"
      :radius="1000"
      :options="{fillColor:'blue',fillOpacity:0.1}"
      />
    </GmapMap>
    <p>Lat: {{ center.lat }} / Lng: {{ center.lng }}</p>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'app',
  data() {
    return {
      // default to NYC
      center: { lat: 40.7769099, lng: -73.9822532 },
      markers: [],
      places: [],
      currentPlace: null
    }
  },
  // Learn more about this component at https://www.npmjs.com/package/vue2-google-maps
  methods: {
    async updateCenter(event) {
      // Remove existing markers
      this.markers = []

      this.center = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      }

      try {
        const results = await axios({
          method: 'post',
          url: '<< ENTER YOUR API GATEWAY ENDPOINT HERE >>',
          data: {
            lat: this.center.lat,
            lng: this.center.lng
          }
        })

        results.data.map((location) => {
          const point = JSON.parse(location.geoJson.S)
          const marker = {
            lat: point.coordinates[1],
            lng: point.coordinates[0]
          }
          this.markers.push({ position: marker })
        })
      } catch (err) {
        // eslint-disable-next-line
        console.err('Error: ', err)
      }
    }
  }  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
