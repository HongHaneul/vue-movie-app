import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./store/index.js"; // /index.js 는 생략가능 /상동
import loadImage from "./plugins/loadImage";

createApp(App).use(router).use(store).use(loadImage).mount("#app");
