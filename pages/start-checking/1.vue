<template>
<div class="step-card">
    <form>
        <h1>Listing description</h1>
        <p>The listing description might include obvious red flags that point on the scam. We will check the text for these red flags.</p>
        <textarea class="border" required v-model="description"></textarea>
    </form>
    <div class="step-footer">
        <div class="current-steps">1 / 4</div>
        <!-- <button type="button" class="btn-next" @click="save">Next</button> -->
        <NuxtLink class="underline btn-next" to="/start-checking/2" @click.native="save">Next</Nuxtlink>
    </div>
    <pre>description: {{ description }}</pre>
    <pre>store: {{ this.$store.state.listings.listing }}</pre>
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
            this.$store.commit('listings/setDescription', this.description);
        },
    },
};
</script>

<style>
</style>
