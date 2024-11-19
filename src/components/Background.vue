<template lang="pug">
  #TContainer
</template>

<script>
import { render } from 'vue';
import { initRender } from '../assets/js/background/background.js';
export default {
  name: 'BackgroundComponent',
  data() {
    return {
      width:  window.innerWidth,
      height: window.innerHeight * 0.99,
      render,
    };
  },
  props: {
    position:Number,
    section:String,
    direction:String
  },
  watch: {
    position: function (val) {
      this.render.position = val
      console.log("44",val)
    }
  },
  methods: {

  },
  mounted() {
    console.log(this.position)
    this.render = initRender(this.width, this.height,60);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
