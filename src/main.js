import { createApp } from "vue";
import store from "./store"; // import store from new directory
import App from "./App.vue";
import "./styles/global.scss";

const app = createApp(App);

app.use(store);

app.mount("#app");
