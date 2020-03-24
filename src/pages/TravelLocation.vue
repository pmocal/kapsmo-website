<template>
  <div>
    <div class="frame">
      <div v-for="url in images.urls" :key="url">
        <img
          @click="highlight"
          :src="url"
        >
      </div>
    </div>
    <div id="frame">
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
        images: [],
        theatrical: ""
      }
    },
    methods: {
      highlight() {
        event.target.id = "theater";
        this.theatrical = event.target.src;
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
      }
    },
    created() {
      this.images = require('./../../public/assets/locations/' + this.$route.params.id);
    },
    watch: {
      '$route.params.id': function() {
        this.images = require('./../../public/assets/locations/' + this.$route.params.id);
      }
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
  }
  img {
    width: 70%;
  }
  #theater {
    width: 80%;
  }
</style>