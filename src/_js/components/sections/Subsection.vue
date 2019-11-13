<template>
  <div class="subsection-wrapper">
    <transition name="fade">
    <div class="subcategory-content subsection" v-show="show" >
      <h2 class="subcategory-full-title">
        <slot name="title" ></slot>
      </h2>
      <p class="subtitle">
        <slot name="subtitle"></slot>
      </p>
      <div class="subcontent">
        <slot name="content"></slot>
      </div>
    </div>
    </transition>
    <div class="bottom">
  </div>
  </div>
  
</template>

<style>
  .bottom{
    min-height: 100px;
  }
  .subsection-wrapper {
    min-height: 100vh;
    height: 100vh;
  }
  .subcategory-content{
    position: sticky;
    position: -webkit-sticky;
    top:0;
  }
</style>

<script>
import { TweenLite } from 'gsap/TweenMax';
import sectionMixin from '../../mixins/sectionMixin';

export default {
  name: 'subsection',
  mounted() {
    this.$root.$on('subsection-change', this.changeCurrent);
    // eslint-disable-next-line func-names
    this.scene.on('start', () => {
      this.changeBackgroundColor(this.color);
      this.changeTextColor(this.color);
      this.show = true;
    });
    this.$scrollmagic.updateScene(this.scene);
    // this.timeline = new TimeineLite();
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
        this.show = true;
        TweenLite.to(this.$el, 0.5, {
          opacity: 1,
          onComplete() {
            this.isCurrent = true;
          },
        });
      } else this.isCurrent = false;
    },
  },
};
</script>
