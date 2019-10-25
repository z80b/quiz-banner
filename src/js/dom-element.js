class DomElement {
  constructor(el) {
    if (typeof(el) == 'object') {
      this.$el = el;
    } else this.$el = document.querySelector(el);
  }

  getElement(selector) {
    return this.$el.querySelector(selector);
  }

  getElements(selector) {
    return this.$el.querySelectorAll(selector);
  }
}

export default DomElement;