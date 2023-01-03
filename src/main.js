import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./store/index.js"; // /index.js 는 생략가능 /상동
import loadImage from "./plugins/loadImage";
import ScriptX from "vue-scriptx";
import Ads from "vue-google-adsense";

createApp(App).use(router).use(store).use(loadImage).use(ScriptX).use(Ads.Adsense, { adClient: "ca-pub-1867765696792772", isNewAdsCode: true }).use(Ads.InArticleAdsense).use(Ads.InFeedAdsense).mount("#app");
