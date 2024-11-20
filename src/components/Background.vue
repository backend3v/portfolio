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
      height: window.innerHeight,
      render,
      transport:false,
      lastScroll:new Date,
      lastPosition:0,
      sections:[0,90,180,270]
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
      this.transport = true
      var time = new Date;
      var dif = time - this.lastScroll;
      if(dif > 3000){
        console.log("SCROLL",this.section)
        console.log("DIFERENCIA",val - this.lastPosition)
        this.lastScroll = time
      }
      console.log(dif)
      

    },
    transport: function (val) {
      console.log("TRANS",val)
      this.transport = false
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
