import Banner from '@js/banner.svelte';

require('@css/index.styl');

const banner = new Banner({
  target: document.querySelector('.lp-quiz-banner'),
  props: {
    title: 'Banner4'
  }
});

window.banner = banner;

export default banner;