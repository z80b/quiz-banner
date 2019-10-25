import DomElement from '@js/dom-element.js';

class BannerSlide extends DomElement{
  constructor(el) {
    super(el);
    this.init();
  }

  init() {
    this.startDate = this.$el.dataset.startDate;
    this.endhDate = this.$el.dataset.endDate;
  
  }
}

export default BannerSlide;