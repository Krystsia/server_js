require ('./index.js');
require ('./addNewArticle.ctrl.js');

//require ('../../index.js');


describe('uplader', () => {
  beforeEach(angular.mock.module('components.addArticle'));

  let $controller,
      mockGetArticle;

  beforeEach(inject((_$controller_, getArticle) => {
        $controller = _$controller_;
        mockGetArticle = getArticle;
    }));

  describe('addNewArticleCtrl', () => {
    it('uploader remove after upload', () => {
       let controller = $controller('addNewArticleCtrl', {getArticle: mockGetArticle});
       expect(controller).toBeDefined();

    })
  });


});
