<template>
  <section class="overflow-x-hidden bg-black">
    <!-----figure background--->
    <div class="absolute top-0 right-0">
        <svg width="605" height="610" viewBox="0 0 605 610" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M713.185 -39.8995H748.529V622L1021.43 622L1021.43 61.0259L1011.43 61.0259C939.652 -29.9278 801.455 -159.189 713.185 -39.8995ZM606.667 634.035C383.809 838.927 205.581 727.269 143.43 644.038C266.763 744.88 439.43 826.355 143.43 345.52C-152.57 -135.315 79.0963 -211.114 228.43 -178.39C269.763 -168.373 324.273 -118.234 379.43 -25.1236C419.262 42.1183 519.491 127.892 606.667 90.2722V634.035Z" fill="#FFD600"/>
        </svg>
    </div>
    <!-----end figure background--->
    <div class="pt-20 mt-16 overflow-x-hidden">
      <div
        class="container relative flex flex-col flex-wrap items-center mt-8 ml-16 overflow-x-hidden md:flex-row"
      >
        <!----left cl--->
        <div
          class="flex flex-col items-start justify-center text-center lg:w-6/12 md:w-2/5 md:text-left"
        >
          <h1
            class="my-4 leading-tight text-white md:pr-0 xl:pr-6 header-text md:text-4xl"
          >
            Cada sabor<br />
            es una nueva

            <span class="text-black span-city">experiencia</span>
          </h1>

          <p class="text-xl leading-normal parraf1">
            Estamos a punto de descubrir un mundo lleno de sabores<br />
            y de emociones inigualables.
          </p>

          <a
            class="flex my-12 text-black but-find lg:mx-0 hover:underline"
            href="#"
          >
            Encuentranos
            <svg
              class="w-6 h-6 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </div>
        <!--Right Col-->
        <div
          class="flex flex-col justify-end -mr-12 overflow-x-hidden lg:-mt-10 lg:w-6/12 ext-center md:w-3/5"
        >
          <img
            class="overflow-x-hidden md:w-4/5"
            src="@/assets/images/hero_hamburgerMenu.png"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "SectionHeaderMenu",
};
</script>

<style scoped>
.span-city {
  background-color: #ffd600;
}
.parraf1 {
  font-size: 1.125rem;
  color: rgba(0, 0, 0, 0.4);
}
.header-text {
  font-family: "Drunk Text Wide Medium";
  font-weight: 700;
  font-size: 3.75rem;
}
.but-find {
  font-family: "Syne";
  font-weight: bold;
  font-size: 1.38rem;
  color: #000000;
}
.text_img {
  font-family: "Drunk Text Wide Medium";
  margin-right: -24rem;
  color: white;
}
.sub_text{
  color: #ffd600;
}
.title_about{
  font-family: "Syne";
  font-size: 1.4rem;

}
.about{
  font-style: normal;
font-weight: normal;
font-size: 1.2rem;
line-height: 25px;
color: rgba(0, 0, 0, 0.4);

}
</style>