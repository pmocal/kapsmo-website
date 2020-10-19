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
        theatrical: ""
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
      }
    },
    computed: {
      images: function() {
        return require('./../../public/assets/locations/' + this.$route.params.id)
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