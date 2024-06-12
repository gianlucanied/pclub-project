<template>
  <div>
    <button
      @click="changeLanguage('en')"
      :class="{ active: $i18n.locale === 'en' }"
    >
      <img
        src="/public/Flag_of_the_United_Kingdom_(3-5).svg.png"
        alt="UK Flag"
      />
    </button>
    <button
      @click="changeLanguage('it')"
      :class="{ active: $i18n.locale === 'it' }"
    >
      <img src="/public/Flag_of_Italy.svg.webp" alt="Italy Flag" />
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem("language", lang);
    },
  },
  created() {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      this.$i18n.locale = savedLanguage;
    }
  },
};
</script>

<style scoped>
button {
  margin-right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

div {
  text-align: right;
}

img {
  width: 20px;
  vertical-align: middle;
}
</style>
