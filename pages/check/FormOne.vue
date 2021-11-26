<template>
<div class="step-card">
    <form>
        <h1>Listing description</h1>
        <p>The listing description might include obvious red flags that point on the scam. We will check the text for these red flags.</p>
        <textarea required v-model="description"></textarea>
    </form>
    <div class="step-footer">
        <div class="current-steps">1 / 4</div>
        <button type="button" class="btn-next" @click="save">Next</button>
    </div>
    <pre>description: {{ description }}</pre>
    <pre>store description: {{ this.$store.state.listings.listing.description }}</pre>
</div>
</template>

<script>
export default {
    data() {
        return {
            description: '',
        }
    },
    mounted() {
        this.description = this.$store.state.listings.listing.description;
    },
    methods: {
        save() {
            console.log(this.description);
            this.$store.commit('listings/setDescription', this.description);
        },
    },
};
</script>

<style>
</style>
