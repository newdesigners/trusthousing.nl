<template>
<div class="relative">
  <div v-if="step !== 'results'" class="bg-primary-light pt-2.5 pb-20">
    <div class="container w-3/4">
      <StepIndicator v-if="step !== 'results'" class=" mx-auto pb-20" />
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
