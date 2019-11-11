<template>
  <section class="category-block">
    <div class="subcategory-wrapper">
    <slot></slot>
    </div>
  </section>
</template>


<script>
import sectionMixin from '../../mixins/sectionMixin';

export default {
  name: 'supersection',
  data() {
    return {
      subsectionCount: 0,
    };
  },
  mixins: [sectionMixin],
  mounted() {
    this.subsectionCount = this.$el.querySelectorAll('.subsection').length;
    if (this.subsectionCount !== 0) {
      this.$el.style.minHeight = `${this.sections * 100}vh`;
    }
    if (this.subsectionCount !== 0 && this.subsectionCount !== undefined) {
      this.scene
        .on('start', () => {
          this.scene.duration(1.5 * this.$el.clientHeight);
          // if (this.$el.querySelector('.category-nav') !== undefined) {
          //   this.timeLine.to(this.$el.querySelector('.category-nav'), 0.5, { opacity: 1, })
          //     .to(this.$el.querySelector('.subcategory-full-title'), 0.5, { opacity: 1, })
          //     .to(this.$el.querySelector('.subtitle'), 0.5, { opacity: 1, })
          //     .to(this.$el.querySelector('.subcontent'), 0.5, { opacity: 1, });
          // }
        })
        // .on('end', (event) => {})
        .on('update', (event) => {
          const progress = event.currentTarget.progress();
          if (progress === 0.0) {
            this.$store.commit('changeSubsection', 0);
          }
          if (progress < 0.33 && event.currentTarget.progress() > 0.01) {
            this.$store.commit('changeSubsection', 1);
            this.$root.$emit('subsection-change', 1);
          }
          if (progress > 0.33 && event.currentTarget.progress() < 0.66) {
            this.$store.commit('changeSubsection', 2);
            this.$root.$emit('subsection-change', 2);
          }
          if (progress > 0.66) {
            this.$store.commit('changeSubsection', 3);
            this.$root.$emit('subsection-change', 3);
          }
          // if (event.currentTarget.progress()>0.99)
          // this.current=4;
        })
        .setPin(
          this.$el.querySelector('.subcategory-wrapper', {
            pushFollowers: false,
          })
        );
      this.$scrollmagic.updateScene(this.scene);
    }
  },
};
</script>
