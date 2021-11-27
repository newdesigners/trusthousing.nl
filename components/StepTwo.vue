<template>
  <div class="w-full">
        <h1 class="pb-1">Upload image of listing</h1>
        <p class="pb-7">We will check where the images appeared and see if there is suspicious activity with these pictures and check the location</p>
        <div class="w-2/3 mx-auto">
            <div
                class="px-40 py-14 mb-7 bg-white border border-gray-300 rounded-3xl"
                @dragover="dragover"
                @dragleave="dragleave"
                @drop="drop"
            >
                <input
                    type="file"
                    multiple
                    name="fields[assetsFieldHandle][]"
                    id="assetsFieldHandle" 
                    class="w-px h-px opacity-0 overflow-hidden absolute"
                    @change="onChange"
                    ref="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                />
                <label for="assetsFieldHandle" class="block cursor-pointer">
                    <div class="text-center font-suez">
                        <p class="text-center font-suez pb-12">Drop your image here</p>
                        <div class="inline-block rounded-md py-2 px-8 hover:cursor-pointer hover:gray-dark text-white bg-blue">or browse your files</div>
                    </div>
                </label>
                <ul class="mt-4" v-if="this.fileList.length" v-cloak>
                    <li class="text-sm p-1" v-for="(file, index) in fileList" :key="index">
                        {{ file.name }}
                        <button
                            class="ml-2"
                            type="button"
                            @click="remove(fileList.indexOf(file))"
                            title="Remove file"
                        >remove</button>
                    </li>
                </ul>
            </div>
            <div class="flex justify-end">
                <NuxtLink class="rounded-full py-3.5 px-11 bg-black text-white hover:bg-gray-dark" to="/start-checking/3" @click.native="save">Go to step 3</Nuxtlink>
            </div>
        </div>
        <!-- <pre>description: {{ description }}</pre>
        <pre>store: {{ this.$store.state.listings.listing }}</pre> -->
  </div>
</template>

<script>
export default {
    data() {
        return {
            fileList: [],
        }
    },
    mounted() {
        this.description = this.$store.state.listings.listing.description;
    },
    methods: {
    onChange() {
        this.fileList = [...this.$refs.file.files];
    },
    remove(i) {
        this.fileList.splice(i, 1);
    },
    dragover(event) {
        event.preventDefault();
        // Add some visual fluff to show the user can drop its files
        if (!event.currentTarget.classList.contains('bg-green-300')) {
            event.currentTarget.classList.remove('bg-gray-100');
            event.currentTarget.classList.add('bg-green-300');
        }
    },
    dragleave(event) {
        // Clean up
        event.currentTarget.classList.add('bg-gray-100');
        event.currentTarget.classList.remove('bg-green-300');
    },
    drop(event) {
        event.preventDefault();
        this.$refs.file.files = event.dataTransfer.files;
        this.onChange(); // Trigger the onChange event manually
        // Clean up
        event.currentTarget.classList.add('bg-gray-100');
        event.currentTarget.classList.remove('bg-green-300');
    },
    save() {
        this.$store.commit('listings/setImages', this.fileList);
    },
    }
};
</script>

<style>
</style>
