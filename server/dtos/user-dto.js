module.exports=class UserDto{
    email;
    id;
    isActivate;
    cart;
    
    constructor(model){
        this.email=model.email;
        this.id=model._id;
        this.isActivated=model.isActivated;
        this.cart=model.cart
    }
}