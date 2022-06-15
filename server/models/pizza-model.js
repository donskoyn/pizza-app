const {Schema, model}= require('mongoose');


const PizzaSchema=new Schema({
    id:{type:String,unique:true,required:true},
    imageUrl:{type:String,required:true},
    name:{type:String,required:true},
    types:{type:Array,required:false},
    sizes:{type:Array,required:false},
    price:{type:Number,required:true},
    category:{type:String,required:true},
    rating:{type:Number,required:false},
    liked:{type:Array,required:false}
})


module.exports=model('Pizza',PizzaSchema);
