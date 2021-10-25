<template>
  <n-h1>Add new album</n-h1>
  <n-divider></n-divider>
  <n-space class="forms" vertical>
    <n-input placeholder="Title" v-model:value="title" maxlength="100" show-count clearable />
    <n-input placeholder="Artist" v-model:value="artist" maxlength="50" show-count />
    <n-space class="url-bar" :wrap="false">
      <n-input placeholder="Album cover URL" v-model:value="coverURL" />
      <n-popover trigger="hover">
        <template #trigger>
          <n-switch size="large" v-model:value="forceImage" />
        </template>
        <span>Disable validity check</span>
      </n-popover>
      <n-button :disabled="forceImage" @click="imageExists(coverURL)">Check Validity</n-button>
    </n-space>
    <n-input-number placeholder="Year" v-model:value="year" :validator="(x) => x > 0 && x < 2022"></n-input-number>
    <n-input placeholder="Summary" v-model:value="summary" type="textarea" show-count />
    <n-button @click="post">Post</n-button>
  </n-space>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useNotification } from 'naive-ui';
import axios from 'axios';

export default defineComponent({
  name: 'Detail View',
  data(): {
    title: string;
    artist: string;
    coverURL: string;
    year: number | null;
    summary: string;
    forceImage: boolean;
  } {
    return {
      title: '',
      artist: '',
      coverURL: '',
      year: null,
      summary: '',
      forceImage: false,
    };
  },
  methods: {
    imageExists(image_url: string) {
      let image = new Image();
      image.src = image_url;
      image.onload = () => {
        this.notifySuccess('Image URL is valid');
      };
      image.onerror = () => {
        this.notifyError('Image URL is not valid');
      };
    },
    post() {
      if (this.forceImage) {
        if (this.title.length > 2 && this.artist.length > 2) {
            if (this.year && this.year > 0 && this.year < 2022) {
              const body = {
                title: this.title,
                artist: this.artist,
                year: this.year,
                cover: this.coverURL,
                summary: this.summary,
              };
              axios
                .post('http://localhost:5000/albums', body)
                .then((res) => {
                  this.notifySuccess('Album successfully added!');
                  console.log(res);
                })
                .catch((error) => {
                  this.notifyError('Post request failed');
                  console.error(error);
                });
            }
          }
      } else {
        let image = new Image();
        image.src = this.coverURL;
        image.onload = () => {
          if (this.title.length > 2 && this.artist.length > 2) {
            if (this.year && this.year > 0 && this.year < 2022) {
              const body = {
                title: this.title,
                artist: this.artist,
                year: this.year,
                cover: this.coverURL,
                summary: this.summary,
              };
              axios
                .post('http://localhost:5000/albums', body)
                .then((res) => {
                  this.notifySuccess('Album successfully added!');
                  console.log(res);
                })
                .catch((error) => {
                  this.notifyError('Post request failed');
                  console.error(error);
                });
            }
          }
        };
        image.onerror = () => {
          this.notifyError('Post Failed. Image URL is not valid');
        };
      }
    },
  },
  setup() {
    const notification = useNotification();
    return {
      notifyError(msg: string) {
        notification.error({
          content: 'Error!',
          meta: msg,
        });
      },
      notifySuccess(msg: string) {
        notification.success({
          content: 'Success!',
          meta: msg,
        });
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.forms {
  max-width: 750px;
}

.url-bar > :first-child {
  width: 100%;
}
</style>
