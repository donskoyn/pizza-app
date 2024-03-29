const Router=require('express').Router;
const userController=require('../controllers/user-controller');
const router = new Router();
const {body}=require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');
const PizzaController = require('../controllers/pizza-controller');

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min:4,max:32}),
    userController.registration
);
router.post('/login',userController.login);
router.post('/logout',userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh',userController.refresh);
router.post('/user',authMiddleware,userController.getUser);
router.post('/pizzas',PizzaController.getPizzas);
router.post('/addpizza',PizzaController.addPizza);
router.post('/addtocart',authMiddleware,userController.addToCart);
router.post('/like',PizzaController.likePizza)


module.exports=router

