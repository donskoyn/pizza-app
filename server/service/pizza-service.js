const pizzaModel = require("../models/pizza-model");
const PizzaModel = require("../models/pizza-model");

class PizzaService {
    async getAllPizzas(type) {
        if (type === "") {
            const pizzas = PizzaModel.find();
            return pizzas;
        } else {
            const pizzas = PizzaModel.find({ category: type });
            return pizzas;
        }
    }
    async addPizza(id, imageUrl, name, types, sizes, price, category, rating) {
        const pizza = await PizzaModel.findOne({ id: id });
        if (pizza) {
            throw new Error("Need unic Id pizza");
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
    async likePizza (_id,email){
        const likedEmail=await pizzaModel.findOne({liked:email,_id})
        if(likedEmail){
            const userLiked=await pizzaModel.findOneAndUpdate({_id},
                { $inc: { rating: -1 }, "$pull": { 
                    "liked": { $in:[email] }
                } }
                );
                console.log(userLiked)
        }
      
           
        if(!likedEmail){
            const pizza=await pizzaModel.findByIdAndUpdate(_id,{ $inc: { rating: 1 },$push: { liked: [email] }},);
            console.log(pizza)
        }
        
            
    }
}

module.exports = new PizzaService();
