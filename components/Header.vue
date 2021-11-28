<template>
  <header class="container flex justify-between items-center py-8 pb-14">
    <NuxtLink to="/">
      <figure class="flex">
        <div class="pr-7">
          <Logo class="w-20" />
        </div>
        <figcaption>  
          <p class="font-suez text-3xl text-primary">Trust<span class="text-yellow">Housing</span></p>
          <p class="text-base">we bring back trust in  the student housing market</p>
        </figcaption>
      </figure>
    </NuxtLink>
    <ul class="flex text-xl"> 
      <li class="pr-6"><NuxtLink class="hover:font-bold" to="/">Inform yourself</NuxtLink></li>
      <li class="pr-6"><NuxtLink class="hover:font-bold" :class="{ 'font-bold' : isChecking }" to="/start-checking/1">Start Checking</NuxtLink></li>
      <li class="pr-6"><NuxtLink class="hover:font-bold" to="/">Close the Deal</NuxtLink></li>
      <li><NuxtLink class="hover:font-bold" to="/">Why TrustMark?</NuxtLink></li>
    </ul>
  </header>
</template>

<script>
export default {
  computed: {
    isChecking() {
      return this.$route.params.id;
    },
  },
};
</script>

<style>
</style>
