<template>
  <n-space class="details" v-if="album" justify="space-between">
    <div>
      <n-h1>
        {{ album.title }}
      </n-h1>
      <n-h3>{{ album.artist }}</n-h3>
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
      const res = await axios.get(
        'http://localhost:5000/albums/' + this.$route.params.id
      );
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
</style>
