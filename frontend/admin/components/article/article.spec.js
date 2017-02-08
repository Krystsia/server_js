
require ('./index.js');
require ('./article.ctrl.js');


describe('article', () => {
  beforeEach(angular.mock.module('components.article'));

  let $compile,
      $rootScope;

  beforeEach(inject((_$compile_, _$rootScope_) => {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }))

  it('\'Published\' at exists', () => {
    var element = $compile("<blog-article></blog-article>")($rootScope);
    $rootScope.$digest();
     expect(element.html()).toContain('Published at');
  })

  it('\'Published by\' exists', () => {
    var element = $compile("<blog-article></blog-article>")($rootScope);
    $rootScope.$digest();
     expect(element.html()).toContain('Published by');
  })
});
