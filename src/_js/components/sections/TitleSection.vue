
<template>
  <section class="section-title-scene">
    <div class="section-title-container" ref="container">
      <div v-for="n in 8" class="section-title-text-row" :key="n" ref="rows">
        <div class="section-title-text" v-for="k in 4" :key="k">
          Шикарные&nbsp;кухни
        </div>
      </div>
      <!-- <img src="../../../assets/_img/main-scene/kitchen.png" class="section-title-image" ref="image"/> -->

    </div>
  </section>
</template>

<style>
body {
  overflow-x: hidden;
}
.section-title-scene {
    overflow: hidden;
}

.section-title-container {
  width: 100%;
  min-width: 100vw;
  min-height: 100vh;
}

.section-title-text-row:nth-child(even)  {
  position: relative;
  transform:translateX(200%);
}

.section-title-text-row:nth-child(odd)  {
  position: relative;
  transform:translateX(-100%);
}

.section-title-text-row {
  max-height: 10vh;  
}

.section-title-text {
  -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 8.5vw;
    line-height: 12.75vh;
    color: #fff;
    font-family: Transgender Grotesk;
    text-transform: lowercase;
    text-shadow: 0px 16px 32px rgba(109, 0, 53, 0.08), 0px 6px 12px rgba(109, 0, 53, 0.06);
    text-align: center;
    white-space: nowrap;
}

.section-title-text img {
  width: 20vw;
  height: 100%;
}

.section-title-scene {
  height: auto;
}

.section-title-text-row {
  min-width: auto;
  padding: 0;
  max-height: 43vh;
  margin: 0;
  display: inline-flex;
}
 

</style>

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
    // const { image, } = this.$refs;
    this.rows = this.$refs.rows;
    this.timeLine = new TimelineLite();
    const w = this.rows[0].offsetWidth;
    console.log(w);
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
      .duration(window.screen.height * 6)
      .triggerHook(0.9);
    this.$scrollmagic.updateScene(this.scene);

    const animTimeline = new TimelineLite();
    const bg = document.querySelector('.scene-kitchen-counter');
    // for (let i = 0; i < 4; i++) {
    //   animTimeline.add(TweenLite.to(bg, 1, { className: `k${i}${1}`, }));
    // }
    animTimeline.to(bg, 0.5, { className: 'k1', })
      .to(bg, 0.5, { className: 'k2', })
      .to(bg, 0.5, { className: 'k3', })
      .to(bg, 0.5, { className: 'k4', })
      .to(bg, 0.5, { className: 'k5', });
    const pinScene = this.$scrollmagic.scene({
      triggerElement: this.$el,
      duration: window.screen.height * 1,
      reverse: true,
      triggerHook: 0,
    })
      .setTween(animTimeline)
      .setPin(this.$refs.container, { pushFollowers: true, });
    this.$scrollmagic.addScene(pinScene);
  },
};
</script>
