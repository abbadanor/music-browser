<template>
  <n-space class="search-bar" justify="space-between" :wrap="false"> 
<n-auto-complete
    v-model:value="query"
    :options="options"
    placeholder="Search"
    :on-select="(value) => onSelect(value)"
  ></n-auto-complete>
  <n-button @click="advancedSearch = !advancedSearch">Advanced Search</n-button>
  </n-space>
  <div v-if="advancedSearch"> 
  <n-divider></n-divider>
  <n-space :wrap="false">
    <n-h6>Select year range: </n-h6>
    <n-input-number v-model:value="minYear" :validator="x => x > 0 && x < 2022" placeholder="1969" :show-button="false"></n-input-number>  
    <n-input-number v-model:value="maxYear" :validator="x => x > 0 && x < 2022" placeholder="1992" :show-button="false"></n-input-number>  
    <n-h6 v-if="minYear && maxYear && minYear > maxYear" style="color: #d03050">The first year must be smaller than the last!</n-h6>
    <n-button @click="filterByYears(minYear, maxYear)" :disabled="!(minYear && maxYear && minYear <= maxYear && minYear > 0 && maxYear > 0 && minYear < 2022 && maxYear < 2022)">Filter</n-button>
  </n-space>
  </div>
  <n-divider></n-divider>
  <n-grid
    x-gap="16"
    y-gap="16"
    cols="1 s:2 m:3 l:4 xl:5 2xl:7"
    responsive="screen"
  >
    <n-gi v-for="album in albums" :key="album.id">
      <n-card
        :title="album.title"
        @click="$router.push(`/${album.id}`)"
        :hoverable="true"
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
  cover: string;
  year: number;
}

export default defineComponent({
  name: 'Home',
  data(): {
    originalAlbums: Array<Album>;
    albums: Array<Album>;
    query: string;
    advancedSearch: boolean;
    minYear: number | null;
    maxYear: number | null;
  } {
    return {
      originalAlbums: [],
      albums: [],
      query: '',
      advancedSearch: false,
      minYear: null,
      maxYear: null,
    };
  },
  computed: {
    options() {
      let titleArray: Array<string> = [];
      for (let i in this.albums) {
        let cleanAlbumTitle = this.albums[i].title.toLowerCase();
        let cleanQuery = this.query.toLowerCase().trim();
        let cleanArtist = this.albums[i].artist.toLowerCase();
        if (
          cleanAlbumTitle.includes(cleanQuery) ||
          cleanArtist.includes(cleanQuery)
        ) {
          titleArray.push(this.albums[i].title);
        }
      }
      return titleArray;
    },
  },
  methods: {
    async getAlbums(): Promise<Album[]> {
      const res = await axios.get('http://localhost:5000/simple/');
      return res.data;
    },
    onSelect(value: string) {
      const selected = this.albums.find((album) => album.title === value);
      if (selected) this.$router.push('/' + selected.id);
    },
    filterByYears(min: number, max: number) {
      let filteredAlbums = []
      for(let i in this.originalAlbums) {
        if(this.originalAlbums[i].year >= min && this.originalAlbums[i].year <= max) {
          filteredAlbums.push(this.originalAlbums[i])
        }
      }
      this.albums = filteredAlbums
  }
  },
  async mounted() {
    try {
      this.originalAlbums = await this.getAlbums();
      this.albums = this.originalAlbums
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
  height: 100%;
}

.search-bar > :first-child {
  width: 100%;
}
</style>
