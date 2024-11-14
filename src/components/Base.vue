<template lang="pug">
  main
    NavigationBar
    BackgroundComponent(v-bind:position='position', v-bind:section='section', v-bind:direction='direction')
    SectionContainer
    FooterContainer
</template>

<script>
import NavigationBar from './Navigation.vue'
//import ThreeBack from './ThreeBack.vue'
import BackgroundComponent from './Background.vue'
import SectionContainer from './SectionContainer.vue'
import FooterContainer from './FooterContainer.vue'
export default {
  name: 'BaseApp',
  data() {
    return {
      position:0,
      section:"presentation",
      joinSection:"skills",
      direction:"down",
      visibleSections:["presentation", "skills"],
      changed:true,
      sections:["presentation", "skills", "jobs", "examples"],
      prevPosition:0,
      actualPosition:0
    }
  },
  methods: {
    scrolling2(e){
      console.log(e)
    } ,
    whelling(e){
      let direction = "down"
      const whell = e.deltaY
      if(whell >= 0){
        direction = "down"
      }else{
        direction = "up"
      }
      this.scrolling(direction)
    },
    touchinMove(e){
      let direction = "up"
      console.log("33",e.targetTouches[0].pageY)
      this.actualPosition = e.targetTouches[0].pageY
      if(this.actualPosition >= this.prevPosition){
        direction = "up"
      }else{
        direction = "down"
      }
      this.scrolling(direction)
      this.prevPosition = this.actualPosition
    } ,
    scrolling(direction){
        // let whell = event.deltaY
        // if(whell >= 0){
        //     this.position = (this.position + 1 > 119) ? 0 : this.position + 1
        //     this.direction = "down"
        // }else{
        //     this.position = (this.position - 1 < 0) ? 119 : this.position - 1
        //     this.direction = "up"
        // }
        if(direction == "down"){
          this.position = (this.position + 1 > 119) ? 0 : this.position + 1
          this.direction = "down"
        }else{
          this.position = (this.position - 1 < 0) ? 119 : this.position - 1
          this.direction = "up"
        }
        if((this.position > 105 && this.position <= 119) || (this.position >= 0 && this.position <= 15)){
          this.section = "presentation"
          if(this.position >=0 && this.position <= 15){
            this.joinSection = "skills"
          }else{
            this.joinSection = "examples"
          }
        }
        else if(this.position > 15 && this.position <= 45){
          this.section = "skills"
          if(this.position <= 30){
            this.joinSection = "presentation"
          }else{
            this.joinSection = "jobs"
          }
        }
        else if(this.position > 45 && this.position <= 75){
          this.section = "jobs"
          if(this.position <= 60){
            this.joinSection = "skills"
          }else{
            this.joinSection = "examples"
          }
        }
        else if(this.position > 75 && this.position <= 105){
          this.section = "examples"
          if(this.position <= 90){
            this.joinSection = "jobs"
          }else{
            this.joinSection = "presentation"
          }
        }
        if(!this.visibleSections.includes(this.section) || !this.visibleSections.includes(this.joinSection)){
          this.visibleSections = [this.section, this.joinSection]
          this.changed = true
          for(let i of this.sections){
            if(!this.visibleSections.includes(i)){
              console.log(i+"n")
              const element = document.getElementById(i)
              element.style.visibility = "hidden"
            }else{
              console.log(i+"y")
              const element = document.getElementById(i)
              element.style.visibility = "visible"
            }
          }
        }else{
          this.changed = false
        }


       }


    },
    mounted() {
        window.onwheel = this.whelling
        window.onscroll = this.scrolling2
        window.ontouchmove = this.touchinMove
        const elementSection = document.getElementById("jobs")
        elementSection.style.visibility = "hidden"
        const elementJoinSection = document.getElementById("examples")
        elementJoinSection.style.visibility = "hidden"
    },
  components: {
    NavigationBar,
    //ThreeBack,
    BackgroundComponent,
    SectionContainer,
    FooterContainer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
