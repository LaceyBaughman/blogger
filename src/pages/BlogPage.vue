

<template></template>

<script>
import { computed, onMounted } from "@vue/runtime-core";

import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { blogService } from "../services/BlogService";
import { AppState } from "../AppState";

export default {
  name: "blogs",
  setup() {
    onMounted(async () => {
      try {
        await blogService.getAll();
        logger.log("onmount working", res.data);
      } catch (error) {
        Pop.toast(error.message);
        logger.log(error);
        return;
      }
    });
    return {
      blogs: computed(() => AppState.blogs),
    };
  },
};
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
