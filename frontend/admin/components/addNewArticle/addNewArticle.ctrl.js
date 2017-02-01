import getArticles from '../../services/getArticles';

export default class AddNewArticleCtrl {
  constructor(FileUploader, getArticles) {
    this.data = {};
    this.uploader = new FileUploader();
    console.log(this.uploader);

  }

  // onAddArticle() {
  //   this.uploader.formdata.push(this.data);
  //   this.uploader.upload();
  // }
}

AddNewArticleCtrl['$inject'] = ['FileUploader'];
AddNewArticleCtrl['$inject'] = ['getArticles'];
