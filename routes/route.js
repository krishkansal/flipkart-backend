import express from 'express';

import { userSignup } from '../controller/user-controller.js';
import { userLogin } from '../controller/user-controller.js';
import { getProducts ,getProductById} from '../controller/product-controller.js';
import { addPaymentGateway , paytmResponse} from '../controller/payment-controller.js';


const router=express.Router();
// router.get('/',(req,res)=>{
//     res.status(200).json({msg:'Working'})
// })

router.post('/signup',userSignup);
// router.post('/signup',(request,response)=>{
//     try{
//         console.log(request.body);
//         return response.status(200).json({msg:'Working'})
//     }catch(error){
//         console.log(error);
//         response.status(500).json({msg:'server error'})
//     }});

router.post('/login',userLogin);

router.get('/products',getProducts);
router.get('/product/:id', getProductById);

router.post('/payment', addPaymentGateway);
router.post('/callback',paytmResponse);


export default router;