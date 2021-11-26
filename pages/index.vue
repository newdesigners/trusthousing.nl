<template>
  <div class="step-card">
    <form>
      <input text="text" name="description" />
    </form>
    <div class="step-footer">
      <div class="current-steps">1 / 4</div>
      <button type="button" class="btn-next">Next</button>
    </div>
    <pre>{{ this.$store.state.listings.listing }}</pre>
  </div>
</template>

<script>
export default {
  data() {

  },
  methods: {

  },
};
</script>

<style>
</style>
