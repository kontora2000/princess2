<template>
  <section class="category-block">
    <div class="subcategory-wrapper">
    <slot></slot>
    </div>
  </section>
</template>
<style scoped>
  .category-block{
    min-height: 300vh;
    height: 300vh;
  }
</style>

<script>
import sectionMixin from '../../mixins/sectionMixin';

export default {
  name: 'supersection',
  data() {
    return {
      subsectionCount: 0,
      currentSubsection: 0,
    };
  },
  mixins: [sectionMixin],
  mounted() {
    this.$scrollmagic.removeScene(this.scene);
    this.subsectionCount = this.$el.querySelectorAll('.subsection').length;
    if (this.subsectionCount !== 0) {
      this.$el.style.minHeight = `${this.sections * 100}vh`;
    }
  },
};
</script>
