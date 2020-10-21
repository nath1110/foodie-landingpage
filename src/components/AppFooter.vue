<template>
    <footer>
  <div class="flex flex-wrap items-center px-4 py-4 border-b border-yellow-400">
    <div class="w-full text-center lg:w-1/5 lg:text-left">
    <a class="text-2xl font-bold text-gray-500 sm:ml-12 sm:text-xl icon_footer" href="#">Foodies</a>
    </div>
    <div class="w-full mt-4 text-center lg:w-3/5 lg:mt-0"></div>
    <div class="flex justify-center w-full my-2 lg:justify-end lg:w-1/5 lg:my-0">
    <img class="w-48 h-12 mr-2 sm:mr-0" src="@/assets/images/image 1.png" alt="">
    <img class="w-48 h-12 sm:mx-8" src="@/assets/images/image 2.png" alt="">
    </div>
  </div>
  <div class="flex flex-wrap py-4 text-center sm:inline">
    <a class="w-full mx-4 my-2 text-gray-500 sm:my-0 sm:w-auto sm:inline-block hover:text-blue-700" href="#restaurants">Conoce nuestras sucursales</a>
    <a class="w-full mx-4 my-2 text-gray-500 sm:my-0 sm:w-auto sm:inline-block hover:text-blue-700" href="#about">Acerca de</a>
    <a class="w-full mx-4 my-2 text-gray-500 sm:my-0 sm:w-auto sm:inline-block hover:text-blue-700" href="#restaurants">Conoce nuestras sucursales</a>
    <a class="w-full mx-4 my-2 text-gray-500 sm:my-0 sm:w-auto sm:inline-block hover:text-blue-700" href="#">¿Qué hablan de nosotros?</a>
    <a class="w-full mx-4 my-2 text-gray-500 sm:my-0 sm:w-auto sm:inline-block hover:text-blue-700" href="#contactUs">Contáctanos</a>
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