<template lang="pug">
    #jobs(class="section")
        section
            .containerSections
                .sectionSide
                  div(class="headerSection itemsCenter")
                    h2
                      |{{ title.title }}
                  .gridCarrousel(class="gridSpaceS")
                    div(class="itemTitle")
                      |{{ title.jobs }}
                    .itemButtonA(class="itemsCenter")
                      .bottonA(@click="prev('jobs')" class="")|<
                    .carrouselFrame(class="itemSection")
                      .carousel
                          #jobsContainer(class="carouselContainer")
                            .gridHalfSections(class="gridSpaceS")
                              div(class="carouselItem",v-for="section in visibleJobs" )
                                .gridSectionContainer
                                  .gridJobs(class=" card")
                                        .itemImage(class="headerCard itemsCenter contImageM")
                                            img(class="imageM" :src="section.image")
                                        div(class="itemsCenter itemPlace headerCard itemsTitle")
                                          h2(class="itemsCenter")
                                              |{{ section.place }}
                                        div(class="itemsCenter itemCity headerCard itemsTitle")
                                          p(class="itemsCenter")
                                              |{{ section.city }}
                                        div(class="itemsCenter itemPosition headerCard itemsTitle")
                                          p(class="itemsCenter")
                                              |{{ section.position }}
                                        div(class="itemsCenter itemDescription")
                                            p(class="itemsSectionL itemsCenter")
                                                |{{ section.description[0] }}
                                            p(class="itemsSectionL itemsCenter")
                                                |{{ section.description[1]}}
                                        div(class="itemsCenter itemDate headerCard itemsTitle")
                                          small
                                              |{{ section.date }}
                          #jobsContainer2(class="carouselContainer")
                            .gridHalfSections(class="gridSpaceS")
                              div(class="carouselItem",v-for="section in visibleJobs2" )
                                .gridSectionContainer
                                  .gridJobs(class=" card")
                                        .itemImage(class="headerCard itemsCenter contImageM")
                                            img(class="imageM" :src="section.image")
                                        div(class="itemsCenter itemPlace headerCard itemsTitle")
                                          h2(class="itemsCenter")
                                              |{{ section.place }}
                                        div(class="itemsCenter itemCity headerCard itemsTitle")
                                          p(class="itemsCenter")
                                              |{{ section.city }}
                                        div(class="itemsCenter itemPosition headerCard itemsTitle")
                                          p(class="itemsCenter")
                                              |{{ section.position }}
                                        div(class="itemsCenter itemDescription")
                                            p(class="itemsSectionL itemsCenter")
                                                |{{ section.description[0] }}
                                            p(class="itemsSectionL itemsCenter")
                                                |{{ section.description[1]}}
                                        div(class="itemsCenter itemDate headerCard itemsTitle")
                                          small
                                              |{{ section.date }}
                    .itemButtonB(class="itemsCenter")
                      .bottonA(@click="next('jobs')" class="")|>
                    .itemSectionA
                    .itemSectionB
                .sectionSide
                  .gridCarrousel(class="gridSpaceS")
                    div(class="itemTitle")
                      |{{ title.projects }}
                    .itemButtonA(class="itemsCenter")
                      .bottonA(@click="prev('projects')" class="")|<
                    .carrouselFrame(class="itemSection")
                      .carousel
                        div(style="display:flex;width:100%")
                          #projectsContainer(class="carouselContainer")
                            .gridHalfSections(class="gridSpaceS")
                              div(class="carouselItem" v-for="section in visibleProjects")
                                .gridSectionContainer
                                  .gridProjects(class="card")
                                      .itemImage(class="headerCard itemsCenter itemsSectionXL")
                                          img(class="imageL" :src="section.image")
                                      div(class="itemsCenter itemName headerCard itemsTitle")
                                        h2
                                            |{{ section.name }}
                                      div(class="itemsCenter itemDescription")
                                          p(class="itemsSectionL itemsCenter")
                                              |{{ section.description[0] }}
                                          p(class="itemsSectionL itemsCenter")
                                              |{{ section.description[1]}}
                          #projectsContainer2(class="carouselContainer")
                            .gridHalfSections(class="gridSpaceS")
                              div(class="carouselItem" v-for="section in visibleProjects2")
                                .gridSectionContainer
                                  .gridProjects(class="card")
                                      .itemImage(class="headerCard itemsCenter itemsSectionXL")
                                          img(class="imageL" :src="section.image")
                                      div(class="itemsCenter itemName headerCard itemsTitle")
                                        h2
                                            |{{ section.name }}
                                      div(class="itemsCenter itemDescription")
                                          p(class="itemsSectionL itemsCenter")
                                              |{{ section.description[0] }}
                                          p(class="itemsSectionL itemsCenter")
                                              |{{ section.description[1]}}
                    .itemButtonB(class="itemsCenter")
                      .bottonA(@click="next('projects')" class="")|>
                    .itemSectionA
                    .itemSectionB

