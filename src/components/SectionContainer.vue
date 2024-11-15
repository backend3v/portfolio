<template lang="pug">
  #container()
    #containerSection
      PresentationContainer(
        
        v-bind:title='presentationTitle',
        v-bind:about='presentationAbout',
        v-bind:name='presentationName',
        v-bind:position='presentationPosition',
        v-bind:contact='presentationContact',

      )
      SkillsContainer(
        v-bind:data='skillsTexts'
        v-bind:title='skillsTitle',
        v-bind:content='skillsContent',
        v-bind:skills='skillsSkills',
      )
      JobsContainer(
        v-bind:data='jobsTexts'
        v-bind:title='jobsTitle',
        v-bind:jobs='jobsJobs',
        v-bind:projects='jobsProjects',
        )
      ExamplesContainer(v-bind:data='examplesTexts')
</template>

<script>
import PresentationContainer from './sections/presentation/presentation.vue'
import SkillsContainer from './sections/skills/skills.vue'
import JobsContainer from './sections/jobs/jobs.vue'
import ExamplesContainer from './sections/examples/examples.vue'
import { getPresentationSections,getSkillsSections,getJobsSections} from '../assets/js/templates/sectionsw.js';



//import sections from '@/assets/js/templates/sectionsw.js';
export default {
  
  name: 'SectionContainer',
  data() {
    
    return {
      presentationTexts:getPresentationSections(this.data.default),
      presentationTitle:getPresentationSections(this.data.default).title,
      presentationAbout:getPresentationSections(this.data.default).content.about,
      presentationName:getPresentationSections(this.data.default).content.name,
      presentationPosition:getPresentationSections(this.data.default).content.position,
      presentationContact:getPresentationSections(this.data.default).content.contact,
      skillsTexts:getSkillsSections(this.data.default),
      skillsTitle:getSkillsSections(this.data.default).title,
      skillsContent:getSkillsSections(this.data.default).content,
      skillsSkills:getSkillsSections(this.data.default).skillsTech,
      jobsTexts:getJobsSections(this.data.default),
      jobsTitle:getJobsSections(this.data.default).title,
      jobsJobs:getJobsSections(this.data.default).content.jobs,
      jobsProjects:getJobsSections(this.data.default).content.projects,
      // examplesTexts:getExamplesSections(r),
      //textsw:require("./../assets/js/templates/sectionsw.js"),
    }
  },
  props:{
    languaje:String,
    //presentationTexts:Object,
    //skillsTexts:Object,
    //jobsTexts:Object,
    examplesTexts:Object,
      
      data:Object
    },
  watch: {
    languaje: function (val) {
      console.log("44",val)
      const t = require(`@/assets/js/texts/${val}`);
      console.log("1",this.presentationTexts)
      console.log(t.default)
      this.presentationTexts = getPresentationSections(t.default)
      this.presentationTitle = this.presentationTexts.title
      this.presentationAbout = this.presentationTexts.content.about
      this.presentationName = this.presentationTexts.content.name
      this.presentationPosition = this.presentationTexts.content.position
      this.presentationContact = this.presentationTexts.content.contact

      this.skillsTexts = getSkillsSections(t.default)
      this.skillsTitle = this.skillsTexts.title
      this.skillsContent = this.skillsTexts.content
      this.skillsSkills = this.skillsTexts.skillsTech


    }
  },
  methods: {
    
    


    goToUrl(url){
      window.location.href = url

    },
    

    },
    mounted() {
      console.log("999",this.presentationTitle)
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
