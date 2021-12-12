import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import installElementPlus from './plugins/element'

const app = createApp(App);
app.use(ElementPlus);
app.mount("#app");
app.use(store);
app.use(router);
