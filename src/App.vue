<template src="./_html/index.html"></template>

<style src="./_css/style.css"></style>

<script>
// sections
import mainsection from './_js/components/sections/MainSection.vue';
import supersection from './_js/components/sections/SuperSection.vue';
import supersectionNav from './_js/components/sections/SuperSectionNav.vue';
import navItem from './_js/components/sections/SuperSectionNavItem.vue';
import material from './_js/components/Material.vue';
import titleSection from './_js/components/sections/TitleSection.vue';
import subsection from './_js/components/sections/Subsection.vue';
import gallery from './_js/components/Gallery.vue';
// menu
import sidebar from './_js/components/Sidebar.vue';
// dialogs
import dialogMesurement from './_js/components/dialogs/Dialog.vue';
// buttons
import callBabesButton from './_js/components/buttons/CallBabesButton.vue';
import consultButton from './_js/components/buttons/ConsultButton.vue';
// links
import phone from './_js/components/links/Phone.vue';
import logo from './_js/components/links/Logo.vue';


export default {
  name: 'app',
  computed: {
    background() {
      return this.$store.state.backgroundColor;
    },
  },
  components: {
    mainsection,
    supersection,
    supersectionNav,
    navItem,
    subsection,
    gallery,
    titleSection,
    sidebar,
    dialogMesurement,
    callBabesButton,
    consultButton,
    phone,
    logo,
    material,
  },
// directives: {
//   hide: vHide,
// },
};
</script>
