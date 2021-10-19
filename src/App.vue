<template>
  <n-layout style="height: 100vh">
    <n-layout-header style="height: 64px; padding: 17px" bordered>
      <n-h3>Music Viewer</n-h3>
    </n-layout-header>
    <n-layout position="absolute" style="top: 64px; bottom: 64px" has-sider>
      <n-layout-sider
        content-style="padding: 24px;"
        :native-scrollbar="false"
        bordered
      >
        <!-- Sidebar -->
        <router-link to="/" #="{ navigate, href }" custom>
          <n-a :href="href" @click="navigate">Back Home</n-a>
        </router-link>
        <n-h2>Handian Bridge</n-h2>
        <n-h2>Handian Bridge</n-h2>
        <n-h2>Handian Bridge</n-h2>
        <n-h2>Handian Bridge</n-h2>
        <n-h2>Handian Bridge</n-h2>
        <n-h2>Handian Bridge</n-h2>
        <n-h2>Handian Bridge</n-h2>
        <n-h2>Handian Bridge</n-h2>
        <n-h2>Handian Bridge</n-h2>
        <n-h2>Handian Bridge</n-h2>
        <n-h2>Handian Bridge</n-h2>
      </n-layout-sider>
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
      城府路
    </n-layout-footer>
  </n-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
});
</script>

<style lang="scss">
.n-card {
  max-width: 300px;
}
.n-h2 {
  cursor: pointer;
  &:hover {
    color: #0f0;
  }
}
</style>
