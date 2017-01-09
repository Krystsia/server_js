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
        let title = addArticleForm.elements.title.value;
        let content = addArticleForm.elements.content.value;

        fetch('/addNewArticle', {
            method: "POST",
            headers: {
              "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: `title=${title}&content=${content}`
          }).then((response) => {
            return response.json();
          }).then((data) => {
            addArticleForm.reset();
            Article.add(data, '.articles');
          });
        })
    })
})(document);
