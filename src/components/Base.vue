<template lang="pug">
  main
    NavigationBar
    ThreeBack
    SectionContainer
</template>

<script>
import NavigationBar from './Navigation.vue'
import ThreeBack from './ThreeBack.vue'
import SectionContainer from './SectionContainer.vue'
export default {
  name: 'BaseApp',
  data() {
    return {
      lastPosition:0,
      position:0
    }
  },
  methods: {
       sc(event){
        //this.delta = event.deltaY
        let whell = event.deltaY
        if(whell > 0){
            this.position += 1
        }else{
            this.position -= 1
        }
        console.log("333")
       }


    },
    mounted() {
        window.onwheel = this.sc
        
    },
  components: {
    NavigationBar,
    ThreeBack,
    SectionContainer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
