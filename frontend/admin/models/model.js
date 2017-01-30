export default class Model {
    constructor(data) {
        this.data = data;
    }

    addField(name) {
        this[name] = this.data[name] || null;
    }
}
