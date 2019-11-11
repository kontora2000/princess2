<template>
  <section class="top-section" id="top-scene"><slot></slot></section>
</template>

<script>
import { TweenLite, Power2 } from 'gsap/TweenMax';
import sectionMixin from '../../mixins/sectionMixin';


export default {
  name: 'mainsection',
  mixins: [sectionMixin],
  data() {
    return {
      scene: null,
      timeLine: null,
      menu: null,
    };
  },
  mounted() {
    this.menu = this.$el.querySelector('.we-create');
    // this.timeLine = new TimelineLite();
    const tween = TweenLite.to(this.menu, 0.4, { y: -200, ease: Power2.easeOut, });
    // this.timeLine.add(TweenLite.to(this.menu, 0.5, {top:"-60%", ease:  Linear.easeNone}));
    this.scene.setTween(tween)
      .setPin(this.menu)
      .addIndicators('menuanim')
      .on('start', () => {
        // TweenLite.to(this.menu, 0.8, {y:-400})
      });
    this.$scrollmagic.updateScene(this.scene);
  },
};
</script>
