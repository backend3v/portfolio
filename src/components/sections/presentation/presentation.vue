<template lang="pug">
  #presentation(class="section")
    section
      .containerSections
          h2(class="headerSection itemsCenter")
              |{{ title }}
          .sectionSide
            div(class=" gridSpaceS")
              h1(class="itemsCenter sectionL")
                | {{ name }}
              h2(class="itemsCenter sectionS")
                | {{ position }}
              p(class="itemsCenter sectionM")
                | {{ about }}
          .sectionSide
            div(class="gridHalfSections gridSpaceS")
              div(class="itemsCenter card" v-for="contacth in data.content.contact")
                  h2(class="headerCard itemsCenter sectionS")
                    |{{ contacth.name }}
                  br
                  div(class="itemsCenter" v-for="contact in contacth.texts")
                      h3(@click="goTo(contact[1])" v-if="contact[1] != ''")
                        |{{ contact[0] }}
                      h3(v-else)
                        |{{ contact[0] }}
                  br
          .footerSection
            div
              |+
</template>

<script>
export default {
  name: 'PresentationContainer',
  data() {
    return {
        title: this.data.title,
        about: this.data.content.about,
        name: this.data.content.name,
        position: this.data.content.position,
        contactSections:Object.keys(this.data.content.contact)
    }
  },
  methods: {
      goTo(url){
        this.$parent.goToUrl(url)
      }
    },
    props: {
    data:Object,
  },
    mounted() {
      console.log("444",this.data)
    },
  components: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
