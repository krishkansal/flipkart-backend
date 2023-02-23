import User from '../model/user-schema.js';

export const userSignup = async (request, response) => {
    try {

        const exist=await User.findOne({username:request.body.username});
        if(exist){
            return response.status(401).json({message:'username already exist'})
        }
        const user=request.body;
        const newUser=new User(user);
        await newUser.save();

        response.status(200).json({message:user});
    } catch (error) {
        response.status(500).json({message:error.message});
    }
}

export const userLogin=async (req,res)=>{
    try{
        const username=req.body.username;
        const password=req.body.password;

        let user=await User.findOne({username:username,password:password});
        if(user){
            return res.status(200).json({ data: user });
        }else{
            return res.status(400).json('Invalid login');
        }
    }catch(error){
        res.status(500).json('error',error.message);

    }
}