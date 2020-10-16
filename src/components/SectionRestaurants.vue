<template>
  
    <div class="container max-w-4xl px-12 pb-10 mx-auto md:px-0">
      <div class="flex flex-wrap items-start justify-start -mx-4">
        <div class="w-full p-4 md:w-1/2">
          <form>
            <fieldset class="mb-4">
              <label class="block pb-2 text-sm text-gray-dark">Name</label>
              <input
                class="block w-full px-3 py-2 text-sm text-gray-700 border rounded"
                type="text"
              />
              <p class="pt-2 text-xs text-gray">This is some helper text...</p>
            </fieldset>

            <fieldset class="mb-4">
              <label class="block pb-2 text-sm text-gray-dark">Email</label>
              <input
                class="block w-full px-3 py-2 text-sm text-gray-700 border rounded"
                type="text"
              />
            </fieldset>

            <fieldset class="mb-4">
              <label class="block pb-2 text-sm text-gray-dark">Message</label>
              <textarea
                class="block w-full h-32 px-3 py-2 text-sm text-gray-700 border rounded border-red-300er"
              ></textarea>
              <p class="pt-2 text-xs text-red-400">This field is required...</p>
            </fieldset>

            <button class="px-3 py-2 text-sm text-white bg-black rounded">
              Submit
            </button>
          </form>
        </div>

        <div class="w-full h-full p-4 md:w-1/2">
          <div class="overflow-hidden border rounded">
            <iframe
              class="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d106000.49300263195!2d151.1141413582031!3d-33.8763776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sau!4v1547515706012"
              frameborder="0"
              style="border: 0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "SectionRestaurants",
};
</script>
<style lang="scss" scoped>
</style>