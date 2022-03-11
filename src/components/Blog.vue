<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <img class="img-fluid" :src="blogs.imgUrl" />
        <p></p>
        <h1>{{ blogs.title }}</h1>
      </div>
      <div class="col-md-12">
        {{ blogs.body }}
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    blogs: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
</style>