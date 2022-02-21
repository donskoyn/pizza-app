const pizzaService=require('../service/pizza-service');
const ApiError = require('../exeptions/api-error');


class PizzaController{
    async getPizzas(req,res,next){
        try{
            const {category}=req.body
            const pizzas = await pizzaService.getAllPizzas(category);
            return res.json(pizzas);

        }catch(err){
            next(err)
        }
    }
    async addPizza(req,res,next){
        try{
            const {id,imageUrl,name,types,sizes,price,category,rating}=req.body;
            const pizza= await pizzaService.addPizza(id,imageUrl,name,types,sizes,price,category,rating);
            return res.json(pizza)

        }catch(err){
            return next(ApiError.BadRequestPizaa('Invalid id pizza'))
        }
    }
    
}

module.exports=new PizzaController()
