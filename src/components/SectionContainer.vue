<template lang="pug">
  #container()
    #containerSection
      PresentationContainer(v-bind:data='presentationTexts')
      SkillsContainer(v-bind:data='skillsTexts')
      JobsContainer(v-bind:data='jobsTexts')
      ExamplesContainer(v-bind:data='examplesTexts')
</template>

<script>
import PresentationContainer from './sections/presentation/presentation.vue'
import SkillsContainer from './sections/skills/skills.vue'
import JobsContainer from './sections/jobs/jobs.vue'
import ExamplesContainer from './sections/examples/examples.vue'

import { getExamplesSections,getJobsSections,getSkillsSections,getPresentationSections } from '../assets/js/templates/sectionsw.js';
import texts from '@/assets/js/texts/es';
//import textsEn from '@/assets/js/texts/en';
//import sections from '@/assets/js/templates/sectionsw.js';
export default {
  
  name: 'SectionContainer',
  data() {
    return {
      sections:getPresentationSections(texts),
      presentationTexts:getPresentationSections(texts),
      skillsTexts:getSkillsSections(texts),
      jobsTexts:getJobsSections(texts),
      examplesTexts:getExamplesSections(texts),
      //textsw:require("./../assets/js/templates/sectionsw.js"),
    }
  },
  methods: {
    
    getSectionText(section) {
      console.log("2224",this.texts)
      return this.sections.sections[section]
    },

    goToUrl(url){
      window.location.href = url

    }


    },
    mounted() {
      //this.presentationTexts=getPresentationSections(textsEn)
      //this.presentationTexts = this.getSectionText("presentation")
      //console.log(this.presentationTexts)
      // this.texts.default.lang = "en"
      //this.texts.getTexts("en")
      //console.log(this.texts)
      //console.log(this.textsw)
      //let t = getTexts()
      //console.log(t)
      //console.log(t.getLang())
      //this.texts = t.getLang()

    },
    created() {
      console.log(this.presentationTexts)
      // this.texts.default.lang = "en"
      //this.texts.getTexts("en")
      //console.log(this.texts)
      //console.log(this.textsw)
      //let t = getTexts()
      //console.log("22",t)
      //console.log(t.getLang())
      //this.texts = t
    },
  components: {
    PresentationContainer,
    SkillsContainer,
    JobsContainer,
    ExamplesContainer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
