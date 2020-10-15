<template>
  <div class="home">
    <AppNavbar/>
    <SectionAbout/>
  </div>
</template>

<script>
// @ is an alias to /src
import AppNavbar from '@/components/AppNavbar.vue'
import SectionAbout from '@/components/SectionAbout.vue'
export default {
  name: 'Home',
  components: {
    AppNavbar,
    SectionAbout
  }
}
</script>
