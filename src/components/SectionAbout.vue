<template>
  <section class="overflow-x-hidden bg-white">
    <!-----figure background--->
    <div class="absolute items-end w-full lg:-mt-24">
      <svg
        class="absolute top-0 -mr-0 sm:right-0"
        width="792"
        height="794"
        viewBox="0 0 792 794"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M246.026 -218C147.187 -140 3.11211 16.4343 181.914 102C376.252 195 251.035 360 159.876 414C66.7656 469.157 16.6274 523.667 6.60995 565C-26.1136 714.333 49.6849 946 530.52 650C650.168 576.345 734.999 531.709 793.378 508.112V-40H807V-228H246.026V-218Z"
          fill="#FFD600"
        />
      </svg>
    </div>
    <!-----end figure background--->
    <div class="pt-20 mt-16 overflow-x-hidden">
      <div
        class="relative items-center mx-6 mt-8 overflow-x-hidden sm:mr-0 sm:ml-16 sm:container sm:flex sm:flex-col sm:flex-wrap md:flex-row"
      >
        <!----left cl--->
        <div
          class="justify-center text-center sm:items-start sm:flex sm:flex-col lg:w-6/12 md:w-2/5 md:text-left"
        >
          <h1
            class="my-4 leading-tight text-black md:pr-0 xl:pr-6 header-text md:text-4xl"
          >
            Un nuevo<br />
            sabor esta en

            <span class="span-city">la ciudad</span>
          </h1>

          <p class="text-xl leading-normal parraf1">
            Estamos a punto de descubrir un mundo lleno de sabores<br />
            y de emociones inigualables.
          </p>

          <a
            class="flex my-12 text-black but-find lg:mx-0 hover:underline"
            href="#restaurants"
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
            src="@/assets/images/hero_hamburger.png"
          />
        </div>
      </div>
    </div>
    <!---------next section --------------->
    <section class="py-8 overflow-x-hidden" id="about">
      <div
        class="container flex flex-wrap pt-4 pb-12 mt-32 ml-0 mr-0 overflow-x-hidden"
      >
        <div
          class="absolute justify-end w-10/12 mt-48 ml-48 overflow-x-hidden lg:-mt-24"
        >
          <svg
            class="inline mt-24 ml-56 mr-0 overflow-x-hidden"
            width="950"
            height="320"
            viewBox="0 0 830 352"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.624512 217.704C112.447 209.842 178.953 117.622 276.688 76.0659C361.139 40.1576 428.335 67.254 429.675 161.049C430.48 217.444 413.658 268.76 373.283 309.813C254.83 430.258 192.331 252.3 299.737 179.875C369.258 132.997 461.374 192.146 531.813 204.332C644.917 223.9 767.344 216.36 786.586 78.0014C794.494 21.1398 725.228 -9.9287 680.313 26.7124C580.132 108.44 598.746 279.748 745.766 244.009C857.412 216.868 931.94 102.993 1013.56 29.1757C1022.39 21.1931 1039.13 0.76001 1052.09 0.76001"
              stroke="#FFD600"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div
          class="w-full text-right align-bottom xl:relative lg:inset-y-0 lg:right-0 lg:w-1/2"
        >
          <p
            class="absolute font-bold leading-10 tracking-tight text-right text-gray-900 xl:mt-64 xl:ml-24 xl:text-5xl text_img sm:text-3xl sm:leading-none md:text-4xl"
          >
            LA COMIDA ES
            <br />
            <span class="sub_text">NUESTRO ARTE</span>
          </p>
          <img class="object-cover" src="@/assets/images/people.png" alt="" />
        </div>

        <div class="flex items-center flex-grow w-full p-6 text-left md:w-1/3">
          <div class="relative overflow-hidden align-middle ">
            <div
              class="w-full px-6 font-bold text-black title_about xl:mb-8"
            >
              ¿Quién es Foodies?
            </div>
            <p class="px-6 pr-4 mb-5 text-gray-800 about ">
              Elit irure ad nulla id elit laborum nostrud mollit irure.
               Velit reprehenderit sunt nulla enim aliquip duis tempor est
                culpa fugiat consequat culpa consectetur Lorem. Reprehenderit 
                dolore culpa irure eiusmod minim occaecat et id minim ullamco.
            </p>
            <div class="sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <a
               href="#contactUs"
                class="inline-flex px-8 py-4 font-bold text-gray-800 but-find lg:mx-0 hover:underline"
              >
                Contáctanos
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
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
export default {
  name: "SectionAbout",
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