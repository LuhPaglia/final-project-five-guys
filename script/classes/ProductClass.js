class ProductClass{
    #id;
    #item_name;
    #price;
    #amount;
    #category;
    #img_prod;
    #physical;
    #digital;
    constructor(id, item_name, price, amount, category, img_prod, physical, digital){
        this.#id = id;
        this.#item_name = item_name;
        this.#price = price;
        this.#amount = amount;
        this.#category = category;
        this.#img_prod = img_prod;
        this.#physical = physical;
        this.#digital = digital;
    }
}

export default ProductClass;
