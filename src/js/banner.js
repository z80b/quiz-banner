import { getSkus, getProducts } from '@js/api';
import DomElement from '@js/dom-element';
import BannerSlide from '@js/banner-slide.js';

const bannerTpl = require('@tpl/banner.html');
const slideTpl = require('@tpl/slide.html');

class Banner extends DomElement {
  constructor(el) {
    super(el);
    this.init();
    return this;
  }

  init() {
    this.$slides = this.getElements('.bf-actions-slide');
    this.slidesCount = this.$slides.length;
    this.slides = [];
    this.$slides.forEach(el => {
      this.slides.push(new BannerSlide(el));
    });
  }
}

export default Banner;