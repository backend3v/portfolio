<template lang="pug">
  nav
    div(style="display:flex")
        a( href="#" )
            |Sobre mi
        a(href="#" )
            |Habilidades
        a( href="#" )
            |Trabajos
        a(class="objmenu" href="#" )
            |Ejemplo
        div
          |{{this.$parent.position}} - 
          |{{this.$parent.section}} -
          |{{this.$parent.joinSection}} -
          |{{this.$parent.changed}}
        div(@click="this.$parent.changeLang('en')" class="bottonA")
            |EN
        div
          | - 
        div(@click="this.$parent.changeLang('es')" class="bottonA")
            |ES
</template>

<script>

export default {
  name: 'NavigationBar',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
