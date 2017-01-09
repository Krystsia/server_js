export default class ArticleCtrl {
    constructor(model) {
        this.model = model;
    }; 
	
	getDate(date) {
		let myDate = new Date(date);
		return `${myDate.getDate()}.${myDate.getMonth() + 1}.${myDate.getFullYear()}`;
	}
    
    static showDescription(e) {
        const { target: element } = e;
        const [ descriptor ] = element.getElementsByClassName('descriptor');
        if (descriptor) {
            descriptor.style.cssText = 'top: 0;';
            element.addEventListener('mouseleave', ArticleCtrl.hideDescription);
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

