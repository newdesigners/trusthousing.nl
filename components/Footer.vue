<template>
  <footer class="py-9" :class="{ 'bg-primary-light' : !isForm }"> 
    <div class="container flex items-center">
      <figure class="mr-16">
        <div class="pr-7">
          <Logo class="w-20" />
        </div>
      </figure>
      <div class="flex-1">
        <ul class="flex">
          <li class="pr-6"><NuxtLink to="/">Terms &amp; conditions</NuxtLink></li>
          <li class="pr-6"><NuxtLink to="/">Privacy &amp; Cookies</NuxtLink></li>
        </ul>
      </div>
      <aside>
        <figure class="w-32">
          <img class="w-full h-auto object-contain" src="~/assets/images/logo-government.png" alt="Logo of government of safety and justice"/>
        </figure>
      </aside>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    isForm() {
      return this.$route.params.id && this.$route.params.id !== 'results';
    },
  },
};
</script>