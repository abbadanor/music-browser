import { createApp } from 'vue';
import {
  create,
  NButton,
  NH1,
  NH2,
  NH3,
  NH4,
  NH5,
  NH6,
  NLayout,
  NLayoutHeader,
  NLayoutSider,
  NLayoutFooter,
  NP,
  NA,
  NGrid,
  NGridItem,
  NCard,
  NAutoComplete,
  NDivider,
  NImage,
  NSpace,
  NInputGroup,
  NInputNumber,
  NIcon,
  NPopover,
} from 'naive-ui';
import Provider from './components/Provider.vue';
import router from './router';
import store from './store';
import 'vfonts/FiraCode.css';

const naiveUI = create({
  components: [
    NButton,
    NH1,
    NH2,
    NH3,
    NH4,
    NH5,
    NH6,
    NLayout,
    NLayoutHeader,
    NLayoutSider,
    NLayoutFooter,
    NP,
    NA,
    NGrid,
    NGridItem,
    NCard,
    NAutoComplete,
    NDivider,
    NImage,
    NSpace,
    NInputGroup,
    NInputNumber,
    NIcon,
    NPopover,
  ],
});

createApp(Provider).use(store).use(router).use(naiveUI).mount('#app');
