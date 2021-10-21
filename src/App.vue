<template>
  <n-layout style="height: 100vh">
    <n-layout-header style="height: 64px; padding: 17px" bordered>
      <n-h3 @click="$router.push('/')">Music Viewer</n-h3>
    </n-layout-header>
    <n-layout position="absolute" style="top: 64px; bottom: 64px" has-sider>
      <!-- Main content -->
      <n-layout content-style="padding: 24px;" :native-scrollbar="false">
        <router-view></router-view>
      </n-layout>
    </n-layout>
    <!-- Footer -->
    <n-layout-footer
      position="absolute"
      style="height: 64px; padding: 24px"
      bordered
    >
      hej
    </n-layout-footer>
  </n-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
});
</script>

<style scoped lang="scss">
.n-h3 {
  cursor: pointer;
}
</style>
