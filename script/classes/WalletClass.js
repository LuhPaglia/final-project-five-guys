class WalletClass{
    #pId;
    #pName;
    #status;
    #key;
    constructor(pId,pName,status){
        this.#pId = pId;
        this.#pName = pName;
        this.#status = status;
        this.#key = this.genDigitalKey(24);
    }
    toObj(){
        return{
            "pId": this.#pId,
            "pName": this.#pName,
            "status": this.#status,
            "key": this.#key
        }
    }
    genDigitalKey(size) {
        var stringKey = '';
        var chrs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < size; i++) {
            stringKey += chrs.charAt(Math.floor(Math.random() * chrs.length));
        }
        return stringKey;
    }
}
export default WalletClass;