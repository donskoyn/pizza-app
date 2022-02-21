const PizzaModel=require('../models/pizza-model');

class PizzaService{
    
    async getAllPizzas(type){
        if(type===''){
            const pizzas=PizzaModel.find()
            return pizzas
        }else{
            const pizzas =PizzaModel.find({category:type})
            return pizzas
        }
        
    }
    async addPizza(id,imageUrl,name,types,sizes,price,category,rating){
        const pizza=await PizzaModel.findOne({id:id});
        if(pizza){
            throw new Error('Need unic Id pizza');
        }
        await PizzaModel.create({
            id,
            imageUrl,
            name,
            types,
            sizes,
            price,
            category,
            rating,
        });
    }
}

module.exports= new PizzaService();



