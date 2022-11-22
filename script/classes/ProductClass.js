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
    toObj(){
        return{
            "id": this.#id,
            "item_name": this.#item_name,
            "price":this.#price,
            "amount": this.#amount,
            "category": this.#category,
            "img_prod": this.#img_prod,
            "physical": this.#physical,
            "digital": this.#digital,
        }
    }
}

export default ProductClass;
