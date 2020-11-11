<template>
  <div>
    <div v-if="dataReady" class="frame">
      <div v-for="(image, index) in response" :key="index">
        <img
          @click="highlight"
          :src="'data:image/png;base64,' + getDataUrl(image)"
        >
      </div>
    </div>
    <div id="frame" v-if="!closedTheater">
      <img
        :src="this.theatrical"
      >
    </div>
  </div>
</template>

<script>    
  export default {
    name: 'TravelLocation',
    data: function() {
      return {
        theatrical: "",
        dataReady: false,
        response: null,
        // site: "http://localhost:3000"
        site: "https://salty-temple-72490.herokuapp.com"
      }
    },
    props: [ 'closedTheater' ],
    methods: {
      highlight() {
        event.target.id = "theater";
        this.theatrical = event.target.src;
        this.closedTheater = false;
        let eventIterator = event.target.parentNode;
        while (eventIterator.previousElementSibling != null) {
          eventIterator.previousElementSibling.getElementsByTagName('img')[0].id = "";
          eventIterator = eventIterator.previousElementSibling;
        }
        eventIterator = event.target.parentNode;
        while (eventIterator.nextElementSibling != null) {
          eventIterator.nextElementSibling.getElementsByTagName('img')[0].id = "";
          eventIterator = eventIterator.nextElementSibling;
        }
      },
      getDataUrl(obj) {
        return Buffer.from(obj.img.data).toString('base64');
      }
    },
    watch: {
      '$route.params.id': async function() {
        let response = await fetch(this.site + "/photos/location/" + this.$route.params.id);
        this.response = await response.json();
        this.dataReady = true;
      }
    },
    async created() {
      let response = await fetch(this.site + "/photos/location/" + this.$route.params.id);
      this.response = await response.json();
      this.dataReady = true;
    }
  }
</script>

<style scoped>
  #frame {
    text-align: center;
  }
  #frame img {
    width: 60%;
    padding: 5%;
    padding-bottom: 1%;
    cursor: default;
  }
  img {
    width: 70%;
    cursor: pointer;
  }
  #theater {
    width: 80%;
  }
</style>