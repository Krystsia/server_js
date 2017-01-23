export default class ToggleDescription {
  static showDescription(e) {
      const { target: element } = e;
      const [ descriptor ] = element.getElementsByClassName('descriptor');
      if (descriptor) {
          descriptor.style.cssText = 'top: 0;';
          element.addEventListener('mouseleave', ToggleDescription.hideDescription);
          e.preventDefault();
      }

      return;
  }

  static hideDescription(e) {
      const [ descriptor ] = e.target.getElementsByClassName('descriptor');
      descriptor.style.cssText = 'top: 100%;';
      e.preventDefault();
  }
}
