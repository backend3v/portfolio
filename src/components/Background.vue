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
      sections:[0,90,180,270],
      nextSection:0,
      block:false,
    };
  },
  props: {
    position:Number,
    section:String,
    direction:String,
    changed:Boolean
  },
  watch: {
    position: function (val) {

        
        const dif = val - this.lastPosition
        if(dif >= -30 && dif <= 30){
          document.getElementById("containerSection").style.transitionDuration = '0s'
        }else{
          document.getElementById("containerSection").style.transitionDuration = '0.5s'
        }
        this.render.position = val
        this.lastPosition = val
        ///let dir = "down"
        //console.log("44",val)
        //this.transport = true
        
      
      
      

    },

  },
  methods: {

  },
  mounted() {
    this.render = initRender(this.width, this.height,60);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
