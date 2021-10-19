<template>
  <n-config-provider :theme="darkTheme">
    <App />
    <n-global-style></n-global-style>
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NConfigProvider, NGlobalStyle, darkTheme } from 'naive-ui';
import App from '../App.vue';

export default defineComponent({
  name: 'Provider',
  components: {
    App,
    NConfigProvider,
    NGlobalStyle,
  },
  setup() {
    return {
      darkTheme,
    };
  },
});
</script>
