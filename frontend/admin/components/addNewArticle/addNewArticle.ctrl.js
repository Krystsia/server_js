export default class AddNewArticleCtrl {
  constructor() {
    this.data = {};
  }

  onAddArticle() {
    const addArticleForm = document.forms.newArticle;
    let form = new FormData();



    form.append('title', addArticleForm.elements.title.value);
    form.append('content', addArticleForm.elements.content.value);
    form.append('image', addArticleForm.elements.image.files[0]);

    fetch('/addNewArticle', {method: "POST", body: form}).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        addArticleForm.reset();
        dispatch({type: 'ADD_ARTICLE', payload: data.articles});
    }).catch((error) => {console.log(error)});
  }
}
