// implementation singleton

let instance = null;

export default class DateService {
    constructor() {
        if(!instance) {
            instance = this;
        }
      return instance;
    }
    getDate(date) {
        let myDate = new Date(date);
        return `${myDate.getDate()}.${myDate.getMonth() + 1}.${myDate.getFullYear()}`;
    }
}
