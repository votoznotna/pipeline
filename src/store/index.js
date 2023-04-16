import { createStore } from "vuex";
import * as maps from "@/store/modules/maps.js";

// Create a new store instance.
const store = createStore({
  modules: {
    maps,
  },
});

export default store;
