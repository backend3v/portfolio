<template lang="pug">
  #examples(class="section")
    section
      .containerSections
        .headerSection
          |{{ title }}
        .sectionSingle(class="itemsCenter")
          .card
            div(class="gridExamples")
              .itemBar(class="headerCard")
              .itemMenu(class="headerCard")
              .itemSection
        .footerSection
          div
              |+
</template>

<script>
export default {
  name: 'ExamplesContainer',
  data() {
    return {
      title:this.data.title

    }
  },
  props: {
    data:Object,
    paths:Object
  },
  methods: {


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
