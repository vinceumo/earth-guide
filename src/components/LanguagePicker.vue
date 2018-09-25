<template>
  <select id="searchLanguage" name="language">
    <option 
      v-for="(item, index) in languages"
      v-bind:key="'language-key' + index"
      lang="item.iso">{{ item.name }}</option>
  </select>
</template>

<script>
export default {
  name: "LanguagePicker",
  data: () => {
    return {
      languages: [
        { iso: "bn", name: "বাংলা" },
        { iso: "de", name: "Deutsch" },
        { iso: "el", name: "Ελληνικά" },
        { iso: "en", name: "English" },
        { iso: "es", name: "Español" },
        { iso: "fa", name: "فارسی" },
        { iso: "fr", name: "Français" },
        { iso: "it", name: "Italiano" },
        { iso: "he", name: "עברית" },
        { iso: "nl", name: "Nederlands" },
        { iso: "ps", name: "پښتو" },
        { iso: "pl", name: "Polski" },
        { iso: "pt", name: "Português" },
        { iso: "ro", name: "Română" },
        { iso: "ru", name: "Русский" },
        { iso: "fi", name: "Suomi" },
        { iso: "sv", name: "Svenska" },
        { iso: "uk", name: "Українська" },
        { iso: "vi", name: "Tiếng Việt" },
        { iso: "zh", name: "中文" }
      ]
    };
  }
};
</script>
