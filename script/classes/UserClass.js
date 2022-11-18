class UserClass{
    #customerId;
    #userName;
    #first_name;
    #last_name;
    #password;
    #email;
    constructor(customerId,userName,first_name,last_name,password,email){
        this.#customerId = customerId;
        this.#userName = userName;
        this.#first_name = first_name;
        this.#last_name = last_name;
        this.#password = password;
        this.#email = email;
    }
}
export default UserClass;
