<template>
  <ul class="category-nav">
    <slot></slot>
  </ul>
</template>

<style>
  .category-nav {
    opacity: 0;
  }
</style>
<script>
export default {
  name: 'supersection-nav',
};
</script>
