<template>
  <div class="flex flex-wrap w-full pb-10 md:px-0" id="restaurants">
      <div class="w-full md:w-1/2 ">
        <h1 class="text-black prim_title xl:pb-6">Estamos para ti</h1>
        <!------ Tabs------------>
        <div class="flex w-full">
          
            <ul class="flex w-full pt-3 mb-0 list-none">
              <li class="w-1/2 -mb-px text-center last:mr-0">
                <a
                  class="block px-5 py-3 text-xs font-bold leading-normal border border-gray-600 "
                  @click="toggleTabs(1)"
                  :class="{
                    'text-black bg-white': openTab !== 1,
                    'text-white bg-black': openTab === 1,
                  }"
                >
                  <i class="mr-1 fas fa-hamburger"></i> Para llevar
                </a>
              </li>
              <li class="w-1/2 -mb-px text-center last:mr-0">
                <a
                  class="block py-3 text-xs font-bold leading-normal border border-gray-600"
                  @click="toggleTabs(2)"
                  :class="{
                    'text-black bg-white': openTab !== 2,
                    'text-white bg-black': openTab === 2,
                  }"
                >
                  <i class="mr-1 fas fa-truck " src="@/assets/delivery.png"></i> Domicilio
                </a>
              </li>
            </ul>
        </div>
        <!--------------end tabs----------->
        <!---------------Search--------------->
        <div class="text-gray-600 border ">
          <button type="submit" class="top-0 right-0 mt-3 mr-4 ">
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
            class="h-10 px-5 pr-10 text-sm bg-white focus:outline-none"
          />
          
        </div>
        <!----------------end Search---------->

        <!--------start card info restaurant------------->
        <div
          class="flex flex-col w-4/5 min-w-0 mx-auto mt-3 bg-white border rounded-md mbreak-words"
          v-for="branch in locations" :key="branch.id"
        >
          <div class="flex-auto px-4 py-5 text-xl text-left text-black tab-content">
              
                <p id="nameRest" class=""> {{branch.name}}
                </p>
                <p id="schedule" class= "pt-2 ">Abierto de {{changeHour(branch.opening_time)}} - {{changeHour(branch.closing_time)}}
                </p>
                <p id="address" class="">{{branch.address}} 
                </p>
          </div>
        </div>
      </div>
      <!-- end section locations----------------->
      
      <!---- start section google map------------>

      <div class="w-full h-full md:w-1/2">
        <div class="overflow-hidden border rounded ">
          <div class="container Map">
            <div class="row Map">
              <div class="col-md-10 Map col-md-offset-1">
                <div class="lead-form Map">
                  <div class="row Map">
                    <div
                      class="col-md-12 Map"
                      v-bind:class="{ 'not-visible': active }"
                    >
                      <iframe
                        frameborder="0"
                        style="width: 100%; height: 35rem ; border: 0"
                        v-bind:src="
                          'https://www.google.com/maps/embed/v1/place?key=AIzaSyAaBZ3MrbLmU8Cepir1sg8uAQNrm-Y_jmY&q=' +
                          place
                        "
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAJ_LyoujyEOn-U2Ul3K3z4mHv5MW-bW8o&callback=initMap&libraries=&v=weekly"
      defer
    ></script>
<script>
import {GET_LOCATIONS} from "@/request/api.js"
export default {
  name: "SectionRestaurants",
  data: () => ({
    openTab: 1, //Default: Para llevar
    latitude: "",
    place: "elaniin",
    active: true,
    longitude: "",
    locations:[]
  }),
  watch: {
    place: function () {
      this.longitude = "";
      this.latitude = "";
      this.active = true;
      if (this.place.length >= 4) {
        this.lookupCoordinates();
        this.active = false;
      }
    },
  },

  created(){
    this.toggleTabs(1);

  },
  // methods
  methods: {
    
    async showLocations(type) {
      var result = await GET_LOCATIONS(type);
      this.locations=result.data.data;      
    }, 

    toggleTabs(tabNumber) {
      this.openTab = tabNumber;
      if(this.openTab==1){
        this.showLocations("takeaway")
      }else{
        this.showLocations("delivery")
      }
      
    },

    changeHour(hour){
      var aux= hour.split(":");

      return aux[0]<12 ? aux[0]+":"+aux[1]+" a.m." : aux[0] +":"+aux[1]+" p.m."
      
    },
    
    lookupCoordinates: _.debounce(function () {
      var app = this;
      app.longitude = "Searching.....";
      app.latitude = "Searching.....";
      axios
        .get(
          "https://maps.googleapis.com/maps/api/geocode/json?address=" +
            app.place
        )
        .then(function (response) {
          app.longitude = response.data.results[0].geometry.location.lng;
          app.latitude = response.data.results[0].geometry.location.lat;
        })
        .catch(function (error) {
          app.longitude = "Invalid place";
          app.latitude = "Invalid place";
        });
    }, 600),

  },
};

</script>
<style  scoped>

.mapouter {
  position: relative;
  text-align: right;
  height: 100%;
  width: 100%;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 100%;
  width: 100%;
}

a{
  font-family: "Syne";
font-style: normal;
font-weight: bold;
font-size: 1.5rem;
line-height: 30px;
}
.prim_title{
  font-family: "Drunk Text Wide Medium";
  font-style: normal;
  font-weight: bold;
  font-size: 2.5rem;
  line-height: 40px;
}

#nameRest{
  font-family: "Syne";
font-style: normal;
font-weight: bold;
line-height: 24px;
}

#schedule, #address{
font-style: normal;
font-weight: normal;
font-size: 1rem;
line-height: 22px;
}
</style>