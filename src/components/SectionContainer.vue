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
        v-bind:title='skillsTitle',
        v-bind:content='skillsContent',
        v-bind:skills='skillsSkills',
        v-bind:change='skillsChange',
      )
      JobsContainer(
        v-bind:title='jobsTitle',
        v-bind:jobs='jobsJobs',
        v-bind:projects='jobsProjects',
        v-bind:change='jobsChange',
        )
      ExamplesContainer(
        v-bind:title='titleExamples',
        v-bind:infoExamples='infoExamples'
      )
</template>

<script>
import PresentationContainer from "./sections/presentation/presentation.vue";
import SkillsContainer from "./sections/skills/skills.vue";
import JobsContainer from "./sections/jobs/jobs.vue";
import ExamplesContainer from "./sections/examples/examples.vue";
import {
  getPresentationSections,
  getSkillsSections,
  getJobsSections,
  getExamplesSections
} from "../assets/js/templates/sectionsw.js";

//import sections from '@/assets/js/templates/sectionsw.js';
export default {
  name: "SectionContainer",
  data() {
    return {
      presentationTexts: getPresentationSections(this.data.default),
      presentationTitle: getPresentationSections(this.data.default).title,
      presentationAbout: getPresentationSections(this.data.default).content
        .about,
      presentationName: getPresentationSections(this.data.default).content.name,
      presentationPosition: getPresentationSections(this.data.default).content
        .position,
      presentationContact: getPresentationSections(this.data.default).content
        .contact,
      skillsTitle: getSkillsSections(this.data.default).titles,
      skillsContent: getSkillsSections(this.data.default).content,
      skillsSkills: getSkillsSections(this.data.default).skillsTech,
      jobsTitle: getJobsSections(this.data.default).titles,
      jobsJobs: getJobsSections(this.data.default).content.jobs,
      jobsProjects: getJobsSections(this.data.default).content.projects,
      jobsChange: ["", ""],
      skillsChange: ["", ""],
      titleExamples: getExamplesSections(this.data.default).title,
      infoExamples: getExamplesSections(this.data.default).info,
      // examplesTexts:getExamplesSections(r),
      //textsw:require("./../assets/js/templates/sectionsw.js"),
    };
  },
  props: {
    languaje: String,
    //presentationTexts:Object,
    //skillsTexts:Object,
    //jobsTexts:Object,
    examplesTexts: Object,

    data: Object,
  },
  watch: {
    languaje: function (val) {
      console.log("44", val);
      const t = require(`@/assets/js/texts/${val}`);
      console.log("1", this.presentationTexts);
      console.log(t.default);
      this.presentationTexts = getPresentationSections(t.default);
      this.presentationTitle = this.presentationTexts.title;
      this.presentationAbout = this.presentationTexts.content.about;
      this.presentationName = this.presentationTexts.content.name;
      this.presentationPosition = this.presentationTexts.content.position;
      this.presentationContact = this.presentationTexts.content.contact;

      this.skillsTexts = getSkillsSections(t.default);
      this.skillsTitle = this.skillsTexts.titles;
      this.skillsContent = this.skillsTexts.content;
      this.skillsSkills = this.skillsTexts.skillsTech;


      this.jobsTexts = getJobsSections(t.default);
      this.jobsTitle = this.jobsTexts.titles;
      this.jobsJobs = this.jobsTexts.content.jobs;
      this.jobsProjects = this.jobsTexts.content.projects;

      this.exampleTexts = getExamplesSections(t.default);
      this.titleExamples= this.exampleTexts.title
      this.infoExamples= this.exampleTexts.info

    },
  },
  methods: {
    animateContL(cont, cont2, position) {
      cont.style.transform = `translateX(${position}%)`;
      cont2.style.transform = `translateX(${position}%)`;
    },
    animateContR(cont, cont2, position) {
      let p = position - 200;
      console.log(position, " - ", p);
      cont.style.transform = `translateX(${position}%)`;
      cont2.style.transform = `translateX(${p}%)`;
    },

    animateR(cont, cont2, position, live, opt) {
      if (position == 1) {
        if(opt == "jobs" || opt == "projects"){
          this.jobsChange = ["1", opt];
        }
        else if(opt == "skills" || opt == "skillsTech"){
          this.skillsChange = ["1", opt];
        }
      }
      position += 1;
      this.animateContR(cont, cont2, position);
      if (position == 100) {
        position = 0;
      }
      if (position == 0) {
        if(opt == "jobs" || opt == "projects"){
          this.jobsChange = ["2", opt];
        }
        else if(opt == "skills" || opt == "skillsTech"){
          this.skillsChange = ["2", opt];
        }
        live = false;
      }
      if (live) {
        setTimeout(() => this.animateR(cont, cont2, position, live, opt), 0.2);
      }
    },
    animateL(cont, cont2, position, live, opt) {
      if (position == -1) {
        if(opt == "jobs" || opt == "projects"){
          this.jobsChange = ["3", opt];
        }
        else if(opt == "skills" || opt == "skillsTech"){
          this.skillsChange = ["3", opt];
        }
      }
      position -= 1;
      this.animateContL(cont, cont2, position);
      if (position == -100) {
        position = 0;
      }
      if (position == 0) {
        if(opt == "jobs" || opt == "projects"){
          this.jobsChange = ["4", opt];
        }
        else if(opt == "skills" || opt == "skillsTech"){
          this.skillsChange = ["4", opt];
        }
        live = false;
      }
      if (live) {
        setTimeout(() => this.animateL(cont, cont2, position, live, opt), 0.2);
      }
    },
    next(opt) {
      const cont = document.getElementById(opt + "Container");
      const cont2 = document.getElementById(opt + "Container2");
      this.animateL(cont, cont2, -1, true, opt);
    },
    prev(opt) {
      const cont = document.getElementById(opt + "Container");
      const cont2 = document.getElementById(opt + "Container2");
      this.animateR(cont, cont2, 1, true, opt, 0);
    },

  },
  mounted() {
    //console.log("999", this.presentationTitle);
  },
  created() {},
  components: {
    PresentationContainer,
    SkillsContainer,
    JobsContainer,
    ExamplesContainer,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
