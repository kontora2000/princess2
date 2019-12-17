 
<template>
  <li class="category-nav-row">
      <a class="category-nav-link" :class="{active:isCurrent}" :href="href">
        <slot></slot>
      </a>
  </li>
</template>

<script>
export default {
  data() {
    return {
      isCurrent: false,
    };
  },
  props: {
    href: String,
    position: Number,
  },
  mounted() {
    this.$root.$on('subsection-change', this.changeCurrent);
    if (this.position === 1) {
      this.isCurrent = true;
    }
  },
  methods: {
    changeCurrent(current) {
      this.isCurrent = (current === this.position);
    },
  },
};
</script>
