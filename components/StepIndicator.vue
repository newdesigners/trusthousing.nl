<template>
  <aside class="flex items-center w-1/2">
    <NuxtLink to="/start-checking/1" data-name="Listing description" class="inline-flex flex-col items-center step-indicator mr-2.5" :class="{ 'step-indicator--active' : step === '1' }">
      <figure class="w-11 h-11 bg-black"></figure>
    </NuxtLink>
    <div class="flex-1 h-px bg-black"></div>
    <NuxtLink to="/start-checking/2" data-name="Upload images" class="inline-flex flex-col items-center step-indicator mx-2.5" :class="{ 'step-indicator--active' : step === '2' }">
      <figure class="w-11 h-11 bg-black"></figure>
    </NuxtLink>
    <div class="flex-1 h-px bg-black"></div>
    <NuxtLink to="/start-checking/3" data-name="Housing details" class="inline-flex flex-col items-center step-indicator ml-2.5" :class="{ 'step-indicator--active' : step === '3' }">
      <figure class="w-11 h-11 bg-black"></figure>
    </NuxtLink>
  </aside> 
</template>

<script>
export default {
	data() {
		return {
      step: 1,
		};
	},
	mounted() {
    this.step = this.$route.params.id;
	},
};
</script>