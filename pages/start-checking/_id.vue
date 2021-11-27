<template>
<div class="relative">
  <StepIndicator v-if="step !== 'results'" class="absolute left-1/2 top-0 transform -translate-y-1/2 -translate-x-1/2" />
  <div v-if="step !== 'results'" class="bg-gray py-20">
    <div class="container w-3/4">
      <StepOne v-if="step ==='1'" />
      <StepTwo v-if="step === '2'" />
      <StepThree v-if="step === '3'" />
    </div>
  </div>
  <div v-else class="bg-white py-20">
    <Results />
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
