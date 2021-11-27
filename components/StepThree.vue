<template>
  <div class="w-full">
    <form>
      <h1 class="pb-1">Price and size</h1>
      <p class="pb-7">The listing description might include obvious red flags that point on the scam. We will check the text for these red flags.</p>
      <div class="flex items-start pb-7">
        <p class="w-28 font-suez mr-8">House type</p>
        <div v-for="(option, index) in options" :key="index" :class="{'font-bold' : type === option }"class="mr-16 hover:cursor-pointer inline-block text-center" @click="selectType(option)">
          <div class="w-20 h-20 inline-flex rounded bg-gray-dark items-center justify-center"></div>
          <p>{{ option }}</p>
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
    </form>
    <div class="flex justify-end">
      <NuxtLink class="rounded-full py-3.5 px-11 bg-black text-white hover:bg-gray-dark" to="/start-checking/results" @click.native="save">View Results</Nuxtlink>
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
      options: [
        'House',
        'Appartment',
        'Room',
        'Studio',
      ],
    }
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
</style>
