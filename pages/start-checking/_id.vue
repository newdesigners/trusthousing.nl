<template>
<div class="bg-gray py-20 relative">
  <StepIndicator class="absolute left-1/2 top-0 transform -translate-y-1/2 -translate-x-1/2" />
  <div class="container w-3/4">
    <StepOne v-if="step ==='1'" />
    <StepTwo v-if="step === '2'" />
    <StepThree v-if="step === '3'" />
    <Results v-if="step ===  'results'" />
  </div>
</div>
</template>

<script>
export default {
  computed: {
    step() {
      return this.$route.params.id;
    },
  },
};
</script>

<style>
</style>
