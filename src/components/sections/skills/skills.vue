<template lang="pug">
  #skills(class="section")
    section
      .containerSections
        .headerSection
          h2(class="headerSection itemsCenter")
            |{{ title }}
        .sectionSide
          div(class="gridHalfSections gridSpaceS")
            div(class="card gridSectionsSkills" v-for="section in content")
              div(class="itemsCenter itemImage headerCard")
              h2(class="itemsCenter itemSection headerCard")
                |{{ section.name }}
              div(class="itemsCenter itemDescription")
                div(class="itemsCenter " v-for="text in section.texts")
                  |{{ text }}
        .sectionSide
          div(class="gridSixSections gridSpaceS")
            SkillsGrid(:skill="skill" v-for="skill in skills" :key="skill" )
        .footerSection
          div
            |+ 
</template>

<script>
import SkillsGrid from './skillGrid.vue'
export default {
  name: 'SkillsContainer',
  data() {
    return {
      //skills:this.data.skillsTech,
      //title: this.data.title,
      skillsSections:Object.keys(this.data.content),
      paths:require("./../../../assets/js/config/paths/skills.js")
    }
  },
  props: {
    data:Object,
    title: String,
    content: Array,
    skills: Array
  },
  methods: {


    },
    mounted() {
        console.log(this.skillsSections)
    },
  components: {
    SkillsGrid
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