</template>

<script>
export default {
  name: "JobsContainer",
  data() {
    return {
      //title: this.data.title,
      currentObjectsA: {
        jobs: {
          current: 0,
          max: this.jobs.length,
        },
        projects: {
          current: 0,
          max: this.projects.length,
        },
      },
      currentObjects: {
        jobs: {
          current: 0,
          max: this.jobs.length,
        },
        projects: {
          current: 0,
          max: this.projects.length,
        },
      },
    };
  },
  props: {
    data: Object,
    title: String,
    jobs: Array,
    projects: Array,
    change: Array,
  },
  watch: {
    change: function (val) {
      if (val[0] == "1") {
        this.changeElementsB(val[1]);
      }
      if (val[0] == "2") {
        this.changeElementsA(val[1]);
      }
      if (val[0] == "3") {
        this.changeElementsC(val[1]);
      }
      if (val[0] == "4") {
        this.changeElementsD(val[1]);
      }
    },
  },
  methods: {
    changeElementsA(opt) {
      //console.log("333")
      if (this.currentObjects[opt].current < this.currentObjects[opt].max - 2) {
        this.currentObjects[opt].current+=2;
      } else {
        this.currentObjects[opt].current = 0; // Loop back to the start
      }
    },
    changeElementsB(opt) {
      //console.log("333")
      if (
        this.currentObjectsA[opt].current <
        this.currentObjectsA[opt].max - 2
      ) {
        this.currentObjectsA[opt].current+=2;
      } else {
        this.currentObjectsA[opt].current = 0; // Loop back to the start
      }
    },
    changeElementsD(opt) {
      //console.log("333")
      if (this.currentObjects[opt].current > 0) {
        this.currentObjects[opt].current-=2;
      } else {
        this.currentObjects[opt].current = this.currentObjectsA[opt].max - 2; // Loop back to the start
      }
    },
    changeElementsC(opt) {
      //console.log("333")
      if (this.currentObjectsA[opt].current > 0) {
        this.currentObjectsA[opt].current-=2;
      } else {
        this.currentObjectsA[opt].current = this.currentObjectsA[opt].max - 2; // Loop back to the start
      }
    },

    next(opt) {
      //console.log(cont,opt, "\nooo -", this.currentObjects[opt].current);
      this.$parent.next(opt);
      //this.animateR(cont,opt,100,'');
    },
    prev(opt) {
      this.$parent.prev(opt);
    },
  },
  mounted() {},
  computed: {
    visibleJobs() {
      return this.jobs.slice(
        this.currentObjects.jobs.current,
        this.currentObjects.jobs.current + 2
      );
    },
    visibleJobs2() {
      return this.jobs.slice(
        this.currentObjectsA.jobs.current,
        this.currentObjectsA.jobs.current + 2
      );
    },
    visibleProjects() {
      return this.projects.slice(
        this.currentObjects.projects.current,
        this.currentObjects.projects.current + 2
      );
    },
    visibleProjects2() {
      return this.projects.slice(
        this.currentObjectsA.projects.current,
        this.currentObjectsA.projects.current + 2
      );
    },
  },
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
