<template>
  <nav id="header" class="fixed top-0 z-30 w-full text-white">
    <div class="relative overflow-hidden bg-white">
      <div class="max-w-screen-xl mx-auto">
        <div
          class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
        >
          <svg
            class="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div class="relative px-4 pt-6 sm:px-6 lg:px-8">
            <nav
              class="relative flex items-center justify-between sm:h-10 lg:justify-start"
            >
              <div
                class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"
              >
                <div class="flex items-center justify-between w-full md:w-auto">
                  <a
                    href="#"
                    aria-label="Home"
                    class="text-3xl font-bold text-black"
                  >
                    Foodies
                  </a>
                  <div class="flex items-center -mr-2 md:hidden">
                    <button
                      type="button"
                      class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                      id="main-menu"
                      aria-label="Main menu"
                      aria-haspopup="true"
                    >
                      <svg
                        class="w-6 h-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="hidden md:block md:ml-10 md:pr-4">
                <a
                  href="#"
                  class="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
                  >Acerca de</a
                >
                <a
                  href="#"
                  class="ml-8 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
                  >Restaurantes</a
                >
                <a
                  href="#"
                  class="ml-8 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
                  >Menú</a
                >
                <a
                  href="#"
                  class="ml-8 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
                  >Contáctanos</a
                >
              </div>
            </nav>
          </div>
          <div
            class="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
          >
            <div class="rounded-lg shadow-md">
              <div
                class="overflow-hidden bg-white rounded-lg shadow-xs"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="main-menu"
              >
                <div class="flex items-center justify-between px-5 pt-4">
                  <div>
                    <img
                      class="w-auto h-8"
                      src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                      alt=""
                    />
                  </div>
                  <div class="-mr-2">
                    <button
                      type="button"
                      class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                      aria-label="Close menu"
                    >
                      <svg
                        class="w-6 h-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="px-2 pt-2 pb-3">
                  <a
                    href="#"
                    class="block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                    role="menuitem"
                    >Acerca de</a
                  >
                  <a
                    href="#"
                    class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                    role="menuitem"
                    >Restaurantes</a
                  >
                  <a
                    href="#"
                    class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                    role="menuitem"
                    >Menú</a
                  >
                  <a
                    href="#"
                    class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                    role="menuitem"
                    >Contáctanos</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
  methods: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");
</style>