<template>
  <div class="menu">
    <AppNavbar :colorText="'text-white'"/>
    <SectionHeaderMenu/>
    <SectionMenu/>
    <AppFooter/>
  </div>
</template>
<script>
import AppNavbar from '@/components/AppNavbar.vue'
import SectionHeaderMenu from '@/components/SectionHeaderMenu.vue'
import SectionMenu from '@/components/SectionMenu.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name:"Menu",
  components: {
    AppNavbar,
    SectionHeaderMenu,
    SectionMenu,
    AppFooter
  }
  
}
</script>
<style scoped>

</style>
