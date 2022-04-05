const ApiError = require("../exeptions/api-error");
const tokenService = require("../service/token-service");

module.exports=function(req,res,next){
    try {
        const autorizationHeader = req.headers.authorization;
        console.log(autorizationHeader)
        if(!autorizationHeader){
            next(ApiError.UnautorizedError())
        }
        const accessToken= autorizationHeader;
        if(!accessToken){
            next(ApiError.UnautorizedError())
        }
        const userData = tokenService.validateAccessToken(accessToken);
        if(!userData){
            next(ApiError.UnautorizedError())
        }
        req.user=userData;
        next()

    } catch (err) {
        next(ApiError.UnautorizedError())
    }
}


