import Page from '@js/page.svelte';

require('@css/index.styl');

const page = new Page({
  target: document.body,
  props: {
    title: 'Quiz banner'
  }
});

window.page = page;

export default page;