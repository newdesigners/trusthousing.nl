<template>
<div class="bg-gray py-20">
    <div class="container w-3/4">
        <StepOne v-if="step ==='1'" />
        <StepTwo v-if="step === '2'" />
        <StepThree v-if="step === '3'" />
        <Results v-if="step === 'results'" />
    </div>
</div>
</template>

<script>
export default {
  computed: {
    step() {
      return this.$route.params.id;
    }
  }
};
</script>

<style>
</style>
