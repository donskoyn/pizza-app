module.exports = class ApiError extends Error{
    status;
    errors;

    constructor(status,message,errors=[]){
        super(message);
        this.status=status;
        this.errors=errors;
    }

    static UnautorizedError(){
        return new ApiError(401,'User Unautorized')
    }
    static BadRequest(message,errors=[]){
        console.log(errors)
        return new ApiError(400,message,errors)
    }
    static BadRequestPizaa(message){
   
        return new ApiError(400,message)
    }
}