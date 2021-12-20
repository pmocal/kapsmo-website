<template>
  <div>
    <div v-if="dataReady" class="frame">
      <div v-for="(image, index) in this.travelLocationPhotos" :key="index">
        <img
          @click="highlight"
          v-if="dataReady" 
          :src="'data:image/png;base64,' + image"
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
        travelLocationPhotos: []
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
      async getContent() {
        let response = await fetch("https://cors-anywhen.herokuapp.com/" + this.$hostname + "/photos/location/" + this.$route.params.id).then(response => (this.response = response.json()));
        this.travelLocationPhotos = [];
        for (let i = 0; i < response.length; i += 1) {
          this.travelLocationPhotos.push(Buffer.from(response[i].img.data).toString('base64'));
        }
        this.dataReady = true;
      }
    },
    watch: {
      '$route.params.id': async function() {
        await this.getContent();
      }
    },
    async mounted() {
      await this.getContent();
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