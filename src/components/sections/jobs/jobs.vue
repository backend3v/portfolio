<template lang="pug">
    #jobs(class="section")
        section
            .containerSections
                h2(class="headerSection itemsCenter")
                    |{{ title }}
                .sectionSide
                    .gridQuarterSections(class="gridSpaceS")
                        div(class="card",v-for="section in jobsSections")
                            .gridJobs(class="")
                                .itemImage(class="headerCard itemsCenter")
                                    img(class="imageM" :src="getUrl(paths.default[section.image])")
                                h2(class="itemsCenter itemPlace headerCard")
                                    |{{ section.place }}
                                .itemCity(class="itemsCenter headerCard")
                                    |{{ section.city }}
                                h3(class="itemsCenter itemPosition")
                                    |{{ section.position }}
                                .itemDescription(class="itemsCenter")
                                    |{{ section.description }}
                                .itemDate(class="itemsCenter headerCard")
                                    |{{ section.date }}
                .sectionSide
                    .gridHalfSections(class="gridSpaceS")
                        div(v-for="section in projectSections")
                            .gridProjects(class="card")
                                .itemImage(class="headerCard itemsCenter")
                                    img(class="imageL" :src="getUrl(paths.default[section.image])")
                                h2(class="itemsCenter itemName headerCard")
                                    |{{ section.name }}
                                .itemsCenter(class="itemDescription")
                                    |{{ section.description }}
                .footerSection
                    div
                        |+

</template>

<script>
export default {
  name: 'JobsContainer',
  data() {
    return {
        title: this.data.title,
        jobsSections:this.data.content.jobs,
        projectSections:this.data.content.projects,
        paths:require("./../../../assets/js/config/paths/jobs.js")
    }
  },
  props: {
    data:Object
  },
  methods: {
    getUrl(path) {
        return "./images/jobs/"+path
    }

    },
    mounted() {
        
    },
  components: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
