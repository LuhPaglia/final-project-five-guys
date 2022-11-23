class shopCart{
    #user;
    #shopMap = new Map();
    #totalPrice;
    constructor(user){
        this.#user = user;
    }
    hasItem(itemId){
        return this.#shopMap.has(itemId)
    }
    getItem(itemId){
        return this.#shopMap.get(itemId)
    }
    addItem(item){
        this.#shopMap.set(item.id, item);
    }
    delProduct(itemId) {
        this.#shopMap.delete(itemId);
    }
    calTotalMap(){
        let total = 0;
        for(const product of this.getAllValues()){
            total += product.price * product.amount;
        }
        return total;
    }
    getAllValues(){
        return this.#shopMap.values();
    }
    toObj(item){
        return {
            id: item.id,
            item_name: item.item_name,
            price: item.price,
            amount: item.amount,
            category: item.category,
            img_prod: item.img_prod,
            physical: item.physical,
            digital: item.digital   
        }
    }
}
export default shopCart;