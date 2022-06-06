const UserModel=require('../models/user-model');
const bcrypt=require('bcrypt');
const uuid=require('uuid');
const mailService=require('./mail-service');
const tokenService=require('./token-service');
const UserDto = require('../dtos/user-dto');
const ApiError = require('../exeptions/api-error');

class UserService{
    async registration(email,password){
        const candidate= await UserModel.findOne({email})
        if(candidate){
            throw ApiError.BadRequest(`This email ${email} was registery in app `);
        }
        const hashPassword= await bcrypt.hash(password,3);
        const activationLink=uuid.v4();
        
        const user= await UserModel.create({email,password:hashPassword,activationLink});
    
        //await mailService.sendActivationMail(email,`${process.env.API_URL}/api/activate/${activationLink}`);
        
        const userDto=new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id,tokens.refreshToken);

        return{...tokens,user:userDto}
    }

    async activate(activationLink){
        const user = await UserModel.findOne({activationLink});
        if(!user){
            throw ApiError.BadRequest('Don`t curent link!')
        }
        user.isActivated=true;
        await user.save()
    }

    async login(email,password){
        const user=await UserModel.findOne({email});
        if(!user){
            throw ApiError.BadRequest('User with this Email don`t found');
        }
        const isPasswordEquals = await bcrypt.compare(password,user.password);
        if(!isPasswordEquals){
            throw ApiError.BadRequest('Invalid password');
        }
        const userDto=new UserDto(user);
        const tokens=tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id,tokens.refreshToken);

        return {...tokens,user:userDto}
    }

    async logout(refreshToken){
        const token=tokenService.removeToken(refreshToken);
        return token;
    }

    async refresh(refreshToken){
        if(!refreshToken){
            throw ApiError.UnautorizedError();
        }
        const userData=tokenService.validateRefreshToken(refreshToken);
        const tokenFromDB=await tokenService.findToken(refreshToken);

        if(!userData || !tokenFromDB){
            throw ApiError.UnautorizedError()
        }

        const user= await UserModel.findById(userData.id)
        const userDto=new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});//refresh userDto.id
        await tokenService.saveToken(userDto.id,tokens.refreshToken);

        return{...tokens,user:userDto}
    }

    async getUserdata(email){
        const user = UserModel.findOne({email});
        console.log(user)
        return user
    }
    async addToCart(email,cart){
        
        const newCart={date:new Date(),cart}
        const user=await UserModel.findOneAndUpdate({email},{$push:{cart:newCart}},{returnOriginal:false,upsert:true});
        return user
    }
}

module.exports= new UserService();


