<template>
  <n-auto-complete
    v-model:query="query"
    :options="options"
    placeholder="Search"
  ></n-auto-complete>
  <n-grid x-gap="12" :cols="3">
    <n-gi v-for="album in albums" :key="album.id">
      <n-card
        :title="album.title"
        @click="$router.push(`/${album.id}`)"
        hoverable="true"
      >
        <template #cover>
          <img :src="album.cover" />
        </template>
        {{ album.artist }}
      </n-card>
    </n-gi>
  </n-grid>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

interface Album {
  id: number;
  title: string;
  artist: string;
  releasedate: Date;
  cover: string;
}

export default defineComponent({
  name: 'Home',
  data(): {
    albums: Array<Album>;
    query: string;
  } {
    return {
      albums: [],
      query: '',
    };
  },
  computed: {
    options() {
      let titleArray: Array<string> = [];
      for (let i in this.albums) {
        let cleanAlbumTitle = this.albums[i].title.toLowerCase();
        let cleanQuery = this.query.toLowerCase().trim();
        if (cleanAlbumTitle.startsWith(cleanQuery)) {
          titleArray.push(this.albums[i].title);
        }
      }
      return titleArray;
    },
  },
  methods: {
    async getAlbums(): Promise<Album[]> {
      const res = await axios.get('http://localhost:5000/albums/');
      return res.data;
    },
  },
  async mounted() {
    try {
      this.albums = await this.getAlbums();
    } catch (error) {
      console.error(error);
      return;
    }
  },
});
</script>

<style lang="scss" scoped>
.n-card {
  cursor: pointer;
}
</style>
