<template lang="pug">
  #skills(class="section")
    section
      .containerSections
        
        .sectionSide
          div(class="headerSection itemsCenter")
            h2
              |{{ title.title }}
          .gridCarrousel(class="gridSpaceS")
            div(class="itemTitle itemsTitle")
              |{{ title.skills }}
            .itemButtonA(class="itemsCenter")
              .bottonA(@click="prev('skills')" class="")|<
            .carrouselFrame(class="itemSection")
              .carousel
                #skillsContainer(class="carouselContainer")
                  .gridHalfSections(class="gridSpaceS")
                    div(class="carouselItem" v-for="section in visibleContents")
                      .gridSectionContainer
                        div(class="gridSectionsSkills card ")
                          div(class="itemsCenter itemImage headerCard")
                          div(class="itemsCenter itemSection headerCard itemsTitle")
                            h2
                              |{{ section.name }}
                          div(class="itemsCenter itemDescription")
                            p(class="itemsCenter " v-for="text in section.texts")
                              |{{ text }}

                #skillsContainer2(class="carouselContainer")
                  .gridHalfSections(class="gridSpaceS")
                    div(class="carouselItem" v-for="section in visibleContents2")
                      .gridSectionContainer
                        div(class="gridSectionsSkills card ")
                          div(class="itemsCenter itemImage headerCard")
                          div(class="itemsCenter itemSection headerCard itemsTitle")
                            h2()
                              |{{ section.name }}
                          div(class="itemsCenter itemDescription")
                            p(class="itemsCenter " v-for="text in section.texts")
                              |{{ text }}
            .itemButtonB(class="itemsCenter")
              .bottonA(@click="next('skills')" class="")|>
            .itemSectionA
            .itemSectionB
        .sectionSide
          .gridCarrousel(class="gridSpaceS")
            div(class="itemTitle")
              |{{ title.skillsTech }}
            .itemButtonA(class="itemsCenter")
              .bottonA(@click="prev('skillsTech')" class="")|<
            .carrouselFrame(class="itemSection")
              .carousel
                #skillsTechContainer(class="carouselContainer")
                  .gridQuarterSections(class="itemsCenter gridSpaceS gridSectionContainer2")
                    div(class="carouselItem" v-for="skill in visibleSkills")
                      SkillsGrid(:skill="skill" )
                #skillsTechContainer2(class="carouselContainer")
                  .gridQuarterSections(class="itemsCenter gridSpaceS gridSectionContainer2")
                    div(class="carouselItem" v-for="skill in visibleSkills2")
                      SkillsGrid(:skill="skill" )
            .itemButtonB(class="itemsCenter")
              .bottonA(@click="next('skillsTech')" class="")|>
            .itemSectionA
            .itemSectionB
</template>

<script>
import SkillsGrid from "./skillGrid.vue";
export default {
  name: "SkillsContainer",
  data() {
    return {
      currentObjectsA: {
        skills: {
          current: 0,
          max: this.content.length,
        },
        skillsTech: {
          current: 0,
          max: this.skills.length,
        },
      },
      currentObjects: {
        skills: {
          current: 0,
          max: this.content.length,
        },
        skillsTech: {
          current: 0,
          max: this.skills.length,
        },
      },
    };
  },
  props: {
    title: String,
    content: Array,
    skills: Array,
    change: Array,
  },
  watch: {
    change: function (val) {
      let proxItem = 2;
      console.log("RR - ", val);
      if (val[1] == "skillsTech") {
        console.log("RRR - 33", val);
        proxItem = 4;
      }
      if (val[0] == "1") {
        this.changeElementsB(val[1], proxItem);
      }
      if (val[0] == "2") {
        this.changeElementsA(val[1], proxItem);
      }
      if (val[0] == "3") {
        this.changeElementsC(val[1], proxItem);
      }
      if (val[0] == "4") {
        this.changeElementsD(val[1], proxItem);
      }
    },
  },
  methods: {
    next(opt) {
      //console.log(cont,opt, "\nooo -", this.currentObjects[opt].current);
      this.$parent.next(opt);
      //this.animateR(cont,opt,100,'');
    },
    prev(opt) {
      this.$parent.prev(opt);
    },
    changeElementsA(opt, c) {
      //console.log("333")
      if (this.currentObjects[opt].current < this.currentObjects[opt].max - c) {
        this.currentObjects[opt].current += c;
      } else {
        this.currentObjects[opt].current = 0; // Loop back to the start
      }
    },
    changeElementsB(opt, c) {
      //console.log("333")
      if (
        this.currentObjectsA[opt].current <
        this.currentObjectsA[opt].max - c
      ) {
        this.currentObjectsA[opt].current += c;
      } else {
        this.currentObjectsA[opt].current = 0; // Loop back to the start
      }
    },
    changeElementsD(opt, c) {
      //console.log("333")
      if (this.currentObjects[opt].current > 0) {
        this.currentObjects[opt].current -= c;
      } else {
        this.currentObjects[opt].current = this.currentObjectsA[opt].max - c; // Loop back to the start
      }
    },
    changeElementsC(opt, c) {
      //console.log("333")
      if (this.currentObjectsA[opt].current > 0) {
        this.currentObjectsA[opt].current -= c;
      } else {
        this.currentObjectsA[opt].current = this.currentObjectsA[opt].max - c; // Loop back to the start
      }
    },
  },
  mounted() {
    console.log(this.skillsSections);
  },
  components: {
    SkillsGrid,
  },
  computed: {
    visibleSkills() {
      return this.skills.slice(
        this.currentObjects.skillsTech.current,
        this.currentObjects.skillsTech.current + 6
      );
    },
    visibleSkills2() {
      return this.skills.slice(
        this.currentObjectsA.skillsTech.current,
        this.currentObjectsA.skillsTech.current + 6
      );
    },
    visibleContents() {
      return this.content.slice(
        this.currentObjects.skills.current,
        this.currentObjects.skills.current + 2
      );
    },
    visibleContents2() {
      return this.content.slice(
        this.currentObjectsA.skills.current,
        this.currentObjectsA.skills.current + 2
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
