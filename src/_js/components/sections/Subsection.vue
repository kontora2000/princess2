<template>
  <div ref="wrapper" class="subcontent-wrapper" style="opacity:0" >
    <div ref="sub" class="subcategory-content subsection">
      <h2 class="subcategory-full-title">
        <slot name="title" ></slot>
      </h2>
      <div class="subcontent">
        <span class="subtitle">
          <slot name="subtitle"></slot>
        </span>
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<style>
  .subsection {
    position: absolute;
    height: 100vh;
    min-height: 100vh;
  }
  .fade-enter-active, .fade-leave-active {
  transition: opacity .8s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

<script>
import { TweenLite } from 'gsap/TweenMax';
import sectionMixin from '../../mixins/sectionMixin';

export default {
  name: 'subsection',
  mounted() {
    this.$root.$on('subsection-change', this.changeCurrent);
    this.scene.on('enter', () => {
      this.$root.$emit('subsection-change', this.position);
    })
      .on('leave', (event) => {
        if (!(event.progress === 0 && this.position === 1)) {
          this.show = false;
        }
      });
    const h = window.screen.height * 2;
    const off = this.$el.closest('.category-block').offsetTop;
    this.scene.offset(off + (this.position - 1) * h);
    this.scene.duration(h);
    this.scene.triggerElement(null);
    this.$scrollmagic.updateScene(this.scene);
    if (this.position === 1) { 
      this.show = true; 
      this.$el.style.opacity = '0';
    }
  },
  mixins: [sectionMixin],
  data() {
    return {
      isCurrent: false,
      show: false,
    };
  },
  props: {
    position: Number,
  },
  methods: {
    changeCurrent(current) {
      if (current === this.position && this.isCurrent === false) {
        this.changeBackgroundColor();
        this.changeTextColor();
        this.isCurrent = true;
        this.$el.style.opacity = '1';
        TweenLite.to(this.$refs.wrapper, 0.4, { opacity: '1', });
        this.show = true;
        if (this.position > 1) {
          TweenLite.to(document.querySelector('.scene-kitchen-counter'), 0.4, { opacity: 0, });
          document.querySelector('.scene-kitchen-counter').style.display = 'none';
        } else {
          document.querySelector('.scene-kitchen-counter').style.display = 'block';
          TweenLite.to(document.querySelector('.scene-kitchen-counter'), 0.4, { opacity: 1, });
        }
      } else {
        this.$refs.wrapper.style.opacity = '0.0';
        this.isCurrent = false;
      }
    },
  },
};
</script>
