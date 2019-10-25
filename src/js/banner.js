import { getSkus, getProducts } from '@js/api.js';

const bannerTpl = require('@tpl/banner.html');
const slideTpl = require('@tpl/slide.html');

export default class Banner {
  constructor(el) {
    if (typeof(el) == 'object') {
      this.$el = el;
    } else {
      this.$el = document.querySelector(el);
    }
    this.params = this.getParams();
    this.$title = el.querySelector('.lp-quiz-banner__title');
    this.$slider = el.querySelector('.lp-quiz-slider');
    this.$sliderTrack = el.querySelector('.lp-quiz-slider__body');
    return this.render();
  }

  getParams() {
    let params = [];
    this.$el.querySelectorAll('.lp-quiz-slide')
      .forEach($el => params.push({
        title: $el.dataset.title,
        skus: getSkus($el.dataset.skus)
      }));
    return params;
  }
  async render() {
    const products = await getProducts('TO048AWCTFH0,MA002EWFHCU0');
    this.$sliderTrack.innerHTML = bannerTpl({ products, slide: slideTpl });
  }
}