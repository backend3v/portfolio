<template lang="pug">
    div(class="card gridSkills")
      div(class="itemImage headerCard itemsCenter")
        img(:src="skill.image" class="imageM")
      h2(class="itemsCenter itemName headerCard")
          |{{skill.name}}
      p(class="itemsCenter itemDescription")
          |{{skill.description}} 
</template>

<script>
export default {
  name: "SkillsGrid",
  props: {
    skill: Object,
    path: String,
  },
  data() {
    return {};
  },

  methods: {

  },
  mounted() {},
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
