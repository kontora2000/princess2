export default {
  data() {
    return {
      timeline: null,
      scene: null,
    };
  },
  props: {
    backgroundColor: String,
    textColor: String,
  },
  mounted() {
    this.scene = this.$scrollmagic
      .scene({
        triggerElement: this.$el,
        triggerHook: 0,
        duration: this.$el.clientHeight,
        reverse: true, 
      })
      .on('enter', () => {
        this.changeBackgroundColor();
        this.changeTextColor();
        console.log('enter');
      })
      .addIndicators();
    this.$scrollmagic.addScene(this.scene);
  },
  methods: {
    changeBackgroundColor() {
      if (this.backgroundColor !== '') {
        this.$store.commit('changeBackground', this.backgroundColor);
      }
    },
    changeTextColor() {
      if (this.textColor === '' || this.textColor === undefined) {
        this.textColor = 0xffffff - parseInt(this.backgroundColor.replace('#', '0x'), 16);
        if (this.textColor > 0x7fffff) this.textColor = '#ffffff';
        else {
          this.textColor = '#000000';
        }
        const els = document.querySelectorAll('div,span,p,i,section,a,li');
        // eslint-disable-next-line no-plusplus
        for (let k = 0; k < els.length; k++) {
          els[k].style.color = this.textColor;
          if (els[k].classList.contains('text-outlined')) {
            els[k].style.WebkitTextStrokeColor = this.textColor;
          }
        }
        document.querySelector('.active').style.textColor = this.textColor;
        document.querySelector('.active').style.borderColor = this.textColor;
      }
    },
  },
};
