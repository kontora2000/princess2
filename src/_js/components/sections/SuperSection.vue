<template>
  <section class="category-block">
    <div ref="wrapper" class="subcategory-wrapper">
    <slot></slot>
    </div>
    <div></div>
  </section>
</template>

<style scoped>
  .category-block {
    min-height: 600vh;
  }
  .subcategory-wrapper {
    position: sticky;
    top:0;
  }
</style>

<script>
import { TimelineLite } from 'gsap/TweenMax';
import sectionMixin from '../../mixins/sectionMixin';

export default {
  name: 'supersection',
  data() {
    return {
      subsectionCount: 0,
      currentSubsection: 0,
      isAnimated: false,
    };
  },
  mixins: [sectionMixin],
  mounted() {
    this.scene.on('enter', () => {
      if (this.isAnimated === false) {
        this.$el.querySelector('.subcontent-wrapper').style.opacity = '1';
        const menu = this.$el.querySelector('.category-nav');
        const title = this.$el.querySelector('.subcategory-full-title');      
        const subtitle = this.$el.querySelector('.subtitle');
        const content = this.$el.querySelector('.subcontent');
        const timeLine = new TimelineLite();
        timeLine.fromTo(menu, 0.2, { opacity: 0, }, { opacity: 1, });
        timeLine.fromTo(title, 0.2, { opacity: 0, }, { opacity: 1, });
        timeLine.fromTo(subtitle, 0.2, { opacity: 0, }, { opacity: 1, });
        timeLine.fromTo(content, 0.2, { opacity: 0, }, { opacity: 1, });
        this.isAnimated = true;
      }
      // this.$root.$emit('subsection-change',1)
    });
    this.subsectionCount = 3;
    if (this.subsectionCount !== 0) {
      this.$el.style.minHeight = `${this.sections * 100}vh`;
      this.$el.style.height = `${this.sections * 100}vh`;
    }
    this.$scrollmagic.updateScene(this.scene);
  },
};
</script>
