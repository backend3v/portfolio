<template lang="pug">
  #container()
    #containerSection
      PresentationContainer(v-bind:data='getSectionText("presentation")')
      SkillsContainer(v-bind:data='getSectionText("skills")')
      JobsContainer(v-bind:data='getSectionText("jobs")')
      ExamplesContainer(v-bind:data='getSectionText("examples")')
</template>

<script>
import PresentationContainer from './sections/presentation/presentation.vue'
import SkillsContainer from './sections/skills/skills.vue'
import JobsContainer from './sections/jobs/jobs.vue'
import ExamplesContainer from './sections/examples/examples.vue'

import { getTexts } from '../assets/js/templates/sectionsw.js';
import texts from '@/assets/js/texts/es';
export default {
  
  name: 'SectionContainer',
  data() {
    return {
      texts:require("./../assets/js/templates/sections.js"),
      textsw:require("./../assets/js/templates/sectionsw.js"),
    }
  },
  methods: {
    
    getSectionText(section) {
      return this.texts.default.sections[section]
    },

    goToUrl(url){
      window.location.href = url

    }


    },
    mounted() {
      // this.texts.default.lang = "en"
      //this.texts.getTexts("en")
      //console.log(this.texts)
      //console.log(this.textsw)
      let t = getTexts(texts)
      //console.log(t.getLang())
      this.texts = t.getLang()

    },
    created() {
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
