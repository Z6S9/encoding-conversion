import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./router";
import "animate.css";
import Textarea from "./components/Textarea.vue";
import ClearButton from "./components/ClearButton.vue";

const app = createApp(App);

app.use(ElementPlus);

app.use(router).mount("#app");

app.component("Textarea", Textarea);
app.component("ClearButton", ClearButton);
