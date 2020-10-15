<template>
  <div class="home">
    <AppNavbar/>
    <SectionAbout/>
    <SectionRestaurants/>
  </div>
</template>

<script>
// @ is an alias to /src
import AppNavbar from '@/components/AppNavbar.vue'
import SectionAbout from '@/components/SectionAbout.vue'
import SectionRestaurants from '@/components/SectionRestaurants.vue'
export default {
  name: 'Home',
  components: {
    AppNavbar,
    SectionAbout,
    SectionRestaurants
  }
}
</script>
