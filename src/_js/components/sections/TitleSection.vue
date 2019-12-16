
<template>
  <section class="section-title-scene">
    <div class="section-title-container" ref="container">
      <div v-for="n in 6" class="section-title-text-row" :key="n" ref="rows">
        <div class="section-title-text" v-for="k in 8" :key="k">
          <img src="../../../assets/_img/kitchen-bg-sign.png" />
        </div>
      </div>
      <!-- <img src="../../../assets/_img/main-scene/kitchen.png" class="section-title-image" ref="image"/> -->

    </div>
    <div></div>
  </section>
</template>

<script>
import { TweenLite, TimelineLite, Power2 } from 'gsap/TweenMax';
import sectionMixin from '../../mixins/sectionMixin';

export default {
  name: 'title-section',
  mixins: [sectionMixin],
  data() {
    return {
      rows: [],
    };
  },
  props: ['title', 'image'],
  mounted() {
    const img = document.querySelector('.scene-kitchen-counter');
    // const { image, } = this.$refs;
    this.rows = this.$refs.rows;
    this.timeLine = new TimelineLite();
    const w = 4000;
    // timeLine.to(this.imageRef, 3, {y:-300});
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.rows.length; i++) {
      let offsetX; let startX; let
        originX;
      if (i % 2 === 0) {
        offsetX = -w * 2;
        originX = '0% 0%';
        startX = 0 - i * 200;
      } else {
        startX = -w * 0.25 - i * 200;
        offsetX = w * 0.75;
        originX = '100% 0%';
      }
      this.timeLine.add(
        TweenLite.fromTo(
          this.rows[i],
          10,
          { x: startX, trasnformOrigin: originX, },
          { x: offsetX, trasnformOrigin: originX, }
        ),
        0
      );
    }
    this.timeLine.add(
      TweenLite.fromTo(
        this,
        2,
        { top: '80vh', },
        { top: '0vh', ease: Power2.easeIn, }
      ),
      0
    );
    // this.timeLine.add(
    //   TweenLite.to(image, 2, { top: '-100vh', ease: Power2.easeOut, }),
    //   4
    // );
    this.scene
      .setTween(this.timeLine)
      .setPin(this.$refs.container, { pushFollowers: true, })
      .on('leave', () => {
        img.style.position = 'absolute';
      });
    // this.$scrollmagic.updateScene(this.scene);
    console.log(this.scene);
  },
};
</script>
