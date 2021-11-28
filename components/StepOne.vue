<template>
  <div class="w-2/3">
		<form>
			<h1 class="pb-1">Paste the description from the housing offer</h1>
			<p class="pb-7">We will check the description for red flags that point to scamming</p>
			<textarea class="border border-gray w-full p-7 h-64 rounded-2xl mb-8 text-primary" required v-model="description" placeholder="Paste the description of the offer that you found"></textarea>
		</form>
		<div class="flex justify-end">
			<NuxtLink class="rounded-full py-3.5 px-11 bg-blue text-white hover:bg-primary" to="/start-checking/2" @click.native="save">Go to step 2</Nuxtlink>
		</div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			description: '',
		};
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
