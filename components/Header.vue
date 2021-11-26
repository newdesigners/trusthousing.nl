<template>
  <header class="container flex justify-between items-center py-5">
    <NuxtLink to="/">
      <figure class="flex">
        <div class="pr-7">
          Logo here
        </div>
        <figcaption>  
          <p class="font-bold font-suez text-3xl">TrustHousing</p>
          <p class="text-base">we bring back trust in the student housing market</p>
        </figcaption>
      </figure>
    </NuxtLink>
    <ul class="flex text-xl">
      <li class="pr-6"><NuxtLink to="/start-checking/1">Start Checking</NuxtLink></li>
      <li class="pr-6"><NuxtLink to="/">Close the Deal</NuxtLink></li>
      <li><NuxtLink to="/">Why TrustMark?</NuxtLink></li>
    </ul>
  </header>
</template>

<script>
export default {
};
</script>

<style>
</style>
