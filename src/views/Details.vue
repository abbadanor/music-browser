<template>
  <n-space class="details" v-if="album" justify="space-between">
    <div>
      <n-h1>
        {{ album.title }}
      </n-h1>
      <n-divider></n-divider>
      <n-space>
        <n-popover trigger="hover">
          <template #trigger>
            <n-h2 class="artist-name" @click="$router.push({ path: '/', query: { q: album.artist } })">{{ album.artist }}</n-h2>
          </template>
          <span>Click to search artist</span>
        </n-popover>
        <n-h2> - {{ album.year }}</n-h2>
      </n-space>
      <n-text>{{ album.summary }}</n-text>
    </div>
    <n-image :src="album.cover"></n-image>
  </n-space>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

interface Album {
  id: number;
  title: string;
  artist: string;
  year: number;
  cover: string;
  summary: string;
}

export default defineComponent({
  name: 'Detail View',
  data(): {
    album: Album | null;
  } {
    return {
      album: null,
    };
  },
  async mounted() {
    try {
      const res = await axios.get('http://localhost:5000/albums/' + this.$route.params.id);
      console.log(res);
      this.album = res.data[0];
    } catch (error) {
      console.error(error);
    }
  },
});
</script>

<style lang="scss" scoped>
.details {
  max-width: 750px;
}

.artist-name {
  cursor: pointer;
  width: fit-content;
}

.n-image {
  border-radius: 3px;
}
</style>
