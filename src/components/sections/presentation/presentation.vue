<template lang="pug">
  #presentation(class="section")
    section
      .containerSections
          .sectionSide
            h2(class="headerSection itemsCenter")
              |{{ title }}
            div(class=" gridSpaceS")
              h1(class="itemsCenter sectionL")
                | {{ name }}
              h2(class="itemsCenter sectionS")
                | {{ position }}
              p(class="itemsCenter sectionM")
                | {{ about }}
          .sectionSide
            div(class="gridHalfSections gridSpaceS")
              div(class="itemsCenter card" v-for="contacth in contact")
                  h2(class="headerCard itemsCenter sectionS")
                    |{{ contacth.name }}
                  br
                  div(class="itemsCenter" v-for="contact in contacth.texts")
                      h3(@click="goTo(contact[1])" v-if="contact[1] != ''" class="link")
                        |{{ contact[0] }}
                      h3(v-else)
                        |{{ contact[0] }}
                  br
            .footerSection
              div
                |+
</template>

<script>
//import { getPresentationSections } from '@/assets/js/templates/sectionsw.js';
export default {
  name: 'PresentationContainer',
  data() {
    return {

        //title: this.data.title,
        // about: this.data.content.about,
        // name: this.data.content.name,
        // position: this.data.content.position,
        // contactSections:Object.keys(this.data.content.contact)
    }
  },
  methods: {
      goTo(url){
        window.open(url, '_blank');
      },
      // qs(lang){
      //   const t = require(`@/assets/js/texts/${lang}`);
      //   let d =getPresentationSections(t.default)
      //   this.title = d.title
      // }

    },
    props: {
    title: String,
    about: String,
    name: String,
    position: String,
    contact:Array
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
