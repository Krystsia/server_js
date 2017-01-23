// implementation composite

let instance = null;

export default class Highlight {
    constructor() {
        if(!instance) {
          this.elements = [];
          instance = this;
        }
      return instance;
    }

    highlight() {
      for (let element of this.elements) {
        element.highlight();
      }
    }
    add(element) {
      this.elements.push(element);
    }
    remove(element) {
      const i = this.elements.indexOf(element);
      this.elements.splice(i, 1);
    }
}
