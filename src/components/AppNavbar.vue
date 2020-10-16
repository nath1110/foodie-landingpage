<template>
    <nav id="header" class="fixed top-0 z-30 w-full text-white">
      <div
        class="container flex flex-wrap items-center justify-between w-full py-2 mx-auto mt-0"
      >
        <div class="flex items-center pl-4 ml-8 ">
          <a
            class="text-2xl font-bold text-black no-underline toggleColour hover:no-underline lg:text-4xl"
            href="#"
          >
            Foodies
          </a>
        </div>

        <div class="block pr-4 lg:hidden">
          <button
            id="nav-toggle"
            class="flex items-center p-1 text-orange-800 hover:text-gray-900"
          >
            <svg
              class="w-6 h-6 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          class="z-20 flex-grow hidden w-full p-4 mt-2 text-black bg-white lg:flex lg:items-center lg:w-auto lg:block lg:mt-0 lg:bg-transparent lg:p-0"
          id="nav-content"
        >
          <ul class="items-center flex-1 ml-16 list-reset lg:flex">
            <li class="mr-3">
              <a
                class="inline-block px-4 py-2 text-black no-underline hover:text-gray-800 hover:text-underline"
                href="#"
                >Acerca de</a
              >
            </li>
            <li class="mr-3">
              <a
                class="inline-block px-4 py-2 text-black no-underline hover:text-gray-800 hover:text-underline"
                href="#"
                >Restaurantes</a
              >
            </li>
            <li class="mr-3">
              <a
                class="inline-block px-4 py-2 text-black no-underline hover:text-gray-800 hover:text-underline"
                href="#"
                >Menú</a
              >
            </li>
            <li class="mr-3">
              <a
                class="inline-block px-4 py-2 text-black no-underline hover:text-gray-800 hover:text-underline"
                href="#"
                >Contactanos</a
              >
            </li>
          </ul>
        </div>
      </div>
      <hr class="py-0 my-0 border-b border-gray-100 opacity-25" />
    </nav>
</template>

<script>
export default {
  name: "AppNavbar",
  methods: {/*
    var scrollpos = window.scrollY;
	var header = document.getElementById("header");
	var navcontent = document.getElementById("nav-content");
	var navaction = document.getElementById("navAction");
	var brandname = document.getElementById("brandname");
	var toToggle = document.querySelectorAll(".toggleColour");

	document.addEventListener('scroll', function() {

	/*Apply classes for slide in bar*/
	/*scrollpos = window.scrollY;

    if(scrollpos > 10){
      header.classList.add("bg-white");
	  navaction.classList.remove("bg-white");
	  navaction.classList.add("gradient");
	  navaction.classList.remove("text-gray-800");
	  navaction.classList.add("text-white");
	  //Use to switch toggleColour colours
  	  for (var i = 0; i < toToggle.length; i++) {
	     toToggle[i].classList.add("text-gray-800");
		 toToggle[i].classList.remove("text-white");
	  }
	  header.classList.add("shadow");
	  navcontent.classList.remove("bg-gray-100");
	  navcontent.classList.add("bg-white");
    }
    else {
	  header.classList.remove("bg-white");
	  navaction.classList.remove("gradient");
	  navaction.classList.add("bg-white");
	  navaction.classList.remove("text-white");
	  navaction.classList.add("text-gray-800");
	  //Use to switch toggleColour colours
  	  for (var i = 0; i < toToggle.length; i++) {
	     toToggle[i].classList.add("text-white");
		 toToggle[i].classList.remove("text-gray-800");
	  }
	  
	  header.classList.remove("shadow");
	  navcontent.classList.remove("bg-white");
	  navcontent.classList.add("bg-gray-100");
	  
    }

	});*/
  },
  
};


</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");

</style>