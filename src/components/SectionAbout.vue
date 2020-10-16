<template>
  <section class="py-8 overflow-x-hidden bg-white">
    <div class="absolute items-end w-full lg:-mt-24">
      <svg
        class="absolute top-0 right-0 -mr-0"
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
    <div class="pt-20 overflow-x-hidden">
      <div
        class="container relative flex flex-col flex-wrap items-center ml-20 overflow-x-hidden md:flex-row"
      >
        <!--Left Col-->
        <div
          class="flex flex-col items-start justify-center w-full text-center md:w-2/5 md:text-left"
        >
          <h1 class="my-4 text-5xl font-bold leading-tight">
            Un nuevo<br />
            sabor esta en
            <br class="" />
            <span class="text-indigo-600">la ciudad</span>
          </h1>

          <p class="mb-8 text-xl leading-normal">
            Estamos a punto de descubrir un mundo lleno de sabores<br />
            y de emociones inigualables.
          </p>

          <button
            class="inline-flex px-8 py-4 mx-auto my-6 font-bold text-gray-800 bg-white lg:mx-0 hover:underline"
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
          </button>
        </div>
        <!--Right Col-->
        <div
          class="justify-center w-full py-6 overflow-x-hidden ext-center md:w-3/5"
        >
          <img
            class="z-40 w-full ml-8 mr-0 overflow-x-hidden md:w-4/5"
            src="@/assets/images/hero_hamburger.png"
          />
        </div>
      </div>
    </div>
    <section class="py-8 overflow-x-hidden">
      <div
        class="container flex flex-wrap pt-4 pb-12 mt-32 ml-0 mr-0 overflow-x-hidden"
      >
        <div
          class="absolute justify-end w-10/12 mt-48 ml-48 overflow-x-hidden lg:-mt-24"
        >
          <svg
            class="inline mt-40 ml-56 mr-0 overflow-x-hidden"
            width="950"
            height="352"
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
          class="text-right align-bottom lg:relative lg:inset-y-0 lg:right-0 lg:w-1/2"
        >
          <h2
            class="absolute justify-end mt-64 mr-12 text-4xl font-extrabold leading-10 tracking-tight text-right text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
          >
            La comida es
            <br class="xl:hidden" />
            <span class="justify-end text-yellow-600">nuestro arte</span>
          </h2>
          <img class="object-cover" src="@/assets/images/people.png" alt="" />
        </div>

        <div class="flex items-center flex-grow w-full p-6 text-left md:w-1/3">
          <div class="overflow-hidden align-middle bg-white">
            <div
              class="w-full px-6 text-xl font-bold text-gray-800 align-middle"
            >
              ¿Quién es Foodies?
            </div>
            <p class="px-6 mb-5 text-base text-gray-800 align-middle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at ipsum eu nunc commodo posuere et sit amet ligula.
            </p>
            <div
              class=" sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <button
                class="inline-flex px-8 py-4 font-bold text-gray-800 lg:mx-0 hover:underline"
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
              </button>
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
</style>