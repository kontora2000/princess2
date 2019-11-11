<template>
<div>
  <button class="button-measurer fixed-block" id="call-babes" @click="openDialog">Вызвать замерщика</button>
  <button class="button-measurer fixed-block" ref="background" id="call-babes-background"></button>
</div>
</template>

<script>
import { TweenMax } from 'gsap/TweenMax';

export default {
  name: 'call-babes-button',
  methods: {
    openDialog() {
      const bg = this.$refs.background;
      TweenMax.to(bg, 0.2, {
        scaleX: 30,
        scaleY: 30,
        onComplete: () => {
          document.body.style.overflow = '';
          document.body.style.position = '';
          this.$store.commit('openDialog');
        },
      });
    },
  },
};
</script>
