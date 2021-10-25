<template>
  <n-config-provider :theme="this.$store.state.darkTheme ? darkTheme : ''" :themeOverrides="themeOverrides">
    <n-notification-provider>
      <App />
    </n-notification-provider>
    <n-global-style></n-global-style>
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NConfigProvider, NGlobalStyle, NNotificationProvider, darkTheme } from 'naive-ui';
import App from '../App.vue';

export default defineComponent({
  name: 'Provider',
  components: {
    App,
    NConfigProvider,
    NGlobalStyle,
    NNotificationProvider
  },

  setup() {
    return {
      darkTheme,
      themeOverrides: {
        common: {
          primaryColor: '#C3073F',
          primaryColorHover: '#950740',
          primaryColorPressed: '6F2232',
          primaryColorSuppl: '950740',
        },
        Select: {
          peers: {
            InternalSelection: {
              textColor: '#C3073F',
            },
          },
        },
        // ...
      },
    };
  },
});
</script>
