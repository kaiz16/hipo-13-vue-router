<template>
  <div class="blogs">
    <div class="blog" v-for="blog in blogs" v-bind:key="blog.id">
        <!-- named routing -->
      <router-link
        v-bind:to="'/blog/' + blog.id"
        >{{ blog.name }}</router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blogs: [
        {
          name: "Title of the blog 1",
          id: 1,
        },
        {
          name: "Title of the blog 2",
          id: 2,
        },
        {
          name: "Title of the blog 3",
          id: 3,
        },
      ],
    };
  }
};
</script>
