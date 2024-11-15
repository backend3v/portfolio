<template lang="pug">
  main
    NavigationBar
    BackgroundComponent(v-bind:position='position', v-bind:section='section', v-bind:direction='direction')
    SectionContainer(v-bind:data='data',v-bind:languaje='languaje',v-bind:presentationTexts='presentationT',v-bind:skillsTexts='skillsT',v-bind:jobsTexts='jobsT',v-bind:examplesTexts='examplesT')
    FooterContainer
</template>

<script>
import NavigationBar from './Navigation.vue'
//import ThreeBack from './ThreeBack.vue'
import { getPresentationSections,getExamplesSections,getJobsSections,getSkillsSections } from '../assets/js/templates/sectionsw.js';
import BackgroundComponent from './Background.vue'
import SectionContainer from './SectionContainer.vue'
import FooterContainer from './FooterContainer.vue'
//import textsEn from '@/assets/js/texts/en.js';
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
      actualPosition:0,
      presentationT:getPresentationSections(),
      skillsT:getSkillsSections(),
      jobsT:getJobsSections(),
      examplesT:getExamplesSections(),
      languaje:"es",
      data:require("./../assets/js/texts/es.js"),
    }
  },

  methods: {
    changeLang(lang){
      //const t = require(`@/assets/js/texts/${lang}`);
      this.languaje = lang

    },
    scrolling2(e){
      console.log(e)
    } ,
    whelling(e){
      let direction = "down"
      const whell = e.deltaY
      if(whell > 0){
        direction = "down"
      }else{
        direction = "up"
      }
      this.scrolling(direction)
      this.scrolling(direction)
      this.scrolling(direction)
    },
    touchinMove(e){
      let direction = "up"
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
        if(direction == "down"){
          this.position = (this.position + 1 > 359) ? 0 : this.position + 1
          this.direction = "down"
        }else{
          this.position = (this.position - 1 < 0) ? 359 : this.position - 1
          this.direction = "up"
        }
        if((this.position > 315 && this.position <= 359) || (this.position >= 0 && this.position <= 45)){
          this.section = "presentation"
          if(this.position >=0 && this.position <= 45){
            this.joinSection = "skills"
          }else{
            this.joinSection = "examples"
          }
        }
        else if(this.position > 45 && this.position <= 135){
          this.section = "skills"
          if(this.position <= 90){
            this.joinSection = "presentation"
          }else{
            this.joinSection = "jobs"
          }
        }
        else if(this.position > 135 && this.position <= 225){
          this.section = "jobs"
          if(this.position <= 180){
            this.joinSection = "skills"
          }else{
            this.joinSection = "examples"
          }
        }
        else if(this.position > 225 && this.position <= 315){
          this.section = "examples"
          if(this.position <= 270){
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
    beforeMount() {
      //this.chengeLang("en")
    },
  components: {
    NavigationBar,
    BackgroundComponent,
    SectionContainer,
    FooterContainer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
