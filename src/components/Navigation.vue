<template lang="pug">
  nav
    div(style="display:flex")
        div(style="display:flex;width:90vw" )
          div(style="width:15%;margin:0 5%" )
            div( @click="toS(0)" class="bottonA" style="width:100%")
              |Sobre mi
          div(style="width:15%;margin:0 5%" )
            div( @click="toS(90)" class="bottonA" style="width:100%")
              |Habilidades
          div(style="width:15%;margin:0 5%" )
            div( @click="toS(180)" class="bottonA" style="width:100%")
              |Trabajos
          div(style="width:15%;margin:0 5%" )
            div( @click="toS(270)" class="bottonA" style="width:100%")
              |Ejemplo
          //- div
          //-   |{{this.$parent.position}} - 
          //-   |{{this.$parent.section}} -
          //-   |{{this.$parent.joinSection}} -
          //-   |{{this.$parent.changed}}
        div(style="display:flex")
          div(@click="this.$parent.changeLang('en')" class="bottonA")
              |EN
          div(@click="this.$parent.changeLang('es')" class="bottonA")
              |ES
</template>

<script>

export default {
  name: 'NavigationBar',
  methods: {
    toS(pos){
      //document.getElementById("containerSection").style.transitionDuration = '0.5s'
      this.$parent.position = pos
      this.$parent.updateSections()
      //document.getElementById("containerSection").style.transitionDuration = '0s'
    }
  },
  mounted() {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
