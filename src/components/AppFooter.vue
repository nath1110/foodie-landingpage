<template>
    <footer>
  <div class="flex flex-wrap items-center px-4 py-4 border-b border-yellow-400">
    <div class="w-full text-center lg:w-1/5 lg:text-left">
    <a class="ml-12 text-xl font-bold text-gray-500 icon_footer" href="#">Foodies</a>
    </div>
    <div class="w-full mt-4 text-center lg:w-3/5 lg:mt-0"></div>
    <div class="flex justify-center w-full my-2 lg:justify-end lg:w-1/5 lg:my-0">
    <img class="w-48 h-12 " src="@/assets/images/image 1.png" alt="">
    <img class="w-48 h-12 mx-8" src="@/assets/images/image 2.png" alt="">
    </div>
  </div>
  <div class="py-4 text-center">
    <a class="inline-block mx-4 text-gray-500 hover:text-blue-700" href="#">Conoce nuestras sucursales</a>
    <a class="inline-block mx-4 text-gray-500 hover:text-blue-700" href="#">Acerca de</a>
    <a class="inline-block mx-4 text-gray-500 hover:text-blue-700" href="#">Conoce nuestras sucursales</a>
    <a class="inline-block mx-4 text-gray-500 hover:text-blue-700" href="#">¿Qué hablan de nosotros?</a>
    <a class="inline-block mx-4 text-gray-500 hover:text-blue-700" href="#">Contáctanos</a>
    </div>
</footer>
</template>

<script>
export default {
    name:"AppFooter"
}
</script>
<style scoped>

.icon_footer{
  font-family: "Drunk Text Wide Medium";
}
</style>