<template>
  <div class="home">
    <LanguagePicker/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import LanguagePicker from "@/components/LanguagePicker.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    LanguagePicker
  }
};
</script>
