<template>
  <section class="pt-20" id="cards-food">
    <div class="flex flex-wrap justify-center">
      <div class="pr-4 mr-2 text-gray-600 border rounded-lg lg:ml-56 sm:w-auto">
        <button type="submit" class="top-0 right-0 mx-4 mt-3">
          <svg
            class="w-4 h-4 outline-none fill-current"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            style="enable-background: new 0 0 56.966 56.966"
            xml:space="preserve"
            width="512px"
            height="512px"
          >
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
            />
          </svg>
        </button>

        <input
          type="search"
          name="serch"
          placeholder="Search"
          class="h-10 px-5 text-sm bg-white focus:outline-none"
        />
      </div>
      <!--------categories button------------------------->
      <div class="sm:hidden">
        <button
          id="nav-toggle"
          @click="check()"
          class="flex items-center px-4 py-4 text-black border rounded-lg hover:text-gray-800"
        >
          <i class="fas fa-sliders-h"></i>
          <title>categories</title>
        </button>
      </div>
      <!-------------------categories--------------------->
      <div
        :class="change"
        class="flex-grow w-full sm:flex sm:justify-center lg:justify-start md:px-0 md:w-auto"
      >
        <a class="py-3 mx-4 category link3" @click="showMenu()">Todos </a>
        <a
          v-for="category in categories"
          :key="category.id"
          class="py-3 mx-4 category link3"
          @click="showMenuByCategory(category.id)"
          >{{ category.name }}</a
        >
      </div>
    </div>

    <!------------------Section food cards----------->
    <div class="px-4 py-8 mx-auto my-12 md:px-12" >
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <!-- Column -->
        <div
          class="w-full my-1 sm:w-full md:w-1/2 lg:my-4 lg:w-1/4 xl:w-1/4"
          v-for="food in menu"
          :key="food.id"
        >
          <div class="mx-3 my-2 overflow-hidden text-left card">
            <img
              class="w-full rounded-xl"
              :src="food.image"
              alt="Sunset in the mountains"
            />
            <div class="px-4 py-4">
              <h1 class="mb-2 title-food">{{ food.name }}</h1>
              <p class="food-desc">
                {{ food.description }}
              </p>
            </div>
            <div class="px-3 py-4 mb-4">
              <span class="inline-block title-price">{{ food.category }}</span>
              <span
                class="inline-block px-1 py-1 ml-2 bg-yellow-300 rounded-full price"
                >${{ food.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav class="relative z-0 inline-flex shadow-sm">
        <a href="#cards-food" 
        @click="showMenu('?page=1')"
        class="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700">
          1
        </a>
        <a href="#cards-food"
        @click="showMenu('?page=2')"
        class="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700">
          2
        </a>
      </nav>
  </section>
</template>
<script>
import { GET_CATEGORIES, GET_MENU, GET_MENU_CATEGORY } from "@/request/api.js";

export default {
  name: "SectionMenu",
  data: () => ({
    categories: [],
    menu: [],
    change: "hidden",
    flag: true,
  }),
  created() {
    this.showCategories();
    this.showMenu("?page=1");
  },
  methods: {
    async showCategories() {
      var result = await GET_CATEGORIES();
      this.categories = result.data.data;
    },
    async showMenu(page) {
      var result = await GET_MENU(page);
      this.menu = result.data.data;
      console.log(result.data.links);
      console.log(result.data.meta);
    },
    async showMenuByCategory(id) {
      var result = await GET_MENU_CATEGORY(id);
      this.menu = result.data.data;
    },
    check() {
      if (this.flag) {
        this.change = "bg-white sm:hidden";
        this.flag = false;
      } else {
        this.flag = true;
        this.change = "hidden ";
      }
    },
  },
};
</script>
<style scoped>
.title-food {
  font-family: "Syne";
  font-weight: bold;
  font-size: 1.38rem;
  color: #000000;
}
.food-desc {
  font-style: normal;
  font-weight: normal;
  font-size: 1.13rem;
  line-height: 1.56rem;
  color: #000000;
}
.title-price {
  font-style: normal;
  font-weight: normal;
  font-size: 1.13rem;
  line-height: 1.57rem;
  color: #78909c;
}

.price {
  font-family: "Drunk Text Wide Medium";
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1rem;
  color: #000000;
}

.category {
  font-family: "Syne";
  font-style: normal;
  font-weight: bold;
  font-size: 1.13rem;
  line-height: 1.38rem;
  color: #000000;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: #ffd600 0.3s cubic-bezier(0.11, 0.7, 0, 1);
}

section {
  background-color: #f8f8f8;
}

.card:hover {
  background-color: white;
  box-shadow: 0px 16px 24px rgba(56, 81, 114, 0.2);
  border-radius: 10px;
}

.link3:after {
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 2px;
  background-color: #ffd600;
  content: "";
  border-bottom: 1px solid #ffd600;
  transform: translate3d(-101%, 0, 0);
  transition: transform 0.3s cubic-bezier(0.11, 0.7, 0, 1);
}

.link3:hover:after {
  transform: translate3d(0, 0, 0);
}
</style>