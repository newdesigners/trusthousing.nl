export const state = () => ({
  listing: {
    platform: '',
    images: [],
    description: '',
    city: '',
    property: {
      price: '',
      size: '',
      type: '',
      utilities: false,
    }
  }
});
 
export const mutations = {
  setPlateform(state, entries) {
    state.listing.platform = entries;
  },
  setImages(state, entries) {
    state.listing.images = entries;
  },
  setDescription(state, entries) {
    state.listing.description = entries;
  },
  setType(state, entries) {
    state.listing.type = entries;
  },
  setCity(state, entries) {
    state.listing.city = entries;
  },
  setProperty(state, entries) {
    state.listing.property = entries;
  }
}