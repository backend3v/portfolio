<template lang="pug">
    #jobs(class="section")
        section
            .containerSections
                .sectionSide
                    h2(class="headerSection itemsCenter")
                        |{{ title }}
                    .gridQuarterSections(class="gridSpaceS")
                        div(class="card",v-for="section in jobs")
                            .gridJobs(class="")
                                .itemImage(class="headerCard itemsCenter")
                                    img(class="imageM" :src="section.image")
                                h2(class="itemsCenter itemPlace headerCard")
                                    |{{ section.place }}
                                p(class="itemCity itemsCenter headerCard")
                                    |{{ section.city }}
                                p(class="itemsCenter itemPosition headerCard")
                                    |{{ section.position }}
                                div(class="itemsCenter itemDescription")
                                    p
                                        |{{ section.description[0] }}
                                    p
                                        |{{ section.description[1]}}
                                p(class="itemDate itemsCenter headerCard")
                                    |{{ section.date }}
                .sectionSide
                    .gridHalfSections(class="gridSpaceS")
                        div(v-for="section in projects")
                            .gridProjects(class="card")
                                .itemImage(class="headerCard itemsCenter")
                                    img(class="imageL" :src="section.image")
                                h2(class="itemsCenter itemName headerCard")
                                    |{{ section.name }}
                                div(class="itemsCenter itemDescription")
                                    p
                                        |{{ section.description[0] }}
                                    p
                                        |{{ section.description[1]}}
                .footerSection
                    div
                        |+

</template>

<script>
export default {
  name: 'JobsContainer',
  data() {
    return {
        //title: this.data.title,
        jobsSections:this.data.content.jobs,
        projectSections:this.data.content.projects,
        paths:require("./../../../assets/js/config/paths/jobs.js")
    }
  },
  props: {
    data:Object,
    title: String,
    jobs: Array,
    projects:Array
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
