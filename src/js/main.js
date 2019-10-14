import axios from 'axios';
import { template } from 'underscore';
import { getSkus, getProducts } from '@js/api.js';

const slideTpl = require('@tpl/slide.html').default;

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
    const $slide = template(slideTpl);
    //console.log(slideTpl);
    let html = '';

    for (let slide of this.params) {
      let data = await getProducts(slide.skus);
      //html += $slide(await getProducts(slide.skus));
      //console.log(data);
    }
    this.$sliderTrack.innerHTML = html;
  }
}