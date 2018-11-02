const defaults = {
    _id: '',
    name: '',
    price: 0,
    unitPrice: 0,
    content: '',
    imageUrls: [],
    createAt: 0,
    editAt: 0,
    userId: ''
}

export class ProductModel {
    constructor (options) {
        this._id = options._id || defaults._id;
        this.name = options.name || defaults.name;
        this.price = options.price || defaults.price;
        this.unitPrice = options.unitPrice || defaults.unitPrice;
        this.content = options.content || defaults.content;
        this.imageUrls = options.imageUrls || defaults.imageUrls;
        this.createAt = options.createAt || defaults.createAt;
        this.editAt = options.editAt || defaults.editAt;
        this.userId = options.userId || defaults.userId;
    }
}