export default class CustomErrorView {
    constructor(errorMessage) {
        this.errorMessage = errorMessage;
    } 
    
    cunstructErrorTemplate() {
        let li = document.createElement('li');
        
        li.classList.add('error-message');
        li.innerHTML = `<p>${this.errorMessage}</p>`;
        return li;
    }
}