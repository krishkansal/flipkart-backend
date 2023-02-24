import express from 'express';
import { userSignup } from '../controller/user-controller.js';
import { userLogin } from '../controller/user-controller.js';
import { getProducts } from '../controller/product-controller.js';

const router=express.Router();
// router.get('/',(req,res)=>{
//     res.status(200).json({msg:'Working'})
// })

router.post('/signup',userSignup);
router.post('/login',userLogin);

router.get('/products',getProducts);

// router.post('/signup',(request,response)=>{
//     try{
//         console.log(request.body);
//         return response.status(200).json({msg:'Working'})
//     }catch(error){
//         console.log(error);
//         response.status(500).json({msg:'server error'})
//     }});

export default router;