<template>
  <div class="">
    <section class="px-4 py-12 pb-40 md:pb-12 md:mt-0 lg:mb-6">
      <!----------------------- figure left------------->
      <div class="absolute left-0 justify-start hidden sm:inline">
        <svg
          width="187"
          height="547"
          viewBox="0 0 187 547"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.02922 538.88C60.2572 505.082 145.064 433.701 58.4307 377.55C-35.7296 316.52 39.9095 239.455 90.5744 217.566C142.325 195.208 171.842 170.331 179.766 149.608C203.522 83.1232 167.969 -57.4236 -9.00003 26.3207L-9.00005 227.057L-9.00011 262.763L-9.00013 317.295L-9.00012 396.614L-9.00014 546.853L4.02922 538.88Z"
            fill="#FF2C2C"
          />
        </svg>
      </div>
      <!--------------------------Figure right-------------------->
      <div class="absolute right-0 justify-end hidden xl:mt-32 sm:inline">
        <svg
          width="214"
          height="547"
          viewBox="0 0 214 547"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M180.734 8.41235C124.506 42.2103 39.6989 113.591 126.332 169.742C220.493 230.772 144.853 307.837 94.1885 329.726C42.4383 352.084 12.9208 376.961 4.99732 397.684C-18.3685 463.075 38.3835 600.109 213.763 524.926V320H223.763V284.529L223.763 229.997L223.763 150.678V0.438904L180.734 8.41235Z"
            fill="#FF2C2C"
          />
        </svg>
      </div>
      <!---------------------- image ketchup---------------------->
      <div class="absolute right-0 hidden md:inline">
        <img src="@/assets/images/testimonials_bg_ketchup.png" />
      </div>

      <!--------------------------Start testimonials--------------------->
      <div
        class="flex flex-col w-3/5 mx-auto mt-40 overflow-hidden md:w-auto xl:pt-20 md:my-24 md:flex-row"
        x-data="{ testimonialActive: 2 }"
        x-cloak
      >
        <div class="mx-auto md:w-1/2">
          <div class="relative flex flex-col h-full">
            
            <div class="absolute top-0 left-0 mt-3 ml-4 md:mt-5 md:ml-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-12 h-12 text-indigo-200 fill-current md:w-16 md:h-16"
                viewBox="0 0 24 24"
              >
                <path
                  d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z"
                />
              </svg>
            </div>
            <div class="relative z-10 h-full">
              <div x-show.immediate="testimonialActive === 1">
                <p
                  class="px-6 py-6 text-xl text-black testi_text md:px-16 md:py-10 md:text-2xl"
                  x-show.transition="testimonialActive == 1"
                >El mejor lugar para degustar en familia y amigos!
                </p>
              </div>

              <div x-show.immediate="testimonialActive === 2">
                <p
                  class="px-6 py-6 text-xl text-black testi_text md:px-16 md:py-10 md:text-2xl"
                  x-show.transition="testimonialActive == 2"
                >
                  Toman todas las medidas de seguridad con los clientes
                </p>
              </div>

              <div x-show.immediate="testimonialActive === 3">
                <p
                  class="px-6 py-6 text-xl text-black testi_text md:px-16 md:py-10 md:text-2xl"
                  x-show.transition="testimonialActive == 3"
                >
                  Tienen muy buen servicio y son muy amables. Es perfecto!
                </p>
              </div>
            </div>

            <div class="flex justify-center px-6 pb-6 md:py-6">
              <div class="text-center" x-show="testimonialActive == 1">
                <h2
                  class="text-sm leading-tight text-gray-700 testi_Desc md:text-base"
                >
                  Es el mejor lugar al que he venido con mi familia,
                  la comida es rica, sirven rápido y te atienden de la mejor manera.
                </h2>
              </div>

              <div class="text-center" x-show="testimonialActive == 2">
                <h2
                  class="text-sm leading-tight text-gray-700 testi_Desc md:text-base"
                >
                  Siempre mantienen limpias las mesas y sillas, y manejan con
                  preacución los desechos para que ellos no corran riesgo de contagio.
                </h2>
              </div>

              <div class="text-center" x-show="testimonialActive == 3">
                <h2
                  class="text-sm leading-tight text-gray-700 testi_Desc md:text-base"
                >
                  Me atendieron rápido y eran muy atentos de las necesidades de los clientes.
                  Tambien me gusta que dan dulces al momento de realizar el pago. 
                </h2>
              </div>
            </div>
            <div class="bottom-0 right-0 block mb-4 mr-4">
            <button
              class="w-16 h-12 font-bold text-black focus:outline-none hover:text-indigo-500"
              x-on:click="testimonialActive = testimonialActive === 1 ? 3 : testimonialActive - 1"
              @click="testimonialActive = testimonialActive >= 3 ? 1 : testimonialActive + 1"
            >
              &#8592;
            </button>
            <span>{{testimonialActive}} / 3</span>
            <button
              class="w-16 h-12 font-bold text-black focus:outline-none hover:text-indigo-500"
              x-on:click="testimonialActive = testimonialActive >= 3 ? 1 : testimonialActive + 1"
              @click="testimonialActive = testimonialActive >= 3 ? 1 : testimonialActive + 1"
            >
              &#8594;
            </button>
          </div>
          </div>
        </div>
      </div>
      
    </section>
    <!--------------end testimonials------------------->

    <!---------------------Section contact us------------------------------->
    <section class="px-4 py-32 bg-black sm:py-20 xl:pt-32 xl:pb-24" id="contactUs">

      <h2 class="mb-8 text-4xl text-center text-white font-heading title_comment">
        Cuentanos tu experiencia
      </h2>
      <p class="w-6/12 mx-auto text-xl text-center text-white ">
        Don't miss out on our great offers & Recieve deals from all our top
        restaurants via e-mail.
      </p>

      <div class="w-full max-w-3xl py-12 mx-auto">
        <form>
          <div class="flex flex-wrap -mx-8">
            <div class="w-full px-8 pt-2 mb-4 md:w-1/2 md:mb-0">
              <div class="relative w-full appearance-none label-floating">
                <!------first input "name"------------->
                <p class="text-left text-white ">Nombre y Apellido</p>
                <input
                  class="w-full px-4 py-8 mb-3 leading-relaxed tracking-wide text-white bg-black border border-gray-200 rounded appearance-none focus:outline-none focus:bg-black focus:border-yellow-400"
                  id="name"
                  v-model="name"
                  type="text"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div class="w-full appearance-none label-floating">
                <!------second input "email"------------->
                <p class="text-left text-white ">Correo</p>
                <input
                  class="block w-full px-4 py-8 mb-3 leading-relaxed tracking-wide text-white bg-black border border-gray-200 rounded appearance-none focus:outline-none focus:bg-black focus:border-yellow-400"
                  id="email"
                  type="text"
                  v-model="email"
                  placeholder="Tu correo"
                  required
                />
              </div>
            </div>
            <div class="w-full px-8 py-4 mb-4 md:px-4 md:w-1/2 md:mb-0">
              <div class="appearance-none label-floating">
                <!------third input "comment"------------->
                
                
                <p class="text-left text-white ">Comentario...</p>
                <textarea
                  v-model="comment"
                  class="w-full px-4 py-20 mb-3 leading-relaxed tracking-wide text-white bg-black border border-gray-200 rounded appearance-none autoexpand focus:outline-none focus:bg-black focus:border-yellow-400"
                  id="message"
                  type="text"
                  placeholder="Comentario..."
                ></textarea>
              </div>
            </div>
          </div>
          <div class="w-4/12 mx-auto md:-mr-16">
            <button class="px-4 py-2 font-bold border send" @click="sendComment()">
              <span>Enviar comentario</span>
            </button>
          </div>
        </form>
      </div>
    </section>

    <!---------------------- section benefits-------------------------------->
    <section class="px-4 mb-48 sm:py-12">
      <div class="flex flex-wrap">
        <div class="w-full mt-8 md:mt-0 md:w-2/5">
        <!------------img celphone------------------>
          <img
            class="absolute w-full -mt-48 md:w-3/5"
            src="@/assets/images/Onboarding 3 Mockup.png"
          />
        </div>
        <!--- text-------------------------------->
        <div class="right-0 mt-56 sm:pt-56 sm:absolute md:pt-0 md:mt-0 md:w-11/12">
          <div class="w-full mx-auto mr-32 md:w-3/5">
            <div class="w-full pt-12 pb-12 sm:pb-0">
              <p class="text-xl font-bold text-black testi_text">
                Obten más beneficios
                <br />
                <span class="bg-yellow-400">Descarga nuestra app</span>
              </p>
            </div>
            <!--------------------Facts------------------->
            <div class="w-full mb-4 sm:flex sm:flex-wrap">
              <div class="sm:w-1/2">
                <img class="mx-auto" src="@/assets/images/Group 1.png" />
                <p
                  class="w-full px-6 text-xl font-bold text-black align-middle"
                >
                  ¿Quién es Foodies?
                </p>
                <p class="px-6 mb-5 text-base text-black align-middle">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </div>
              <div class="sm:w-1/2">
                <img class="mx-auto" src="@/assets/images/Group 2.png" />
                <p
                  class="w-full px-6 text-xl font-bold text-black align-middle"
                >
                  ¿Quién es Foodies?
                </p>
                <p class="px-6 mb-5 text-base text-black align-middle">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </div>
            </div>
            <div class="pt-10 mx-auto sm:w-3/5 ">
              <img class="mx-auto" src="@/assets/images/Group 3.png" />
              <p class="px-6 text-xl font-bold text-black">
                ¿Quién es Foodies?
              </p>
              <p class="px-6 mb-5 text-base text-black align-middle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </div>
          </div>
        </div>
        <!---------------------svg arrows ---------------->
        <div class="hidden w-full pt-64 mx-auto mt-64 ml-20 md:ml-8 sm:flex md:pt-12 md:mt-12 md:w-2/5">
          <svg
            class="mr-12"
            width="253"
            height="230"
            viewBox="0 0 211 248"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M48.2663 4.96875L44.137 2.89946L44.4096 7.51021L48.2663 4.96875ZM205.983 247.607L208.216 243.564L203.598 243.652L205.983 247.607ZM44.6465 4.78207C42.2281 4.93744 39.9213 5.11169 37.7233 5.30473L37.7933 6.10167C39.9845 5.90921 42.2851 5.73543 44.6978 5.58043L44.6465 4.78207ZM17.3629 8.28194C12.1424 9.50881 8.22176 10.9918 5.4826 12.7393C2.73884 14.4897 1.15066 16.5261 0.667161 18.858L1.4505 19.0204C1.87672 16.9648 3.28629 15.0894 5.91287 13.4137C8.54406 11.7351 12.3664 10.278 17.546 9.06073L17.3629 8.28194ZM10.6767 36.4013C14.8827 40.4059 20.2516 44.7623 26.4967 49.4585L26.9775 48.8191C20.7428 44.1307 15.4018 39.7956 11.2283 35.8219L10.6767 36.4013ZM43.2143 61.5112C48.5163 65.2262 54.1484 69.1107 60.0092 73.1601L60.464 72.5019C54.6021 68.4519 48.9727 64.5691 43.6733 60.856L43.2143 61.5112ZM76.9111 84.9084C82.3844 88.7511 87.9642 92.7199 93.5826 96.8126L94.0537 96.166C88.4305 92.0698 82.8467 88.0982 77.3708 84.2537L76.9111 84.9084ZM110.028 109.108C115.423 113.259 120.791 117.522 126.074 121.894L126.584 121.278C121.293 116.899 115.917 112.63 110.516 108.474L110.028 109.108ZM141.585 135.317C146.677 139.943 151.622 144.678 156.356 149.518L156.928 148.959C152.181 144.106 147.226 139.36 142.123 134.725L141.585 135.317ZM170.146 164.691C174.607 170.01 178.766 175.444 182.55 180.99L183.211 180.539C179.41 174.969 175.235 169.514 170.759 164.177L170.146 164.691ZM193.011 198.55C196.15 204.726 198.776 211.026 200.802 217.447L201.565 217.206C199.524 210.739 196.881 204.399 193.725 198.188L193.011 198.55ZM205.031 237.389C205.268 239.588 205.431 241.799 205.515 244.024L206.315 243.993C206.229 241.75 206.066 239.52 205.827 237.303L205.031 237.389ZM48.2663 4.96875L39.9857 0.874244L40.5801 10.0927L48.2663 4.96875ZM205.983 247.607L210.296 239.438L201.065 239.788L205.983 247.607ZM41.0206 4.6343C39.8833 4.72037 38.7726 4.81103 37.6883 4.90627L37.8283 6.50013C38.9059 6.40548 40.0102 6.31535 41.1414 6.22974L41.0206 4.6343ZM17.2714 7.89255C12.0304 9.12423 8.06061 10.6202 5.26747 12.4021C2.46511 14.1898 0.787632 16.3068 0.275492 18.7768L1.84217 19.1016C2.23976 17.1841 3.56001 15.3892 6.128 13.751C8.70521 12.1068 12.4784 10.6625 17.6375 9.45012L17.2714 7.89255ZM10.4009 36.691C14.6231 40.7111 20.006 45.0781 26.2563 49.7782L27.2179 48.4994C20.9884 43.8149 15.6614 39.4904 11.5042 35.5322L10.4009 36.691ZM42.9847 61.8388C48.2881 65.5547 53.9216 69.4402 59.7818 73.4892L60.6913 72.1728C54.829 68.1224 49.2009 64.2406 43.9029 60.5284L42.9847 61.8388ZM76.6813 85.2358C82.1532 89.0775 87.7311 93.0449 93.3471 97.136L94.2892 95.8427C88.6637 91.7448 83.0779 87.7718 77.6007 83.9263L76.6813 85.2358ZM109.784 109.425C115.175 113.574 120.54 117.834 125.819 122.202L126.839 120.969C121.544 116.587 116.164 112.316 110.76 108.157L109.784 109.425ZM141.316 135.614C146.403 140.235 151.342 144.964 156.07 149.798L157.214 148.679C152.461 143.82 147.5 139.069 142.391 134.429L141.316 135.614ZM169.84 164.948C174.293 170.258 178.443 175.682 182.219 181.215L183.541 180.313C179.732 174.731 175.549 169.266 171.065 163.92L169.84 164.948ZM192.655 198.731C195.784 204.89 198.401 211.169 200.421 217.567L201.946 217.086C199.898 210.596 197.246 204.235 194.081 198.007L192.655 198.731ZM204.633 237.432C204.743 238.443 204.836 239.456 204.913 240.473L206.508 240.352C206.43 239.319 206.335 238.288 206.224 237.26L204.633 237.432Z"
              fill="#FFD600"
            />
          </svg>
          <svg
            class="-mr-16"
            width="253"
            height="230"
            viewBox="0 0 253 248"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M197.724 4.96875L201.828 2.8515L201.61 7.46511L197.724 4.96875ZM4.28252 247.607L2.06683 243.555L6.68437 243.662L4.28252 247.607ZM201.34 4.73986C203.82 4.86584 206.206 5.0048 208.499 5.15671L208.446 5.95496C206.157 5.80335 203.776 5.66461 201.299 5.53883L201.34 4.73986ZM228.781 7.15562C237.935 8.45477 244.591 10.1333 249.045 12.1953L248.709 12.9213C244.362 10.9087 237.797 9.24326 228.669 7.94768L228.781 7.15562ZM251.989 28.9564C248.476 32.9318 242.887 37.3465 235.732 42.1841L235.284 41.5214C242.426 36.6925 247.946 32.3236 251.389 28.4267L251.989 28.9564ZM218.25 53.1536C212.69 56.4606 206.671 59.9256 200.301 63.545L199.906 62.8495C206.273 59.2312 212.287 55.7691 217.841 52.466L218.25 53.1536ZM182.254 73.7339C176.387 77.0399 170.336 80.4552 164.169 83.9782L163.772 83.2835C169.942 79.7593 175.994 76.343 181.862 73.0369L182.254 73.7339ZM146.257 94.3511C140.369 97.8162 134.434 101.373 128.504 105.019L128.085 104.338C134.02 100.688 139.96 97.1289 145.851 93.6616L146.257 94.3511ZM110.99 116.093C105.193 119.87 99.4525 123.733 93.8194 127.68L93.3603 127.025C99.0016 123.072 104.75 119.204 110.553 115.423L110.99 116.093ZM77.1267 139.902C71.5729 144.165 66.1895 148.516 61.033 152.954L60.5111 152.347C65.6803 147.898 71.0754 143.538 76.6397 139.268L77.1267 139.902ZM45.8151 167.01C40.8174 171.997 36.1532 177.083 31.893 182.265L31.275 181.757C35.5539 176.552 40.2362 171.447 45.2501 166.444L45.8151 167.01ZM19.8249 199.015C16.1012 205.041 12.9782 211.184 10.554 217.44L9.80801 217.151C12.2521 210.844 15.3981 204.657 19.1444 198.594L19.8249 199.015ZM5.37001 237.314C5.07329 239.539 4.87059 241.776 4.76587 244.027L3.96674 243.989C4.07254 241.716 4.27733 239.455 4.57703 237.208L5.37001 237.314ZM197.724 4.96875L205.948 0.762711L205.478 9.98837L197.724 4.96875ZM4.28252 247.607L0.0400238 239.402L9.26767 239.83L4.28252 247.607ZM204.961 4.53622C206.173 4.60667 207.361 4.68046 208.525 4.75758L208.42 6.35409C207.26 6.27725 206.076 6.20373 204.868 6.13352L204.961 4.53622ZM228.837 6.75958C238.003 8.06053 244.706 9.74567 249.213 11.8323L248.541 13.2843C244.247 11.2964 237.728 9.6375 228.612 8.34371L228.837 6.75958ZM252.289 29.2213C248.741 33.2359 243.118 37.6735 235.956 42.5155L235.06 41.19C242.196 36.3655 247.681 32.0195 251.089 28.1619L252.289 29.2213ZM218.454 53.4974C212.891 56.8063 206.869 60.2728 200.499 63.8928L199.709 62.5017C206.075 58.884 212.086 55.4234 217.636 52.1223L218.454 53.4974ZM182.451 74.0824C176.583 77.3883 170.534 80.8031 164.367 84.3255L163.574 82.9362C169.744 79.4114 175.797 75.9946 181.665 72.6884L182.451 74.0824ZM146.46 94.6958C140.574 98.1599 134.641 101.715 128.714 105.36L127.876 103.997C133.813 100.346 139.755 96.7853 145.648 93.3169L146.46 94.6958ZM111.208 116.428C105.414 120.203 99.6779 124.063 94.049 128.008L93.1308 126.697C98.7762 122.741 104.528 118.871 110.335 115.088L111.208 116.428ZM77.3703 140.22C71.8216 144.478 66.4441 148.824 61.2939 153.257L60.2502 152.044C65.4256 147.59 70.8266 143.225 76.3961 138.95L77.3703 140.22ZM46.0977 167.294C41.108 172.272 36.4528 177.348 32.202 182.519L30.966 181.503C35.2543 176.287 39.9456 171.172 44.9675 166.161L46.0977 167.294ZM20.1652 199.225C16.4527 205.233 13.3412 211.354 10.927 217.585L9.43504 217.007C11.889 210.673 15.0466 204.465 18.8041 198.384L20.1652 199.225ZM5.76649 237.367C5.62804 238.405 5.51016 239.446 5.41327 240.489L3.82013 240.342C3.91901 239.276 4.03929 238.215 4.18054 237.156L5.76649 237.367Z"
              fill="#FFD600"
            />
          </svg>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { POST_CONTACT } from "@/request/api.js";
