import DateService from '../../services/getDate_service.js';

export default class ArticleView {
    constructor(model, ctrl) {
        this.model = model;
        this.ctrl = ctrl;
    }

    constructTemplate() {
        let li = document.createElement('li');
        li.innerHTML = `<a href="${this.model.url}">
                            <h2>${this.model.title}</h2>
                            <p class="published-at">${new DateService().getDate(this.model.publishedAt)}</p>
                            <img src="${this.model.urlToImage}" alt="image"/>
                            <p class="descriptor"><span>${this.model.description}</span><p>
                        </a>`;

		return li;
    }
}
