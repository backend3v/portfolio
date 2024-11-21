<template lang="pug">
  main
    NavigationBar
    BackgroundComponent(v-bind:position='position', v-bind:section='section', v-bind:direction='direction',v-bind:changed='changed')
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
      changed:false,
      sections:["presentation", "skills", "jobs", "examples"],
      prevPosition:0,
      actualPosition:0,
      presentationT:getPresentationSections(),
      skillsT:getSkillsSections(),
      jobsT:getJobsSections(),
      examplesT:getExamplesSections(),
      languaje:"es",
      data:require("./../assets/js/texts/es.js"),
      lastScroll:new Date,
      nextSection:0,
      actualSection:0,
      AllSections:[0,90,180,270],
      block:false
    }
  },

  methods: {
    // moveSection(to,i){
    //   //console.log("TO ",this.AllSections[to],i)
    //   this.position = i+1
    // },
    // getToSection(to){
    //   //console.log("444",to,this.position)
    //   for(let i = this.position; i < this.AllSections[to]; i++){
    //     setTimeout(()=>this.moveSection(to,i),100)
        
    //   }
    //   this.block=false
    // },
    changeLang(lang){
      //const t = require(`@/assets/js/texts/${lang}`);
      this.languaje = lang

    },
    scrolling2(e){
      console.log(e)
    } ,
    whelling(e){
      if(!this.block){
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
      }
      
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
    ani(){
      document.getElementById("containerSection").style.transitionDuration = '0.5s'
    },
    updateSections(){
      // if(this.position < 5 || this.position > 350){
      //   document.getElementById("containerSection").style.transitionDuration = '0s'
      // }
      // else{
      //   document.getElementById("containerSection").style.transitionDuration = '0.5s'
      // }
      
      if((this.position > 315 && this.position <= 359) || (this.position >= 0 && this.position <= 45)){
          this.section = "presentation"
          this.actualSection = 0
          if(this.position >=0 && this.position <= 45){
            this.joinSection = "skills"
          }else{
            this.joinSection = "examples"
          }
          
        }
        else if(this.position > 45 && this.position <= 135){
          this.section = "skills"
          this.actualSection = 1
          if(this.position <= 90){
            this.joinSection = "presentation"
          }else{
            this.joinSection = "jobs"
          }
          
        }
        else if(this.position > 135 && this.position <= 225){
          this.section = "jobs"
          this.actualSection = 2
          if(this.position <= 180){
            this.joinSection = "skills"
          }else{
            this.joinSection = "examples"
          }
        }
        else if(this.position > 225 && this.position <= 315){
          this.section = "examples"
          this.actualSection = 3
          if(this.position <= 270){
            this.joinSection = "jobs"
          }else{
            this.joinSection = "presentation"
          }
        }
        if(!this.visibleSections.includes(this.section) || !this.visibleSections.includes(this.joinSection)){
          this.visibleSections = [this.section, this.joinSection]
          for(let i of this.sections){
            if(!this.visibleSections.includes(i)){
              
              const element = document.getElementById(i)
              element.style.visibility = "hidden"
            }else{
              
              const element = document.getElementById(i)
              element.style.visibility = "visible"
            }
          }
        }
    },
    goToUrl(url){
      window.open(url, '_blank');
    },
    scrolling(direction){
        if(direction == "down"){
          this.position = (this.position + 1 > 359) ? 0 : this.position + 1
          this.direction = "down"
        }else{
          this.position = (this.position - 1 < 0) ? 359 : this.position - 1
          this.direction = "up"
        }
        this.updateSections()
        
      //   var time = new Date;
      //   var dif = time - this.lastScroll;
      //   console.log("T ",dif)
      //   if(dif > 3000){
      //     this.block = true
      //     //let nextSection = 0
      //     if(this.direction == "down"){
      //       this.nextSection = (this.actualSection + 1 <= 3) ? this.actualSection + 1 : 0
      //       await this.getToSection(this.nextSection)
      //     }
      //     if(this.direction == "up"){
      //       this.nextSection = (this.actualSection - 1 < 0) ? 3 : this.actualSection - 1
      //       await this.getToSection(this.nextSection)

      //     }
      //     console.log("NEXCT SECTION",this.nextSection)


      //  }
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
        // const box = document.getElementById('containerSection');
        //   box.addEventListener('wheel', () => {
        //   box.style.transitionDuration = '0'
        // });
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