export default {
  name: "SectionContact",
  data: () => ({
    comment: "",
    name: "",
    email: "",
    testimonialActive: 1,
  }),
  methods: {
    async sendComment() {
      var result = await POST_CONTACT(this.name, this.email, this.comment);
      console.log(result.status);
      this.name = "";
      this.email = "";
      this.comment = "";
    },
  },
};
</script>
<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,500);
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css);

[x-cloak] {
  display: none;
}

.title_comment{
  font-family: "Drunk Text Wide Medium";
font-style: normal;
font-weight: bold;
line-height: 36px;

text-align: center;
}
.testi_text{
  font-family: "Drunk Text Wide Medium";
  font-style: normal;
  font-weight: bold;
  line-height: 125.8%;
}

.testi_Desc{
  font-style: normal;
  font-weight: normal;
  line-height: 128.91%;
}

.send {
  padding: 10px 15px;
  border: 1px solid #FFD600;
  cursor: pointer;
  background: #FFD600;
  overflow: hidden;
  position: relative;
  margin-bottom: 5px;
  border-radius: 0.5rem;
}
.send:hover span {
  color:black;
}
.send:focus {
  outline: none;
}

/* Button 1 */
.send:after {
  content: "";
  position: absolute;
  width: 200%;
  height: 100%;
  left: -215%;
  top: 0;
  background: #FFEA79;
  transform: skew(45deg);
  -webkit-transform: skew(45deg);
  transition: 0.45s;
  -webkit-transition: 0.45s;
}
.send:hover:after {
  left: -15%;
}
.send span {
  
  font-size: 1rem;
  color:black;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  transition: 0.3s;
  -webkit-transition: 0.3s;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}





.check input:invalid {
  border-color: red;
}

/* FLOATING LABEL */
.label-floating input:not(:placeholder-shown),
.label-floating textarea:not(:placeholder-shown) {
  padding-top: 1.4rem;
}
.label-floating input:not(:placeholder-shown) ~ label,
.label-floating textarea:not(:placeholder-shown) ~ label {
  font-size: 0.8rem;
  transition: all 0.2s ease-in-out;
  color: #1f9d55;
  opacity: 1;
}
</style>