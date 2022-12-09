import i18next from "i18next";

import global_es from "../translations/es/global.json";
import global_en from "../translations/en/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

export default i18next;
