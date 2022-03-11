
<template>
  <div class="container-fluid">
    <div class="row">
      <div v-for="b in blogs" :key="b.id" class="col-md-2">
        <h3 class="selectable" @click="getActiveBlog(b.id)">
          {{ b.title }}
        </h3>
      </div>
      <div class="col-md-8">
        <Blog v-if="activeBlog.title" :blogs="activeBlog" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { blogsService } from "../services/BlogsService";
import { AppState } from "../AppState";
import Blog from "../components/Blog.vue";

export default {
  components: { Blog },
  name: "blogs",
  setup() {
    onMounted(async () => {
      try {
        await blogsService.getAll();
      } catch (error) {
        Pop.toast(error.message);
        logger.log(error.message, "error");
        return;
      }
    });
    return {
      blogs: computed(() => AppState.blogs),
      activeBlog: computed(() => AppState.activeBlog),

      async getActiveBlog(id) {
        try {
          await blogsService.getActiveBlog(id);
        } catch (error) {
          logger.error(error);
          Pop.toast(error.message, "error");
        }
      },
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
