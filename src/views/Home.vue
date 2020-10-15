<template>
  <div class="home">
    <AppNavbar/>
    <SectionAbout/>
    <SectionRestaurants/>
    <SectionContact/>
    <AppFooter/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import AppNavbar from '@/components/AppNavbar.vue'
import SectionAbout from '@/components/SectionAbout.vue'
import SectionRestaurants from '@/components/SectionRestaurants.vue'
import SectionContact from '@/components/SectionContact.vue'
import AppFooter from '@/components/AppFooter.vue'
export default {
  name: 'Home',
  components: {
    AppNavbar,
    SectionAbout,
    SectionRestaurants,
    SectionContact,
    AppFooter
  }
}
</script>
