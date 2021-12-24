import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: localStorage.getItem("locale") || "en",
  messages: {
    tr: require("./lang/tr"),
    en: require("./lang/en"),
  },
});

export default i18n;
