import Article from '../common/components/articleComponent/article.js';

((d) => {
    d.addEventListener('DOMContentLoaded', function() {
      let addArticleForm = document.forms.newArticle;

      fetch('/getArticles', {method: "GET"}).then((response) => {
          return response.json();
        }).then(data => {
          Article.init(data, '.articles');
        });

      addArticleForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let form = new FormData();
        form.append('title', addArticleForm.elements.title.value);
        form.append('content', addArticleForm.elements.content.value);
        form.append('image', addArticleForm.elements.image.files[0]);

        fetch('/addNewArticle', {
            method: "POST",
            body: form
          }).then((response) => {
            return response.json();
          }).then((data) => {
            addArticleForm.reset();
            Article.add(data, '.articles');
          });
        })
    })
})(document);
