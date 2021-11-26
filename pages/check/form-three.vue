<template>
<div class="step-card">
    <form>
        <h1>Price and size</h1>
        <p>The listing description might include obvious red flags that point on the scam. We will check the text for these red flags.</p>
        <p>House type</p>
        <div
            class="w-20 h-20 inline-flex rounded bg-gray items-center justify-center"
            @click="selectType('x')"
        >x</div>
        <div 
            class="w-20 h-20 inline-flex rounded bg-gray flex items-center justify-center"
            @click="selectType('y')"
        >y</div>
        <div 
            class="w-20 h-20 inline-flex rounded bg-gray flex items-center justify-center"
            @click="selectType('z')"
        >z</div>
        <div>
            <label class="block" for="rent-price">Rent price</label>
            <input class="border" v-model="price" required id="rent-price" type="number" /><span>&euro;</span>
        </div>
        <div>
            <label class="block" for="housing-size">Housing size</label>
            <input class="border" v-model="size" required id="housing-size" type="number" /><span>m<sup>2</sup></span>
        </div>
        <div>
            <p>Utilities included?</p>
  
                <input 
                    id="utilities-yes"
                    v-model="utilities"
                    name="utilities"
                    type="radio"
                    v-bind:value="'Yes'"
                    checked="checked"
                />
                <label for="utilities-yes">
                <span>Yes</span>
            </label>
            <label for="utilities-no">
                <input
                    id="utilities-no"
                    v-model="utilities"
                    name="utilities"
                    type="radio"
                    v-bind:value="'No'"
                />
                <span>No</span>
            </label>
        </div>
    </form>
    <div class="step-footer">
        <div class="current-steps">3 / 4</div>
        <!-- <button type="button" class="btn-next" @click="save">Next</button> -->
        <NuxtLink class="btn-next" to="/check/results" @click.native="save">Next</Nuxtlink>
    </div>
    <pre>selected: {{ type }}</pre>
    <pre>property: price: {{ price }} / size: {{ size }} / utilities: {{ utilities }}</pre>
    <pre>store: {{ this.$store.state.listings.listing }}</pre>
</div>
</template>

<script>
export default {
    data() {
        return {
            size: '',
            price: '',
            type: '',
            utilities: '',
        }
    },
    mounted() {
        this.size = this.$store.state.listings.listing.property.size;
        this.price = this.$store.state.listings.listing.property.price;
        this.type = this.$store.state.listings.listing.property.type;
        this.utilities = this.$store.state.listings.listing.property.utilities;
    },
    methods: {
        selectType(type) {
            this.type = type;
        },
        save() {
            let property = { price: this.price, size: this.size, type:this.type, utilities: this.utilities };
            this.$store.commit('listings/setProperty', property);
        },
    },
};
</script>

<style>
</style>
