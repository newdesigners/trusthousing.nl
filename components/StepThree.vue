<template>
  <div class="w-full">
    <form>
      <h1 class="pb-1">Housing details</h1>
      <p class="pb-7">The listing description might include obvious red flags that point on the scam. We will check the text for these red flags.</p>
      <div class="flex items-start pb-7">
        <p class="w-28 font-suez mr-8">House type</p>
        <div v-for="(option, index) in options" :key="index" :class="{'font-bold house-type--active' : type === option }" class="mr-16 hover:cursor-pointer inline-block text-center" @click="selectType(option)">
          <div class="w-20 h-20 inline-flex rounded items-center justify-center">
            <Icons class="w-full" :type="option" />
          </div>
          <p class="capitalize">{{ option }}</p>
        </div>
      </div>
      <div class="flex items-center pb-7">
        <label class="w-28 block font-suez mr-8" for="rent-price">Rent price</label>
        <input class="border border-gray-300 rounded-xl py-2.5 px-3.5" placeholder="00 €" v-model="price" required id="rent-price" type="number" />
      </div>
      <div class="flex items-center pb-7">
        <label class="w-28 block font-suez mr-8" for="housing-size">Housing size</label>
        <input class="border border-gray-300 rounded-xl py-2.5 px-3.5" placeholder="m2" v-model="size" required id="housing-size" type="number" />
      </div>
      <div class="flex items-center pb-7">
          <p class="block font-suez mr-8">Utilities included?</p>
          <label for="utilities-yes" class="mr-6">
            <input
              class="mr-2"
              id="utilities-yes"
              v-model="utilities"
              name="utilities"
              type="radio"
              v-bind:value="'Yes'"
            />
            <span>Yes</span>
          </label>
          <label for="utilities-no">
            <input
              class="mr-2"
              id="utilities-no"
              v-model="utilities"
              name="utilities"
              type="radio"
              v-bind:value="'No'"
            />
            <span>No</span>
          </label>
      </div>
      <div class="flex items-center pb-7">
        <div class="flex items-center mr-5">
          <label class="w-28 block font-suez mr-8" for="zipcode">Zipcode:</label>
          <input class="w-32 border border-gray-300 rounded-xl py-2.5 px-3.5" placeholder="1234AB" v-model="zipcode" required id="zipcode" type="text" />
        </div>
        <div class="flex items-center">
          <label class="w-36 block font-suez mr-2" for="house-number">House number:</label>
          <input class="w-24 border border-gray-300 rounded-xl py-2.5 px-3.5" placeholder="123A" v-model="houseNumber" required id="house-number" type="text" />
        </div>
      </div>
    </form>
    <div class="flex justify-end">
      <NuxtLink class="rounded-full py-3.5 px-11 bg-blue text-white hover:bg-primary" to="/start-checking/results" @click.native="save">View Results</Nuxtlink>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      size: '',
      price: '',
      type: '',
      utilities: '',
      zipcode: '',
      houseNumber: '',
      options: [
        'house',
        'apartment',
        'room',
        'studio',
      ],
    };
  },
  mounted() {
    this.size = this.$store.state.listings.listing.property.size;
    this.price = this.$store.state.listings.listing.property.price;
    this.type = this.$store.state.listings.listing.property.type;
    this.utilities = this.$store.state.listings.listing.property.utilities;
  },
  methods: {
    selectType(type) {
      this.type = type;
    },
    save() {
      let property = { price: this.price, size: this.size, type:this.type, utilities: this.utilities };
      this.$store.commit('listings/setProperty', property);
    },
  },
};
</script>

<style>
  .house-type--active svg path, .house-type--active svg g {
    opacity: 1;
  }
</style>