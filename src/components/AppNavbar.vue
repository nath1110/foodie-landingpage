<template>
  <nav id="header" class="fixed top-0 z-30 w-full">
    <div
      :class="colorText"
      class="flex flex-wrap items-center justify-between w-full pt-8 pb-5 md:container md:ml-4"
    >
      <div class="flex items-center pl-4 md:ml-8">
        <router-link
          to="/"
          class="no-underline toggleColour title hover:no-underline a"
        >
          Foodies
        </router-link>
      </div>
      <!-----------button navbar------------>
      <div class="block pr-4 md:hidden">
        <button
          id="nav-toggle"
          @click="check()"
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
      <!------------------ list sections--------->
      <div
      :class="changes"
        class="flex-grow w-full md:flex xl:items-center xl:w-auto xl:mt-0 xl:bg-transparent xl:p-0"
        id="nav-content"
      >
        <ul class="items-center flex-1 h-full md:ml-16 md:flex">
          <li class="mr-3">
            <router-link to="/#about" class="px-4 py-2 no-underline link5 a">
              Acerca de
            </router-link>
          </li>
          <li class="mr-6">
            <router-link to="/#restaurants" class="px-4 py-2 link5 a">
              Restaurante
            </router-link>
          </li>
          <li class="mr-6">
            <router-link to="/menu" class="px-4 py-2 link5 a">
              Menú
            </router-link>
          </li>
          <li class="mr-3">
            <router-link to="/#contactUs" class="py-2 no-underline link5 a">
              Contáctanos
            </router-link>
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
  data: () => ({
    changes:"hidden",
    flag:true
  }),
  props: {
    colorText: {
      type: String,
      default: "text-black",
    },
  },
  methods: {
    check(){
      if(this.flag && this.colorText=="text-white"){
        this.changes="bg-black md:hidden";
        this.flag=false;
      }else if(this.flag && this.colorText=="text-black"){
        this.changes="bg-white md:hidden";
        this.flag=false;
      }
      else{
        this.flag=true;
        this.changes="hidden";
      }
    }
  },
}; /*
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
});*/

/*
var scrollpos = window.scrollY;
var header = document.getElementById("header");

var navcontent = document.getElementById("nav-content");
var navaction = document.getElementById("navAction");
var toToggle = document.querySelectorAll(".toggleColour");

document.addEventListener("scroll", function () {

  /*Apply classes for slide in bar*/
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");
.title {
  font-family: "Drunk Text Wide Medium";
  font-weight: bold;
  font-size: 1.6882rem;
}
.a {
  display: block;
  position: relative;
  overflow: hidden;
  padding-top: 3.5rem;
  padding: 0 6px;
  transition: color 0.3s cubic-bezier(0.11, 0.7, 0, 1);
  letter-spacing: 0.15rem;
  line-height: 1.8;
}

.a:hover {
  color: #3d4447;
}

.link5 {
  position: relative;
  z-index: 1;
  padding: 2.5rem 1rem 1.3rem;
  font-family: "Syne";
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  line-height: 22px;
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