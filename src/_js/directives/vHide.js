import { TweenLite } from 'gsap/TweenMax';

export default {
  inserted(el) {
    window.addEventListener('scroll', () => {
      const scrollPos = (window.scrollY || document.documentElement.scrollTop);
      const clientHeight = window.screen.availHeight;
      if (scrollPos > clientHeight) {     
        document.querySelector('.logo-pr').style.width = '0px';
        document.querySelector('.logo-cess').style.width = '0px';   
        TweenLite.to(el, 0.5, {
          // eslint-disable-next-line quote-props
          'opacity': 0.0,
          onComplete() {
          // eslint-disable-next-line no-param-reassign
            el.style.display = 'none';
          },
        });
      } else
      if ((scrollPos < clientHeight)) {
        document.querySelector('.logo-pr').style.width = '';
        document.querySelector('.logo-cess').style.width = ''; 
        TweenLite.to(el, 0.5, {
          opacity: 1.0,
          onComplete() {
          // eslint-disable-next-line no-param-reassign
            el.style.display = 'block';
          },
        });
      }
    });
  },
  update(el) {
    const scrollPos = (window.scrollY || document.documentElement.scrollTop);
    const { clientHeight, } = window.document.documentElement;
    if (scrollPos > clientHeight) {
      document.querySelector('.logo-pr').style.width = '0px';
      document.querySelector('.logo-cess').style.width = '0px';
      TweenLite.to(el, 500, {
        opacity: 0.0,
        onComplete() {
          // if (el.classList.hasClass('logo-crown'))
          // eslint-disable-next-line no-param-reassign
          el.style.display = 'none';
        },
      });
    } else
    if ((scrollPos < window.document.documentElement.clientHeight)
        && (scrollPos > (clientHeight - 50))) {
      TweenLite.to(el, 500, {
        opacity: 1.0,
        onComplete() {
          // if (el.classList.hasClass('logo-crown'))
          // eslint-disable-next-line no-param-reassign
          el.style.display = 'block';
          document.querySelector('.logo-pr').style.width = '0px';
          document.querySelector('.logo-cess').style.width = '0px';
        },
      });
    }
  },

};
