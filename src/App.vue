<template>
  <n-layout style="height: 100vh">
    <n-layout-header style="height: 64px; padding: 17px" bordered>
      <n-space justify="space-between">
        <n-h3 @click="$router.push('/')">Music Viewer </n-h3>
        <n-button @click="this.$store.commit('changeTheme')" circle>
          <template #icon>
            <n-icon>
              <sunny v-if="this.$store.state.darkTheme" />
              <moon v-else />
            </n-icon>
          </template>
        </n-button>
      </n-space>
    </n-layout-header>
    <n-layout position="absolute" style="top: 64px; bottom: 64px" has-sider>
      <!-- Main content -->
      <n-layout content-style="padding: 24px;" :native-scrollbar="false">
        <router-view></router-view>
      </n-layout>
    </n-layout>
    <!-- Footer -->
    <n-layout-footer position="absolute" style="height: 64px; padding: 24px" bordered> hej </n-layout-footer>
  </n-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Sunny, Moon } from '@vicons/ionicons5';

export default defineComponent({
  name: 'Home',
  components: {
    Sunny,
    Moon,
  },
});
</script>

<style scoped lang="scss">
.n-h3 {
  &:hover {
    color: #950740;
  }
  cursor: pointer;
}
</style>
