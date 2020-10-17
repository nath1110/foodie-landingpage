<template>
  <nav id="header"  class="fixed top-0 z-30 w-full text-white">
    
    <div
      class="container flex flex-wrap items-center justify-between w-full pt-8 pb-5 ml-4"
    >
      <div class="flex items-center pl-4 ml-8">
        <a
          class="text-black no-underline toggleColour title hover:no-underline"
          href="#"
        >
          Foodies
        </a>
      </div>

      <div class="block pr-4 xl:hidden">
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
        class="flex-grow w-full h-16 text-black bg-white md:hidden xl:flex xl:items-center xl:w-auto xl:mt-0 xl:bg-transparent xl:p-0"
        id="nav-content"
      >
        <ul class="items-center flex-1 h-full ml-16 list-reset lg:flex">
          <li class="mr-3">
            <a class="px-4 py-2 text-black no-underline link5" href="#"
              >Acerca de</a
            >
          </li>
          <li class="mr-6">
            <a class="px-4 py-2 text-black no-underline link5" href="#"
              ><span>Restaurantes</span></a
            >
          </li>
          <li class="mr-6">
            <a class="px-4 py-2 text-black no-underline link5" href="#">Menú</a>
          </li>
          <li class="mr-3">
            <a class="py-2 text-black no-underline link5" href="#"
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
  data:()=>({
  }),
  
  methods: {
  },
};
/*
var scrollpos = window.scrollY;
var header = document.getElementById("header");

var navcontent = document.getElementById("nav-content");
var navaction = document.getElementById("navAction");
var toToggle = document.querySelectorAll(".toggleColour");

document.addEventListener("scroll", function () {

  /*Apply classes for slide in bar*//*
  scrollpos = window.scrollY;
  if (scrollpos > 10) {
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
  } else {
    header.classList.remove("bg-white");
    navaction.classList.remove("gradient");
    navaction.classList.add("bg-white");
    navaction.classList.remove("text-white");
    navaction.classList.add("text-gray-800");
    //Use to switch toggleColour colours
    for (i = 0; i < toToggle.length; i++) {
      toToggle[i].classList.add("text-white");
      toToggle[i].classList.remove("text-gray-800");
    }

    header.classList.remove("shadow");
    navcontent.classList.remove("bg-white");
    navcontent.classList.add("bg-gray-100");
  }
});

var navMenuDiv = document.getElementById("nav-content");
var navMenu = document.getElementById("nav-toggle");

document.onclick = check;
function check(e) {
  var target = (e && e.target) || (event && event.srcElement);

  //Nav Menu
  if (!checkParent(target, navMenuDiv)) {
    // click NOT on the menu
    if (checkParent(target, navMenu)) {
      // click on the link
      if (navMenuDiv.classList.contains("hidden")) {
        navMenuDiv.classList.remove("hidden");
      } else {
        navMenuDiv.classList.add("hidden");
      }
    } else {
      // click both outside link and outside menu, hide menu
      navMenuDiv.classList.add("hidden");
    }
  }
}
function checkParent(t, elm) {
  while (t.parentNode) {
    if (t == elm) {
      return true;
    }
    t = t.parentNode;
  }
  return false;
}*/
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");
.title{
  font-family: "Drunk Text Wide Medium";
  font-weight: bold;
  font-size: 1.6882rem;
}
a {
  display: block;
  position: relative;
  overflow: hidden;
  padding-top: 3.5rem;
  padding: 0 6px;
  transition: color 0.3s cubic-bezier(0.11, 0.7, 0, 1);
  letter-spacing: 0.15rem;
  line-height: 1.8;
}

a:hover {
  color: #3d4447;
}

.link5 {
  position: relative;
  z-index: 1;
  padding: 2.5rem 1.9rem 1.9rem;
}

.link5:after {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: block;
  background-color: #fae106;
  content: "";
  transform: translate3d(0, 100%, 0);
  z-index: -1;
}

.link5:hover:after {
  transform: translate3d(0, 0, 0);
  transition: transform 0.3s cubic-bezier(0.11, 0.7, 0, 1);
}

.link5:hover {
  color: #fff;
}
</style>